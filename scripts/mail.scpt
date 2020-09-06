#!/usr/bin/osascript

if application "Mail" is running
    tell application "Mail"
        set mailCnt to the unread count of inbox
    end tell

    if mailCnt > 0 then
        return mailCnt
    else
        return 0
    end if
end if
