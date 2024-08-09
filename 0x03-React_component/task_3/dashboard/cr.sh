#!/usr/bin/env bash

# This script is used to create new component files in the src folder

args=("$@")
# Check if the src/Components folder exists

for i in "${args[@]}"
do
    if [ ! -d "src/$i" ]; then
        mkdir src/$i
    fi

    # Check if the js file already exists
    if [ -f "src/$i/$i.js" ]; then
        echo "src/$i/$i.js already exists"
    else
        touch src/$i/$i.js
        echo "src/$i/$i.js file created"
    fi

    # Check if the css file already exists
    if [ -f "src/$i/$i.css" ]; then
        echo "src/$i/$i.css exists"
    else
        touch src/$i/$i.css
        echo "src/$i/$i.css file created"
    fi

    # Check if the test file already exists
    if [ -f "src/$i/$i.test.js" ]; then
        echo "src/$i/$i.test already exists"
    else
        touch src/$i/$i.test.js
        echo "src/$i/$i.test file created"
    fi
done
