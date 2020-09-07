import { run } from "uebersicht";
import { container, flexSeparator, bg } from "./lib/styles";

export const refreshFrequency = 5000;

export const command = async (dispatch) => {
  const [
    workspace,
    process,
    music,
    mail,
    netstat,
    battery,
    datetime,
  ] = await Promise.all([
    run("marsbar/scripts/workspace.sh"),
    run("marsbar/scripts/process.sh"),
    run("marsbar/scripts/music.scpt"),
    run("marsbar/scripts/mail.scpt"),
    run("marsbar/scripts/netstat.sh"),
    run("marsbar/scripts/battery.sh"),
    run("marsbar/scripts/datetime.sh"),
  ]);

  dispatch({
    type: "UPDATE",
    payload: { workspace, process, music, mail, netstat, battery, datetime },
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

export const render = (data) => (
  <div className={container}>
    <div className={bg.purple}>
      <strong>{data.workspace}</strong>
    </div>
    <div className={bg.none}>{data.process}</div>
    <div className={flexSeparator} />
    {data.music && <div className={bg.none}>{`\ufb75\u00a0${data.music}`}</div>}
    {data.mail > 0 && (
      <div className={bg.none}>{`\uf0e0 \u00a0${data.mail}`}</div>
    )}
    <div className={bg.darkPink}>{data.netstat}</div>
    <div className={bg.pink}>{data.battery}</div>
    <div className={bg.brightPink}>{data.datetime}</div>
  </div>
);
