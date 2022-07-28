import { accessToken } from 'mapbox-gl';
import * as React from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { Marker, Layer, AttributionControl, FullscreenControl, ScaleControl, Source, GeolocateControl } from 'react-map-gl';
import "./App.css"
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import Directions from './Components/Directions';
import AddLocation from './Components/AddLocation';






function App() {
  
  const properties = {
    longitude: -77.030091,
    latitude: 38.910078,
    zoom: 2,
  }
 

  const MAPBOX_TOKEN = "pk.eyJ1IjoiYWJkdWxsYWh1Z3VyIiwiYSI6ImNqcHRnaDgxbDA1dWo0NXF3NDIzenFtcGIifQ.64t6cmzJ79MTvJzQNjShMA"
  return (
    <div className='w-full h-screen' >
      <Map
        initialViewState={properties}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >      
        <Directions/>    
        <AddLocation/>           
        <FullscreenControl position='bottom-left' />
        <NavigationControl position='bottom-right' />
        <GeolocateControl onTrackUserLocationEnd={"36.5,30,2"} position='bottom-right' />
      </Map>
    </div>
  );
}

export default App;
