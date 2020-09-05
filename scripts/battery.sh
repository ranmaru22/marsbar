#!/bin/sh

if pmset -g batt | grep -q AC; then
    printf "⚡ "
else
    printf "♥ "
fi

pmset -g batt | grep -o "[0-9]*%"
