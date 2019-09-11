#!/bin/bash

# Set default options
OPTION_PLUGIN_NAME=${OPTION_PLUGIN_NAME:-lando-tandem}

# PARSE THE ARGZZ AND OPTZ
while (( "$#" )); do
  case "$1" in
    --name|--name=*)
      if [ "${1##--name=}" != "$1" ]; then
        OPTION_PLUGIN_NAME="${1##--name=}"
        shift
      else
        OPTION_PLUGIN_NAME=$2
        shift 2
      fi
      ;;
  esac
done

# Make sure there is a lando install to download a plugin to.
check_for_lando () {
  if [ -d ~/.lando ]; then
    echo "Lando is ready to go!"
    return 0
  else
    echo "You need to download and install Lando before you install plugins."
    echo $'\n\t'https://docs.devwithlando.io$'\n'
    return 1
  fi
}

check_or_create_plugins_dir () {
  if [ check_for_lando ]; then
    if [ -d ~/.lando/plugins ]; then
      echo "Plugins directory is ready to go!"
      return 0
    else
      echo "Creating ~/.lando/plugins directory."
      mkdir -p ~/.lando/plugins
      if [ -d ~/.lando/plugins ]; then
        return 0
      else
        return 1
      fi
    fi
  else
    echo "Could not create the ~/.lando/plugins directory."
    return 1
  fi
}

install_plugin () {
  if [ check_or_create_plugins_dir ]; then
    git clone git@github.com:thinktandem/lando-tandem.git ~/.lando/plugins/${OPTION_PLUGIN_NAME}
    cd ~/.lando/plugins/${OPTION_PLUGIN_NAME}
    yarn install || npm install || echo "need to install either yarn or npm"
    return 0
  fi
}

# Do the things
install_plugin
