#!/usr/bin/env bash

git checkout master
# git merge develop

set -e
echo "Enter publishing version: "
read VERSION

read -p "publishing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Publishing $VERSION ..."

  # build
  VERSION=$VERSION npm run build

  # commit
  git add -A
  git commit -m "[build] $VERSION"

  # publish
  git push origin master
  git push origin v$VERSION
  npm publish

fi