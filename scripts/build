SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
WORKSPACE=$(realpath "$SCRIPT_DIR"/..)
# echo "$SCRIPT_DIR"
# echo "$WORKSPACE"
sphinx-build  "${WORKSPACE}/src/" "${WORKSPACE}/docs"
