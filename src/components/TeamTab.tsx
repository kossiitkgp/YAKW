import { useStore } from "@nanostores/react";
import { teamTableState } from "./TeamTable.jsx";
import "../styles/teamtab.scss";

interface TabItem {
    displayName: string;
}

export default function TeamTab() {
    const tabItems: TabItem[] = [
        { displayName: "Core Team", },
        { displayName: "Executives", },
        { displayName: "Advisors", },
    ];

    return(
        <div className="tab">
        {
            tabItems.map((item, index) => (
            <a
              key={index}
              className={ "heading" + (useStore(teamTableState) === item.displayName ? " active" : "") }
              href="#team"
              onClick={() => teamTableState.set(item.displayName)}
            >
                <div className="tab-title">{item.displayName}</div>
            </a>
            ))
        }
        </div>
    );
}
