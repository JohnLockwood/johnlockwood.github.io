#!/bin/bash
set -x
WORKSPACE="/home/runner/work/johnlockwood.github.io/johnlockwood.github.io"
sphinx-build  "${WORKSPACE}/src/" "${WORKSPACE}/docs"
