#!/usr/bin/osascript

if application "Mail" is running
    tell application "Mail"
        return the unread count of inbox
    end tell
end if
