import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: "u1",
            image: "https://cc-prod.scene7.com/is/image/CCProdAuthor/d-03-4?$pjpeg$&jpegSize=200&wid=720",
            name: "Pruthuvi",
            placeCount: 2,
        },
    ];

    return <UsersList items={USERS} />;
};

export default Users;
