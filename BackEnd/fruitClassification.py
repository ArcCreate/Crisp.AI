from flask import Flask, request, jsonify
import datetime
import boto3
import os
import numpy as np
import tensorflow as tf
import keras
import math
import PIL
from flask_cors import CORS, cross_origin


from keras.api.preprocessing import image


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# Configuration
local_train = 'data'
fruit_image_size = (128, 128)
batch_size = 16
validation_split = 0.2


UPLOAD_FOLDER = "user_images"


# Data generators for training and validation
datagen = tf.keras.preprocessing.image.ImageDataGenerator(
   rescale=1. / 255,
   validation_split=validation_split
)


# Prepare the training and validation generators
fruit_train_generator = datagen.flow_from_directory(
   local_train,
   target_size=fruit_image_size,
   batch_size=batch_size,
   class_mode='categorical',
   subset='training',
   shuffle=True
)


fruit_validation_generator = datagen.flow_from_directory(
   local_train,
   target_size=fruit_image_size,
   batch_size=batch_size,
   class_mode='categorical',
   subset='validation',
   shuffle=True
)




def build_fruit_model():
   model = tf.keras.Sequential([
       tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(128, 128, 3)),
       tf.keras.layers.MaxPooling2D(),
       tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
       tf.keras.layers.MaxPooling2D(),
       tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
       tf.keras.layers.MaxPooling2D(),
       tf.keras.layers.Flatten(),
       tf.keras.layers.Dense(128, activation='relu'),
       tf.keras.layers.Dense(len(fruit_train_generator.class_indices), activation='softmax')
       # Updated for dynamic classes
   ])
   return model




# Function to train the fruit classification model
def train_fruit_model():
   model = build_fruit_model()
   model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])


   # Early stopping to prevent overfitting
   early_stopping = tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)


   # Fit the model
   model.fit(
       fruit_train_generator,
       steps_per_epoch=fruit_train_generator.samples // batch_size,
       validation_data=fruit_validation_generator,
       validation_steps=fruit_validation_generator.samples // batch_size,
       epochs=10,  # Increase epochs for better training
       callbacks=[early_stopping]
   )


   model.save('FruitClassificationModel.h5')


   return model




def build_ripeness_score_model():
   model = tf.keras.Sequential([
       tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(128, 128, 3)),
       tf.keras.layers.MaxPooling2D(),
       tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
       tf.keras.layers.MaxPooling2D(),
       tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
       tf.keras.layers.MaxPooling2D(),
       tf.keras.layers.Flatten(),
       tf.keras.layers.Dense(128, activation='relu'),
       tf.keras.layers.Dense(1)  # Single output for the ripeness score
   ])
   return model




# Function to compute ripeness score
def compute_ripeness_score(fruit_type):
   # Create a generator for ripeness images
   ripeness_data_path = f'data/{fruit_type}/'
   ripeness_datagen = tf.keras.preprocessing.image.ImageDataGenerator(rescale=1. / 255, validation_split=0.2)


   # Train and validation generators
   ripeness_generator = ripeness_datagen.flow_from_directory(
       ripeness_data_path,
       target_size=fruit_image_size,
       batch_size=batch_size,
       class_mode='sparse',
       shuffle=True,
       subset='training'
   )


   val_generator = ripeness_datagen.flow_from_directory(
       ripeness_data_path,
       target_size=fruit_image_size,
       batch_size=batch_size,
       class_mode='sparse',
       subset='validation'
   )


   # Build the model
   model = build_ripeness_score_model()


   # Compile the model
   model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mae'])


   # Fit the model
   model.fit(
       ripeness_generator,
       validation_data=val_generator,
       steps_per_epoch=math.ceil(ripeness_generator.samples / batch_size),
       validation_steps=math.ceil(val_generator.samples / batch_size),
       epochs=10
   )


   model.save('RipenessModel.h5')


   return model




# Predict fruit type from an image
def predict_fruit_type(img_path, fruit_model):
   img = image.load_img(img_path, target_size=fruit_image_size)
   img_array = image.img_to_array(img)
   img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
   img_array /= 255.0  # Rescale to [0, 1]


   predictions = fruit_model.predict(img_array)
   predicted_class = np.argmax(predictions)
   fruit_classes = list(fruit_train_generator.class_indices.keys())


   return fruit_classes[predicted_class]  # Return the predicted fruit name




# Predict ripeness from an image
def predict_ripeness(img_path, fruit_type):
   img = image.load_img(img_path, target_size=fruit_image_size)
   img_array = image.img_to_array(img)
   img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
   img_array /= 255.0  # Rescale to [0, 1]


   ripeness_model = compute_ripeness_score(fruit_type)
   ripeness_score = ripeness_model.predict(img_array)


   return ripeness_score[0][0]  # Return the ripeness score




# def main():
#     # Train the fruit classification model
#     fruit_model = train_fruit_model()
#
#     # Example of predicting fruit type
#     # Replace this with your actual image path
#     image_path = 'rottenbanana.jpg'  # Provide a valid image path
#
#     # Step 1: Predict fruit type
#     predicted_fruit_type = predict_fruit_type(image_path, fruit_model)
#     print(f'Predicted Fruit Type: {predicted_fruit_type}')
#
#     # Step 2: Predict ripeness score based on predicted fruit type
#     ripeness_score = predict_ripeness(image_path, predicted_fruit_type)
#     print(f'The predicted ripeness score for {predicted_fruit_type} is: {ripeness_score}')




@app.route('/upload', methods=['POST'])
def upload():
   if 'file' not in request.files:
       return jsonify({"error": "No file part"}), 400


   file = request.files['file']


   if file.filename == '':
       return jsonify({"error": "No selected file"}), 400


   # Save the file in the specified upload directory
   file_path = os.path.join(UPLOAD_FOLDER, file.filename)
   file.save(file_path)  # Save the file


   return jsonify({"message": "File uploaded successfully!", "file_path": file_path}), 200




if __name__ == "__main__":
   app.run(debug=True)
