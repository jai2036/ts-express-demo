#!/bin/bash
# Jai : Merge two files after ts compilation is successful. 
if [ ! -r src/appd-config-inj.js ]
    then
        echo "appd-config-inj.js missing. "
    else
        if [ ! -r src/server.js ]
            then
                echo "server.js not found after  tsc *.ts!"
            else 
                cd src; cat appd-config-inj.js server.js > temp.js; mv temp.js server.js
        fi;         
fi;