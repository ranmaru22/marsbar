import { run } from "uebersicht";
import {
  container,
  flexSeparator,
  workspaceStyle,
  processStyle,
  netstatStyle,
  batteryStyle,
  datetimeStyle,
} from "./lib/styles";

export const refreshFrequency = 5000;

export const command = async (dispatch) => {
  const pWorkspace = run("marsbar/scripts/workspace.sh");
  const pProcess = run("marsbar/scripts/process.sh");
  const pNetstat = run("marsbar/scripts/netstat.sh");
  const pBattery = run("marsbar/scripts/battery.sh");
  const pDatetime = run("marsbar/scripts/datetime.sh");
  const [workspace, process, netstat, battery, datetime] = await Promise.all([
    pWorkspace,
    pProcess,
    pNetstat,
    pBattery,
    pDatetime,
  ]);

  dispatch({
    type: "UPDATE",
    payload: { workspace, process, netstat, battery, datetime },
  });
};

export const initialState = {};
export const updateState = (action, state) => {
  switch (action.type) {
    case "UPDATE":
      return action.payload;
    default:
      return state;
  }
};

export const render = ({ workspace, process, netstat, battery, datetime }) => (
  <div className={container}>
    <div className={workspaceStyle}>{workspace}</div>
    <div className={processStyle}>{process}</div>
    <div className={flexSeparator} />
    <div className={netstatStyle}>{netstat}</div>
    <div className={batteryStyle}>{battery}</div>
    <div className={datetimeStyle}>{datetime}</div>
  </div>
);
