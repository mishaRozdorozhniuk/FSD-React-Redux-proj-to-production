export {
    Profile,
    ProfileSchema
} from "./model/types/profile"

export {
    profileReducer,
    profileAction
} from "./model/slice/profileSlice"

export {
    fetchProfileData
} from "./model/services/fetchProfileData/fetchProfileData"

export {
    ProfileCard
} from "./ui/ProfileCard/ProfileCard"
