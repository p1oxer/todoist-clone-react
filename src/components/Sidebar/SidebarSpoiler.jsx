import Icon from "../../Icon";
import { SidebarSpoilerItem } from "./SidebarSpoilerItem";
import { useState } from "react";

export const SidebarSpoiler = () => {
    const iconsWhite = "#ffffffc2";
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div
            className={
                isOpened
                    ? "sidebar__spoiler spoiler-sidebar _opened"
                    : "sidebar__spoiler spoiler-sidebar"
            }
        >
            <div className="spoiler-sidebar__title">
                <p>Мои проекты</p>
                <div className="spoiler-sidebar__buttons">
                    <button
                        type="button"
                        title="plus"
                        className="spoiler-sidebar__button"
                    >
                        <Icon
                            className="spoiler-sidebar-title__icon"
                            icon="plus"
                            size="13px"
                            color={iconsWhite}
                        />
                    </button>
                    <button
                        type="button"
                        title="plus"
                        className="spoiler-sidebar__button"
                        onClick={() => setIsOpened(!isOpened)}
                    >
                        <Icon
                            className="spoiler-sidebar-title__icon spoiler-sidebar-title__icon--arrow"
                            icon="down-arrow"
                            size="17px"
                            color={iconsWhite}
                        />
                    </button>
                </div>
            </div>
            <div className="test">
                <ul className={"spoiler-sidebar__body body-spoiler-sidebar"}>
                    <SidebarSpoilerItem />
                </ul>
            </div>
        </div>
    );
};
