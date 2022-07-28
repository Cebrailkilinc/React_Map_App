import React from 'react'
import { accessToken } from 'mapbox-gl';
import Map, { NavigationControl } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { Marker, Layer, AttributionControl, FullscreenControl, ScaleControl, Source, GeolocateControl } from 'react-map-gl';

import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';


function AddLocation() {

    const [markers, setMarkers] = useState([])
    const [lat, setLat] = useState(12)
    const [long, setLong] = useState(12)

    const addMarker = () => {
        let arr = []
        arr.push({ log:long, lat:lat })
        setMarkers(arr.concat(markers))
        setLat("")
        setLong("")        
      }

    return (
        <div>
            {markers.map((ite, i) => {
                return <Marker key={i} longitude={ite.log} latitude={ite.lat} color="red" />
            })}

            <input onChange={(e) => { setLong(e.target.value) }} id='longinput' className='absolute z-50 right-10 top-10 p-1 outline-none bg-slate-300 text-white placeholder:text-white rounded-lg' placeholder='longtitude' />
            <input onChange={(e) => { setLat(e.target.value) }} id='langinput' className='absolute z-50 right-10 top-20 p-1 outline-none bg-slate-300 text-white rounded-lg placeholder:text-white ' placeholder='latitude' />
            <button onClick={addMarker} className='text-sm border px-2 py-1 bg-red-400 rounded-md  absolute z-50 right-10 top-28 text-white' id='button' >Add Loc</button>

        </div>
    )
}

export default AddLocation