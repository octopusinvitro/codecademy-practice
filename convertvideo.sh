#!/bin/bash

# source: https://github.com/ccrisan/motioneye/issues/1067

FILEPATH="$1"
TMPPATH=$(mktemp).mp4

/usr/bin/ffmpeg -i "$FILEPATH" -pix_fmt yuv420p -vcodec libx264 -crf 20 -strict -2 "$TMPPATH"
/bin/mv "$TMPPATH" "."
#/bin/rm -f "$FILEPATH"
