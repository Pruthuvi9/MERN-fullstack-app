import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    async function initMap() {
      //@ts-ignore
      const { Map } = await window.google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary(
        "marker"
      );

      let map = new Map(mapRef.current, {
        zoom: zoom,
        center: center,
        mapId: "a56457eb3e3c44ed",
      });

      new AdvancedMarkerElement({
        map: map,
        position: center,
      });
    }

    initMap();
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
