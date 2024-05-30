import os
from PIL import Image
source = 'kubejs/assets/kubejs/textures/item/mi'

for folder in os.listdir(source):
    if os.path.isdir(os.path.join(source, folder)):
        for file in os.listdir(os.path.join(source, folder)):
            # reisize the 16x16 images to 22x22, putting the original in the middle and filling in the rest with transparent pixels
            if file.endswith('.png'):
                img = Image.open(os.path.join(source, folder, file))
                new_img = Image.new('RGBA', (22, 22), (0, 0, 0, 0))
                new_img.paste(img, (3, 3))
                new_img.save(os.path.join(source, folder, file))