#! /bin/sh

find='"/'
replace='"./'

for filename in $(find ./build/dist/assets -name "*.proxy.js" -type f -follow -print)
do
    sed -i 's+"/+"./+g' $filename
done