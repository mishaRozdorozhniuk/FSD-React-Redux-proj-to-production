import React from 'react';
import DynamicModuleLoader, {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

const reducers: ReducersList = {
    profile: profileReducer
};

const ProfilePage = () => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            ProfilePage
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
