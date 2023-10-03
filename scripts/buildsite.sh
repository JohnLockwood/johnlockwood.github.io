#!/bin/bash
set -x
echo "Hello"
WORKSPACE="/home/runner/work/johnlockwood.github.io"
sphinx-build  "${WORKSPACE}/src/" "${WORKSPACE}/docs"
