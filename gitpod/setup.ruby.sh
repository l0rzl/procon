#!/bin/sh
brew update
brew install rbenv ruby-build
rbenv install 2.7.1
rbenv init 2>> ~/.bash_profile
#rbenv rehash
echo Type 'eval "$(rbenv init -)"' or 'source ~/.bash_profile'
