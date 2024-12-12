import React, {memo} from 'react';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import cls from "widgets/Sidebar/ui/SideBarItem/SideBarItem.module.scss";
import {SidebarItemType} from "../../model/items";
import {classNames} from "shared/lib/classNames/classNames";

interface SidebarItemProps {
   item: SidebarItemType;
   collapsed: boolean;
}

const SideBarItem = memo(({item, collapsed}: SidebarItemProps) => {
    return (
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>
                    {item.text}
                </span>
            </AppLink>
    );
});

export default SideBarItem;

