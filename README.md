# Introduction
Appd instrumentaion to monitor typescript-express app.

## How to use

1. Donwload & Unzip ts-express-demo.zip
2. Update appd config in appd-config-inj.js
3. `docker build . -t <img_name>`


**Pre-requisites**:
Install docker

## How to Run
Once build is done, you can then start the image in a new container with:  
`docker run -it -d -p 5000:5000 <img_name> /bin/bash`

http://localhost:5000 in a browser should be available. 

Have fun!



