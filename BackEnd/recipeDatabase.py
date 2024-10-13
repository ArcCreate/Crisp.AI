import pandas as pd
import math

# Load the CSV file
df = pd.read_csv("C:\\Users\\shrey\\OneDrive\\Desktop\\recipeDatabaseMod\\recipe_database.csv")

fruitRes = []
data = [1.23, 0.80, "banana"]  # Example data for fruit freshness and type

# Write fruit data to a text file (for simulation purposes)
with open('fruitResult.txt', 'w') as f:
    for line in data:
        f.write(str(line) + "\n")

# Function to read fruit data
def readFruit():
    with open("fruitResult.txt", "r") as f:
        for line in f:
            fruitRes.append(line.strip())
    return fruitRes

readFruit()

# Convert fruit results to appropriate types
fruitRes[0] = float(fruitRes[0])
fruitRes[1] = float(fruitRes[1])

# Debugging: Print the content of fruitRes
print("Fruit Results:", fruitRes)

# Fruit freshness and quality scoring arrays
fruitFresh = [0, 1, 2, 3]
fruitVal = [0, 75, 50, 25]
fruitKey = ["Unripe!", "Ripe", "Overripe", "Rotten"]

# Compute quality and freshness score
def computeFruit():
    quality = "Unripe!"
    qualityMetric = 0
    
    for x in range(len(fruitFresh)):
        if fruitFresh[x] == math.trunc(fruitRes[0]):
            quality = fruitKey[x]
            qualityMetric = fruitVal[x]
            break
    
    if quality != "Unripe!":
        freshness_factor = fruitRes[1] * 25
        quality_score = qualityMetric + freshness_factor
        return quality, quality_score
    else:
        return quality, None

result = list(computeFruit())

# Debugging: Print the result of computeFruit
print("Compute Fruit Result:", result)

# Initialize a list to hold recipe IDs
recipe_ids = []

# Initialize filtered_df as an empty DataFrame
filtered_df = pd.DataFrame()

# Debugging: Print the dataframe before filtering
print("Original DataFrame:\n", df.head())

# Filter DataFrame based on fruit type and quality score
if fruitRes[2] == "apple":
    if result[1] >= 75:
        filtered_df = df.query('fruitIndex == 0 and qualityIndex >= 1').copy()
    elif result[1] >= 50:
        filtered_df = df.query('fruitIndex == 0 and qualityIndex >= 2').copy()
    elif result[1] >= 25:
        filtered_df = df.query('fruitIndex == 0 and qualityIndex == 3').copy()

elif fruitRes[2] == "banana":
    if result[1] >= 75:
        filtered_df = df.query('fruitIndex == 1 and qualityIndex >= 1').copy()
    elif result[1] >= 50:
        filtered_df = df.query('fruitIndex == 1 and qualityIndex >= 2').copy()
    elif result[1] >= 25:
        filtered_df = df.query('fruitIndex == 1 and qualityIndex == 3').copy()

# Debugging: Print the filtered DataFrame to see if any rows are selected
print("Filtered DataFrame:\n", filtered_df)

if not filtered_df.empty:
    # Collecting unique recipe IDs
    recipe_ids = filtered_df['imageId'].unique().tolist()

# Return the recipe IDs and results in the format [recipe_ids, quality, quality_score]
result_array = [recipe_ids, result[0], result[1]]

# Print the final result
print("Recipe IDs and Results:", result_array)
