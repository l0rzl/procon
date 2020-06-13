#!/bin/sh
brew update
brew install rbenv ruby-build
rbenv install 2.7.1
rbenv init 2>> ~/.bash_profile
#rbenv rehash
rbenv exec gem install bundler
echo Set shell environment: 'eval "$(rbenv init -)"' or 'source ~/.bash_profile'
echo Make a new Gemfile: 'rbenv exec bundle init'
