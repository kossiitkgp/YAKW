import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

export const teamTableState = atom("Core Team");

export default function TeamTable(props) {
    const teamState = useStore(teamTableState);

    switch (teamState) {
      case "Core Team":
        return(props.ctms);
      case "Executives":
        return(props.executives);
      case "Advisors":
        return(props.advisors);
    }
}
