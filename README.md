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

## Notes

The mail script only works while Mail.app is running. Without this check, Übersicht would constantly launch Mail.app to check for new messages, which is annoying. It uses the count of the universal inbox. You can change this behaviour by editing the script as follows if you only want to return the unread count of a specific mailbox or a specific account.

```applescript
return the unread count of mailbox "INBOX" of account "My Account"
```

This should also work with other mail applications, as long as they properly interface with AppleScript.

## License

Free and open source under GPLv3. Feel free to share and modify to your heart's content.
