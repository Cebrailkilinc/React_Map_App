import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import MapDataService from '../Storage/api'
import polyline from "@mapbox/polyline"
import { Marker } from 'react-map-gl'
import mapboxgl from 'mapbox-gl'
import { Map } from 'react-map-gl'


function Directions() {

    const [mapData, setMapData] = useState([])
    const [geometryPoint, setGeometryPoint] = useState([])

    useEffect(() => {
        let mapDataService = new MapDataService()
        mapDataService.getData().then(result => setMapData(result.data))

    }, [])

    try {

        console.log(mapData)
        
    } catch (error) {
        
    }

    return (
        <div>
           

        </div>
    )
}

export default Directions