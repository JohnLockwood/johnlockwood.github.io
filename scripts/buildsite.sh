#!/bin/bash
set -x

true || rm -rf public
sphinx-build  doc/ public/
