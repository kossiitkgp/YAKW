import { useStore } from "@nanostores/react";
import { teamTableState } from "./TeamTable.jsx";
import "../styles/teamtab.scss";

interface TabItem {
    displayName: string;
    link: string;
    icon: string;
}

export default function TeamTab() {
    const tabItems: TabItem[] = [
    {
        displayName: "Core Team",
        team: "ctms",
    },
    {
        displayName: "Executives",
        team: "executives",
    },
    {
        displayName: "Advisors",
        team: "advisors",
    },
    ];

    return(
        <div class="tab">
        {
            tabItems.map((item, index) => (
            <a
              class:list={{ active: item.team === "ctms" }}
              href="#team"
              onClick={() => teamTableState.set(item.team)}
            >
                <div class="tab-title">{item.displayName}</div>
            </a>
            ))
        }
        </div>
    );
}
