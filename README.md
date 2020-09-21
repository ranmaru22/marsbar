# marsbar

![Screenshot of Marsbar](./marsbar.png)

A simple bar widget for [Übersicht](http://tracesof.net/uebersicht/) that can be used with [yabai](https://github.com/koekeishiya/yabai). It's basically a simplified version of [Pecan](https://github.com/zzzeyez/pecan) with space-age colours.

## Installation

Clone the repo into Übersicht's widget directory.

```sh
git clone https://github.com/ranmaru22/marsbar.git "$HOME/Library/Application Support/Übersicht/widgets/marsbar"
```

Add the following signals to your `yabairc` to make the workspace indicator and active window name work properly.

```sh
yabai -m signal --add event=space_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"marsbar-index-jsx\"'"
yabai -m signal --add event=display_changed \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"marsbar-index-jsx\"'"
yabai -m signal --add event=application_front_switched \
    action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"marsbar-index-jsx\"'"
```

If you don't use multiple monitors, you can omit the `display_changed` signal.

## Configuration

To modify fonts or colours, edit the CSS definitions in the `lib/styles.js` file. All scripts are located in the `scripts` folder and are simple shell scripts which you can hack to make the bar show whatever you want.

It's easy to add new components by writing a new script, adding it to the Promise array in `index.jsx` and then creating a new component for it in the `render` function.

The default fonts are ligaturized [IBM Plex Mono](https://www.ibm.com/plex/) and the [Nerd Fonts](https://www.nerdfonts.com/font-downloads) version of [Droid Sans Mono](https://fonts.google.com/?query=droid+sans+mono) for glyphs. You can find current versions of both in my [dotfiles repo](https://github.com/ranmaru22/dotfiles/tree/master/fonts) (the IBM Plex Variant is called _LigaLex_ to conform with its licence), or change the fonts in `lib/styles.js` to whatever you like.

## Notes

### Mail script

The mail script only works while Mail.app is running. Without this check, Übersicht would constantly launch Mail.app to check for new messages, which is annoying. It uses the count of the universal inbox. You can change this behaviour by editing the script as follows if you only want to return the unread count of a specific mailbox or a specific account.

```applescript
return the unread count of mailbox "INBOX" of account "My Account"
```

This should also work with other mail applications, as long as they properly interface with AppleScript.

### Music script

The music script is very hacky for songs that are not in your library (e.g. radio streams or playing from Apple Music without adding it to your library first), because for some reason Music.app does not return a well-behaved object of which AppleScript can access the fields. The workaround is to actually extract the string from the GUI that shows in the now-playing area.

This only works when there is a window that System Events can read from, though. So if you close the window with the red button, even when a song is still playing, the script will not return anything. You can minimize or hide the window, though.

## Licence

Free and open source under GPLv3. Feel free to share and modify to your heart's content.
