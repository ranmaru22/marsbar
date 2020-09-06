import { run } from "uebersicht";
import {
  container,
  flexSeparator,
  bgNone,
  bgPurple,
  bgDarkPink,
  bgPink,
  bgBrightPink,
} from "./lib/styles";

export const refreshFrequency = 10000;

export const command = async (dispatch) => {
  const pWorkspace = run("marsbar/scripts/workspace.sh");
  const pProcess = run("marsbar/scripts/process.sh");
  const pMail = run("marsbar/scripts/mail.scpt");
  const pNetstat = run("marsbar/scripts/netstat.sh");
  const pBattery = run("marsbar/scripts/battery.sh");
  const pDatetime = run("marsbar/scripts/datetime.sh");
  const [
    workspace,
    process,
    mail,
    netstat,
    battery,
    datetime,
  ] = await Promise.all([
    pWorkspace,
    pProcess,
    pMail,
    pNetstat,
    pBattery,
    pDatetime,
  ]);

  dispatch({
    type: "UPDATE",
    payload: { workspace, process, mail, netstat, battery, datetime },
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

export const render = ({
  workspace,
  process,
  mail,
  netstat,
  battery,
  datetime,
}) => (
  <div className={container}>
    <div className={bgPurple}>{workspace}</div>
    <div className={bgNone}>{process}</div>
    <div className={flexSeparator} />
    <div className={bgNone}>{mail > 0 ? `\uf0e0 \u00a0${mail}` : ""}</div>
    <div className={bgDarkPink}>{netstat}</div>
    <div className={bgPink}>{battery}</div>
    <div className={bgBrightPink}>{datetime}</div>
  </div>
);
