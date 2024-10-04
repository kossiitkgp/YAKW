import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

export const teamTableState = atom("Core Team");

export default function TeamTable(props) {
    const teamState = useStore(teamTableState);

    switch (teamState) {
      case "Core Team":
        return(<div>{props.ctms}</div>);
      case "Executives":
        return(<div>{props.executives}</div>);
      case "Advisors":
        return(<div>{props.advisors}</div>);
    }
}
