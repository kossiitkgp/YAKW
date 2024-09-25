import { useState } from 'react'
import { teamTableState } from "../utils/state.ts"

// fix redundant variables and refactor code
export default function TeamTable(props) {
    const [team, setTeam] = useState("ctms");
    
    teamTableState.listen(() => {
        setTeam(teamTableState.teamState);
    })

    let out = null;

    switch (team) {
      case "ctms":
        return(<div>props.ctms</div>);
        break;
      case "executives":
        return(<div>props.executives</div>);
        break;
      case "advisors":
        return(<div>props.advisors</div>);
        break;
    }
}
