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
        <div class="tab">
        {
            tabItems.map((item, index) => (
            <a
              class={ "heading" + (useStore(teamTableState) === item.displayName ? " active" : "") }
              href="#team"
              onClick={() => teamTableState.set(item.displayName)}
            >
                <div class="tab-title">{item.displayName}</div>
            </a>
            ))
        }
        </div>
    );
}
