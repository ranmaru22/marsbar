#!/bin/sh

printf "↑↓ "

if ! networksetup -getairportnetwork en0 | grep -q "not associated"; then
    networksetup -getairportnetwork en0 | cut -c 24-
else
    printf "NOT CONNECTED"
fi

# if type /usr/local/bin/ifstat &> /dev/null; then
#     /usr/local/bin/ifstat -nzSb 0.1 1 | awk 'FNR == 3 {printf "↓ %0.2f ↑ %0.2f", $6/1000, $7/1000}'
# fi
