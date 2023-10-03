#!/bin/bash
set -x
echo "Hello"
true || rm -rf docs
sphinx-build  ../src/ ../docs
