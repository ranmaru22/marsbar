import { css } from "uebersicht";

export const container = css({
  position: "relative",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  top: 0,
  left: 0,
  height: "32px",
  width: "calc(100vw - 64px)",
  margin: "8px 32px",
  backgroundColor: "#262626",
  borderRadius: "8px",
  boxShadow: "1px 4px 8px 0 rgba(0, 0, 0, 0.40)",
  font: "13px 'Liga IBM Plex Mono', 'DroidSansMono Nerd Font'",
  color: "#f1f1f1",
  "& :first-child": {
    borderRadius: "8px 0 0 8px",
  },
  "& :last-child": {
    borderRadius: "0 8px 8px 0",
  },
});

const flexItem = {
  display: "flex",
  alignItems: "center",
  padding: "0 15px",
  height: "100%",
};

// Fills space between items and pushes them to the edges or to
// the neighbouring separator.
export const flexSeparator = css({
  flexGrow: 1,
});

export const bgNone = css({
  ...flexItem,
});

export const bgPurple = css({
  ...flexItem,
  backgroundColor: "#77569c",
});

export const bgDarkPink = css({
  ...flexItem,
  backgroundColor: "#c074a9",
});

export const bgPink = css({
  ...flexItem,
  backgroundColor: "#ca84b3",
});

export const bgBrightPink = css({
  ...flexItem,
  backgroundColor: "#d99fc2",
});
