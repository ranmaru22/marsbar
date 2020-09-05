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
  boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.20)",
  font: "13px 'Liga IBM Plex Mono', 'DroidSansMono Nerd Font'",
  color: "#f1f1f1",
  "&": {},
});

const flexItem = {
  display: "flex",
  alignItems: "center",
  padding: "0 15px",
  height: "100%",
};

export const flexSeparator = css({
  flexGrow: 1,
});

export const workspaceStyle = css({
  ...flexItem,
  fontWeight: 800,
  borderRadius: "8px 0 0 8px",
  backgroundColor: "#77569c",
});

export const processStyle = css({
  ...flexItem,
});

export const loadavgStyle = css({
  ...flexItem,
  backgroundColor: "#b26099",
});

export const netstatStyle = css({
  ...flexItem,
  backgroundColor: "#c074a9",
});

export const batteryStyle = css({
  ...flexItem,
  backgroundColor: "#ca84b3",
});

export const datetimeStyle = css({
  ...flexItem,
  backgroundColor: "#d99fc2",
  borderRadius: "0 8px 8px 0",
});
