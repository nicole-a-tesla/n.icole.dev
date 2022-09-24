import type { NextPage } from 'next'
import Map, { Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Travel: NextPage = () => {
  return <div style={{width: "100vw", height: "100vh"}}>
      <Map 
        style={{width: "100%", height: "100%"}}
        mapStyle="https://demotiles.maplibre.org/style.json"
        mapLib={maplibregl}>

        <Marker longitude={0} latitude={0} anchor="bottom" >
        </Marker>

      </Map>;
    </div>
}

export default Travel;
