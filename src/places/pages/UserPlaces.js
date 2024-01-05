import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Empire State Building",
        description: "One of the most famous skyscrapers in the world",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
        address: "20 W 34th St., New York, NY 10001, United States",
        location: {
            lat: 40.7484405,
            lng: -73.9882393,
        },
        creator: "u1",
    },
];

const UserPlaces = (props) => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(
        (places) => places.creator === userId
    );

    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
