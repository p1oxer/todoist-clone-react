import { useState } from "react";
import "./assets/scss/style.scss";
import Icon from "./Icon";
import { Sidebar } from "./components/Sidebar";

function App() {
    const [sidebarOpened, setSidebarOpened] = useState(true);
    return (
        <>
            <div className="wrapper">
                <Sidebar
                    setSidebarOpened={setSidebarOpened}
                    isOpened={sidebarOpened}
                ></Sidebar>
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
                            color={"#ffffffc2"}
                        />
                    </button>
                    какойт о текст
                </div>
            </div>
        </>
    );
}

export default App;
