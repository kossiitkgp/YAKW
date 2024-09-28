import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

export const teamTableState = atom("ctms");

export default function TeamTable(props) {
    const teamState = useStore(teamTableState);

    switch (teamState) {
      case "ctms":
        return(<div>{props.ctms}</div>);
        break;
      case "executives":
        return(<div>{props.executives}</div>);
        break;
      case "advisors":
        return(<div>{props.advisors}</div>);
        break;
    }
}
