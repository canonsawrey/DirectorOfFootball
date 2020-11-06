from PIL import Image
import glob
import random
# Find all components in their directory
all_components = glob.glob("./headshot_components/*.png")

# Sort components into dictionary, opening as images
features = ["neck", "kit", "head", "eyes", "eyeb", "nose", "mout", "hair"]
prefix_len = len("./headshot_components/")
components = { }
for feature in features:
    file_paths = list(filter(lambda x: x[prefix_len:prefix_len + len(feature)] == feature, all_components))
    components[feature] = list(map(lambda x: Image.open(x), file_paths))

for i in range(0, 20):
    # Choose a random first feature...
    headshot = random.choice(components[features[0]]).copy()
    # Add all other features on top
    for other_feature in features[1:]:
        rand_choice = random.choice(components[other_feature])
        headshot.paste(rand_choice, (0, 0), rand_choice)

    # Save the new headshot!
    headshot.save("headshots/headshot_" + str(i) + ".png", "PNG")
