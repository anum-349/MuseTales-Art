import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import Popup from './Popup'
import './Map.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import restaurantsData from './providence-restaurants.json'
import customMarkerPng from './custom-marker.png'

export default function Map({ layerState }) {
    const mapContainer = useRef(null)
    const mapRef = useRef(null)

    const [popupData, setPopupData] = useState(null)

    const handleMarkerClick = (e) => {
        setPopupData({ lngLat: e.feature.geometry.coordinates, properties: e.feature.properties });
    }

    useEffect(() => {
        if (mapRef.current) return

        mapboxgl.accessToken = "pk.eyJ1IjoiYW51bS00NTAzIiwiYSI6ImNtZ3h3b3FsYTE0dWIybHNiMDdoYWUyOW8ifQ.-ucgmeNZ6PEqMQW7H05aZg"

        // creates map instance and centers viewport over Providence, RI, USA
        mapRef.current = new mapboxgl.Map({
            container: mapContainer.current,
            center: [-71.407, 41.8205],
            zoom: 15.5
        })

        mapRef.current.on('load', () => {

            // load image to use as a custom marker
            mapRef.current.loadImage(
                customMarkerPng,
                (error, image) => {
                    if (error) throw error;
                    mapRef.current.addImage("custom-marker", image, { sdf: true });
                }
            );

            // add a single source for all restaurants
            mapRef.current.addSource('restaurants', {
                type: 'geojson',
                data: restaurantsData
            })

            // add a layer for each cuisine
            for (const layer of layerState) {
                const { name, color } = layer

                const layerId = `restaurants-${name}-symbol`

                // add a circle layer for each cuisine, filtering to only show features with that cuisine.
                if (!mapRef.current.getLayer(layerId)) {
                    // add a layer for each cuisine 
                    for (const layer of layerState) {
                        const { name, color } = layer

                        const layerId = `restaurants-${name}-symbol`

                        // add a symbol layer for each cuisine, filtering to only show features with that cuisine.
                        if (!mapRef.current.getLayer(layerId)) {
                            mapRef.current.addLayer({
                                id: layerId,
                                type: 'symbol',
                                source: 'restaurants',

                                // Grabs local image for custom marker, allows markers to over lap and colors each marker based on the related cuisine color.
                                layout: {
                                    'icon-image': 'custom-marker',
                                    'icon-size': 1,
                                    'icon-allow-overlap': true
                                },
                                'paint': {
                                    'icon-color': color,
                                    'icon-opacity': 0.8,
                                    'icon-halo-color': '#ffffff',
                                    'icon-halo-width': 2.5,
                                    'icon-halo-blur': 1
                                },
                                filter: ['in', ['get', 'cuisine'], ['literal', [name]]]
                            })
                        }
                    }
                }

                // add a click interaction for each of the layers to be used to render the popup
                mapRef.current.addInteraction(`${layerId}-click`, {
                    type: 'click',
                    target: { layerId },
                    handler: handleMarkerClick
                })
                // change the cursor to a pointer when hovering over a marker
                mapRef.current.addInteraction(`${layerId}-mouse-enter`, {
                    type: 'mouseenter',
                    target: { layerId },
                    handler: () => {
                        mapRef.current.getCanvas().style.cursor = 'pointer';
                    }
                })
                // reset the cursor to default image when cursor leaves a marker
                mapRef.current.addInteraction(`${layerId}-mouse-leave`, {
                    type: 'mouseleave',
                    target: { layerId },
                    handler: () => {
                        mapRef.current.getCanvas().style.cursor = '';
                    }
                })
            }
        })
    })

    return (
        <div ref={mapContainer} id="map-container" className='border-caramine border-2 m-5 w-[97%] h-[500px]'>
            <Popup popupData={popupData} mapRef={mapRef} />
        </div>
    )
}