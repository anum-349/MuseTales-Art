import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import Popup from './Popup'
import './Map.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import { ArrowPathIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

import artsData from './providence-arts.json'
import customMarkerPng from './location_marker.png'

const INITIAL_VIEW = {
    longitude: 73.0479,
    latitude: 31.6844,
    zoom: 5,
};

export default function Map() {
    const mapContainer = useRef(null)
    const mapRef = useRef(null)

    const [popupData, setPopupData] = useState(null)

    const handleResetView = () => {
        if (mapRef.current) {
            mapRef.current.flyTo({
                center: [INITIAL_VIEW.longitude, INITIAL_VIEW.latitude],
                zoom: 6.5,
                pitch: 60,
                bearing: 20,
                essential: true
            });
        }
    };

    const handleMarkerClick = (e) => {
        setPopupData({ lngLat: e.features[0].geometry.coordinates, properties: e.features[0].properties });
    }

    useEffect(() => {
        if (mapRef.current) return

        mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

        // creates map instance and centers viewport over Providence, RI, USA
        mapRef.current = new mapboxgl.Map({
            container: mapContainer.current,
            center: [INITIAL_VIEW.longitude, INITIAL_VIEW.latitude],
            zoom: INITIAL_VIEW.zoom,
        })

        mapRef.current.on('load', () => {

            // load image to use as a custom marker
            mapRef.current.loadImage(
                customMarkerPng,
                (error, image) => {
                    if (error) throw error;
                    mapRef.current.addImage("custom-marker", image);
                }
            );

            // add a single source for all restaurants
            mapRef.current.addSource('arts', {
                type: 'geojson',
                data: artsData
            })

            mapRef.current.addLayer({
                id: "arts-layer",
                type: "symbol",
                source: "arts",
                layout: {
                    'icon-image': 'custom-marker',
                    'icon-size': 0.1,
                    'icon-allow-overlap': true
                },
                paint: {
                    'icon-opacity': 1
                },
            });

            // add a click interaction for each of the layers to be used to render the popup
            mapRef.current.on('click', 'arts-layer', handleMarkerClick);
            mapRef.current.on('mouseenter', 'arts-layer', () => {
                mapRef.current.getCanvas().style.cursor = 'pointer';
            })
            mapRef.current.on("mouseleave", 'arts-layer', () => {
                mapRef.current.getCanvas().style.cursor = '';
            })

            mapRef.current.setFog({}); // enables atmospheric effect

            mapRef.current.addSource('mapbox-dem', {
                'type': 'raster-dem',
                'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                'tileSize': 512,
                'maxzoom': 14
            });

            mapRef.current.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });


        })
    })

    return (
        <div ref={mapContainer} id="map-container" className='border-caramine border-2 m-5 w-[95%] md:w-[97%] h-[500px]'>
            <Popup popupData={popupData} mapRef={mapRef} />
            <button
                onClick={handleResetView}
                title="Reset Map View"
                className="absolute top-4 right-4 bg-eerieBlack shadow-md rounded-full p-2 hover:bg-gray-200 transition z-50"
            >
                <ArrowPathIcon className="h-5 w-5 text-white_web" />
            </button>
        </div>
    )
}