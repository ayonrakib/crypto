from PIL import Image


# resize image
# input: image path
# return: resized image path
# method:
#   1. image ke RGB mode e open korbo
#   2. image er pixel size nibo
#   3. image er kotha theke crop korbo shei co ordinate nibo
#   4. image shei co ordinate theke crop korbo
#   5. image show korbo

def resizeImage(imagePath):
    currentImage = Image.open(imagePath)
    width, height = currentImage.size
    left = 5
    top = height / 4
    right = 10
    bottom = 3 * height / 4
    resizedImage = currentImage.crop((left, top, right, bottom))
    resizedImage.show()

resizeImage('D:/Coding/crypto/src/static/images/barGray.png')