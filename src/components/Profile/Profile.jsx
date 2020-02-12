import React from "react";
import styles from './Profile.module.css';
import Avatar from "./Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileWall from "./ProfileWall/ProfileWall";

const Profile = () => {
    return (
        <main className={styles.profile}>
            <Avatar/>
            <ProfileInfo/>
            <ProfileWall/>
        </main>
    )
}

export default Profile;