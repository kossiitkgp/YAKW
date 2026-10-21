import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

export const teamTableState = atom("Core Team");

export default function TeamTable(props) {
  const teamState = useStore(teamTableState);

  switch (teamState) {
    case "Core Team":
      return <div key="ctms" style={{ display: "contents" }}>{props.ctms}</div>;
    case "Executives":
      return <div key="executives" style={{ display: "contents" }}>{props.executives}</div>;
    case "Advisors":
      return <div key="advisors" style={{ display: "contents" }}>{props.advisors}</div>;
  }
}
