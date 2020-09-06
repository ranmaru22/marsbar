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

export const refreshFrequency = 15000;

export const command = async (dispatch) => {
  const promises = [
    run("marsbar/scripts/workspace.sh"),
    run("marsbar/scripts/process.sh"),
    run("marsbar/scripts/mail.scpt"),
    run("marsbar/scripts/netstat.sh"),
    run("marsbar/scripts/battery.sh"),
    run("marsbar/scripts/datetime.sh"),
  ];
  const [
    workspace,
    process,
    mail,
    netstat,
    battery,
    datetime,
  ] = await Promise.all(promises);

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
    {mail > 0 ? <div className={bgNone}>{`\uf0e0 \u00a0${mail}`}</div> : null}
    <div className={bgDarkPink}>{netstat}</div>
    <div className={bgPink}>{battery}</div>
    <div className={bgBrightPink}>{datetime}</div>
  </div>
);
