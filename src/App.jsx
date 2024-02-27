import { useState } from "react";
import "./assets/scss/style.scss";
import Icon from "./Icon";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
    const [sidebarOpened, setSidebarOpened] = useState(true);
    const iconsWhite = "#ffffffc2";
    return (
        <>
            <div className="wrapper">
                <Sidebar setSidebarOpened={setSidebarOpened} isOpened={sidebarOpened} />

                <div className="content">
                    <button
                        onClick={() => setSidebarOpened(!sidebarOpened)}
                        title="Открыть/скрыть сайдбар"
                        type="button"
                        className={
                            sidebarOpened
                                ? "sidebar__button-toggle content-sidebar-button _hidden"
                                : "sidebar__button-toggle content-sidebar-button "
                        }
                    >
                        <Icon
                            className="sidebar-icon"
                            icon="sidebar"
                            size="25px"
                            color={iconsWhite}
                        />
                    </button>
                    какойт о текст
                </div>
            </div>
        </>
    );
}

export default App;
