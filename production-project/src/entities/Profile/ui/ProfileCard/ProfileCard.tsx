import React from 'react';
import {getProfileData} from "entities/Profile/model/selectors/getProfileData/getProfileData";
import {useSelector} from "react-redux";
import {getProfileLoading} from "entities/Profile/model/selectors/getProfileLoading/getProfileLoading";
import {getProfileError} from "entities/Profile/model/selectors/getProfileError/getProfileError";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import Text from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={"Профиль"} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    Редактировать
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder={"Full Name"} className={cls.input} />
                <Input value={data?.lastname} placeholder={"Full Name"} className={cls.input}/>
            </div>
        </div>
    );
};
