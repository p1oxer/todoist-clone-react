import Icon from "../../Icon";
import { useState } from "react";

export const SidebarSpoilerItem = ({ name, color, projectsAmount }) => {
    const [isHovering, setIsHovering] = useState(false);
    const iconsWhite = "#ffffffc2";

    return (
        <li
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="body-spoiler-sidebar__item"
        >
            <p>
                <Icon icon="hashtag" size="13px" color={color ?? "#a3a3a3"} />
                Какое-то имя
            </p>
            <div className="">
                {isHovering ? (
                    <button
                        title="options"
                        type="button"
                        className="body-spoiler-sidebar__options"
                    >
                        <Icon
                            className="options-icon"
                            icon="option"
                            size="20px"
                            color={iconsWhite}
                        />
                    </button>
                ) : (
                    <small>{1}</small>
                )}
            </div>
        </li>
    );
};
