#!/bin/sh

if ps cax | grep -q yabai; then
    /usr/local/bin/yabai -m query --windows --space | /usr/local/bin/jq ".[] | select(.focused==1) | .app" | sed -n 's/"//gp'
fi
