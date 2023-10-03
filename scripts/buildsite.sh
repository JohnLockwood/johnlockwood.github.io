#!/bin/bash
set -x

true || rm -rf docs
sphinx-build  src/ docs
