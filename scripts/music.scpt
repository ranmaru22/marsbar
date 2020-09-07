#!/usr/bin/osascript

if application "Music" is running
    tell application "Music"
        set curState to player state
        if curState is not stopped
            try 
                set trackName to name of current track
                set artistName to artist of current track
                return artistName & " - " & trackName
            on error
                -- when streaming from Apple Music, the above script doesn't work because iTunes doesn't return
                -- a proper object with the correct fields. So here comes the hacky solution ...
                tell application "System Events"
                    tell process "Music"
                        try
                            -- select the Music process and extract the UI elements that show the track
                            set staticTexts to group 1 of group 1 of group 2 of splitter group 1 of window "Music"
                            set containingArtistAlbum to item 1 of static texts of staticTexts
                            set containingTrack to item 2 of static texts of staticTexts
                            set trackName to name of item 1 of containingTrack

                            -- split the text element that shows artist and album title
                            set artistAndAlbum to name of item 1 of containingArtistAlbum
                            set tid to text item delimiters of AppleScript
                            set text item delimiters of AppleScript to {" — "}
                            set artistSplit to text items of artistAndAlbum
                            set text item delimiters of AppleScript to tid

                            -- get artist name out of the array
                            set artistName to item 1 of artistSplit
                            return artistName & " - " & trackName
                        on error
                            -- return nothing if the window can't be found
                            return
                        end try
                    end tell
                end tell
            end try
        end if
    end tell
end if
