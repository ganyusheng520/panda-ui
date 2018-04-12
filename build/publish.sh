#!/bin/bash

# git pull
git pull origin master
# build
npm run build
# ADD commit
git add -A
git commit -m 'publish build'
git push origin master
# publish
npm publish
