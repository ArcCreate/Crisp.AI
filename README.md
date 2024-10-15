# Crisp.AI

**Crisp.AI**: Reduce food waste with AI-driven freshness detection! Capture a picture of your produce, receive a quality index, and discover delicious recipes to keep your kitchen sustainable.

### Table of Contents
- [Inspiration](#inspiration)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Frontend Details](#frontend-details)
- [Backend Details](#backend-details)
- [Challenges](#challenges)
- [Accomplishments](#accomplishments)
- [What We Learned](#what-we-learned)
- [Future Plans](#future-plans)
- [Setup Instructions](#setup-instructions)
- [Demo](#demo)

## Inspiration
Our project was inspired by the growing issue of food waste, particularly with produce. By providing a simple, handheld solution, we aim to help users reduce produce waste by understanding the freshness of their food and offering recipes that use ingredients based on their remaining lifespan.

## Features
- **Produce Freshness Detection**: Take a picture of a fruit, and Crisp.AI will classify it and provide a freshness metric.
- **Recipe Suggestions**: Based on the freshness score, the app generates recipes to use up produce before it spoils.
- **Sustainability**: Promotes conscious consumption and reduces food waste in households.

## Tech Stack
### Frontend
- **React**: A JavaScript library for building user interfaces. React allows us to build complex UI components and manage application state efficiently. The component-based structure made it easier to manage the different aspects of the app (image upload, result display, recipe generation).
- **TypeScript**: TypeScript is a typed superset of JavaScript that adds static types, making the code more predictable and easier to debug. It was used to ensure the codebase remained scalable and maintainable.
- **Tailwind CSS**: A utility-first CSS framework that allowed us to style components rapidly and responsively without writing custom CSS. This enabled fast prototyping while maintaining a consistent and visually appealing design.
- **Vite**: A frontend build tool that provides faster development times and optimizes production builds. Vite was used for local development, allowing for a smooth developer experience by minimizing build times and providing hot-reloading.
- **Axios**: Used for making HTTP requests from the frontend to the backend, particularly for uploading images and fetching the freshness classification results.
  
### Backend
- **AWS SageMaker**: A fully managed machine learning service for building and training ML models. We used SageMaker to train our convolutional neural network (CNN) for fruit classification and freshness scoring.
- **AWS Lambda**: A serverless compute service that allows us to run code without provisioning or managing servers. This was used to handle requests from the frontend, including image uploads and triggering SageMaker to process and classify the image.
- **AWS S3**: Amazon Simple Storage Service (S3) was used to store images uploaded by the user. S3 acts as a storage layer for our app, enabling easy retrieval of images for analysis.
- **Amazon DynamoDB**: A NoSQL database used to store user data, such as previous fruit freshness scores and the corresponding recipes.
- **Python**: Used in the backend to create the logic for handling the image processing and machine learning pipeline. Python powers the core of our application, particularly in the model training and image classification process.

## Frontend Details

### 1. **React (with TypeScript)**
- **Why React?**
  React provides a powerful declarative way to build user interfaces. Its component-based architecture allowed us to break down the UI into reusable components, such as the **Image Upload**, **Freshness Result Display**, and **Recipe Generator**. With TypeScript integrated, we ensured that all data flow within these components was type-safe and maintainable.
  
- **Key Components**:
  - **ImageUpload.tsx**: A component that allows users to upload images of their produce. This component uses the `FileReader` API to display a preview of the uploaded image and sends the image to the backend for classification.
  - **FreshnessResult.tsx**: Displays the freshness score returned from the backend, including color-coded indicators for freshness (green for fresh, yellow for near-spoiling, red for spoiled).
  - **RecipeGenerator.tsx**: Based on the freshness score, this component fetches and displays recipes that make use of the produce, prioritizing recipes that use up produce about to spoil.
  
- **State Management**:
  React's built-in hooks like `useState` and `useEffect` were used to manage component state, making the app interactive and responsive to user inputs. For example, `useEffect` listens for backend responses (freshness score) and updates the UI dynamically based on the classification results.
  
### 2. **Tailwind CSS**
- **Why Tailwind CSS?**
  Tailwind CSS allowed us to build the UI quickly and responsively without needing to write a lot of custom CSS. Its utility-first approach meant we could apply styles directly in the JSX (React) code without worrying about naming CSS classes or dealing with complex stylesheets.

- **Key Styling Features**:
  - **Responsiveness**: Tailwind made it easy to create a responsive layout that works across devices, from mobile to desktop. The app adjusts its layout based on the screen size using Tailwind's responsive utilities (`sm:`, `md:`, `lg:`, etc.).
  - **UI Consistency**: Using utility classes like `flex`, `grid`, `text-center`, `bg-gray-200`, we maintained a clean and cohesive look without writing custom stylesheets.

### 3. **Vite**
- **Why Vite?**
  Vite provides a super-fast development experience compared to traditional bundlers like Webpack. By using Vite, we significantly reduced the time spent waiting for builds and enjoyed fast hot module replacement (HMR) during development. This allowed us to iterate on the UI design and functionality quickly during the hackathon.

### 4. **Axios**
- **Why Axios?**
  Axios was used to handle asynchronous HTTP requests between the frontend and the backend. It simplifies sending data to the backend (e.g., uploading the image) and retrieving responses (e.g., freshness score). Axios provides easy-to-use error handling and integrates well with React’s state management.

## Backend Details

### 1. **AWS SageMaker**
- **Why AWS SageMaker?**
  We chose SageMaker for its robust machine learning capabilities, especially for handling large datasets and training models in a scalable environment. SageMaker was used to train our CNN model, which classifies fruit types and predicts their ripeness based on image inputs.

- **Model Training**:
  The model was trained using a labeled dataset of fruit images with varying ripeness levels. SageMaker handled the entire training process, from data preprocessing to model validation. Once the model was trained, it was deployed and connected to the app through an API, allowing the app to send images and retrieve freshness predictions.

### 2. **AWS Lambda**
- **Why AWS Lambda?**
  Lambda allowed us to run code in a serverless environment, meaning we didn’t have to worry about managing servers or scaling infrastructure. We used Lambda functions to handle incoming image uploads, trigger the SageMaker model, and return the freshness score to the frontend.

- **Process Flow**:
  1. The user uploads an image via the frontend.
  2. A Lambda function is triggered to store the image in an S3 bucket and send the image data to SageMaker.
  3. Once SageMaker returns the classification results, Lambda processes the results and sends them back to the frontend.

### 3. **AWS S3**
- **Why AWS S3?**
  S3 was used for storing all the uploaded images securely. It also integrates seamlessly with other AWS services like Lambda and SageMaker, making it easy to retrieve and process images during the analysis phase.

### 4. **Amazon DynamoDB**
- **Why Amazon DynamoDB?**
  DynamoDB is a NoSQL database that provides fast and flexible database services. We used it to store user data, such as previous freshness scores and generated recipes. This allows users to revisit their previous assessments and recipes, adding a personalized touch to the app.

## Challenges
- **Cloud Integration**: Linking AWS SageMaker, S3 buckets, and the frontend was challenging due to complex documentation and varied use cases.
- **Deployment**: Our demo currently works locally, but we encountered difficulties deploying the AI model in a cloud environment for broader use.

## Accomplishments
- Successfully implemented a classification model with high accuracy.
- Developed a reliable algorithm to compute a freshness score for produce.
- Built a clean and functional UI that balances usability and intuitive design.

## What We Learned
- We faced and overcame obstacles in deploying image recognition models to the cloud, managing training times, iterating on model accuracy, and better understanding AWS services for web applications.

## Future Plans
We envision expanding **Crisp.AI** for use beyond individual consumers, including:
- **Supply Chain Tracking**: Helping retailers prioritize inventory, donate produce nearing spoilage, or discard items past their prime.
- **Batch Processing**: Scalability for larger-scale operations in retail environments.

## Setup Instructions
To run the project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/arccreate/crispAI.git
