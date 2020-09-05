#!/bin/sh

if ps cax | grep -q yabai; then
    /usr/local/bin/yabai -m query --spaces --space | /usr/local/bin/jq ".index"
else
    echo ""
fi
