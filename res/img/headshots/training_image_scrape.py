# For grabbing URLs and images
import requests
# For traversing the html
from bs4 import BeautifulSoup
# For checking image size
from PIL import Image
# For deleting bad image_size
import os

# Some constants
base_url = "https://www.futhead.com/21/players/?level=all_nif&bin_platform=ps"
desired_size = 32; # in px
page_num = 1
imgs_scraped = 0

while page_num <= 150:
    print("Page " + str(page_num))
    req_url = base_url + "&page=" + str(page_num)
    page = requests.get(req_url)
    soup = BeautifulSoup(page.text, 'html.parser')
    imgs = soup.findAll("img", {"class":"player-image"})
    urls = list(map(lambda x: x["data-src"], imgs))
    if not urls:
        print("Failed: " + req_url)
        break
    # Now, save the images
    for url in urls:
        # Get the img data
        img_data = requests.get(url).content
        # Save the image to our training data
        name = './train/futhead/train_' + str(imgs_scraped) + '.png'
        with open(name, 'wb') as handler:
            handler.write(img_data)
            print('Saved train_' + str(imgs_scraped))
        # Ensure the img is correct size
        try:
            image = Image.open(name).convert('RGB') #TODO
            width, height = image.size
        except:
            # Set width and height different so it will be deleted
            width, height = 1, 2
        if width != desired_size or height != desired_size:
            if width == height:
                image.resize((desired_size, desired_size))
                image.save(name)
                imgs_scraped += 1
                print("Incorrect size: " + str(width) + "x" + str(height) + "|Resized")
            else:
                os.remove(name)
                print("Incorrect size: " + str(width) + "x" + str(height) + "|Deleted")
        else:
            imgs_scraped += 1
    page_num += 1
