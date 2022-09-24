import { useState } from "react";
import type { NextPage } from "next";
import Map, { Marker, Popup } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { GetServerSideProps } from "next";

interface Photo {
  url: string;
  id: string;
  lat: number;
  long: number;
}

interface TravelPageProps {
  photos: Photo[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      photos: [
        {
          id: 1,
          url: "https://placekitten.com/50/50",
          lat: 0,
          long: 0,
        },
        {
          id: 2,
          url: "https://placekitten.com/50/50",
          lat: 20,
          long: 50,
        },
        {
          id: 3,
          url: "https://placekitten.com/50/50",
          lat: 45,
          long: 100,
        },
      ],
    },
  };
};

const Travel: NextPage<TravelPageProps> = ({ photos }) => {
  const [selectedMarker, setSelectedMarker] = useState<Photo | null>(null);
  console.log("selectedMarker = ", selectedMarker);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://demotiles.maplibre.org/style.json"
        mapLib={maplibregl}
      >
        {photos.map((photo) => (
          <Marker
            onClick={() => setSelectedMarker(photo)}
            key={photo.id}
            longitude={photo.long}
            latitude={photo.lat}
            anchor="bottom"
          >
            <img src={photo.url} />
          </Marker>
        ))}

        {selectedMarker && (
          <Popup
            longitude={selectedMarker.long}
            latitude={selectedMarker.lat}
            anchor="top"
            closeOnClick={false}
            onClose={() => setSelectedMarker(null)}
          >
            {selectedMarker.id}
          </Popup>
        )}
      </Map>
      ;
    </div>
  );
};

export default Travel;
