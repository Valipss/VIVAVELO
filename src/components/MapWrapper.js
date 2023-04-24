import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import MapPin from './MapPin';
import MapSearchBar from './MapSearchBar';
import tileLayer from '../util/tileLayer';

const center = [50.633333, 3.066667];

const points = [];
//TODO retirer la génération de points aléatoire
for (var i = 0; i < 25; i++) {
    const minLat = 50.613333;
    const maxLat = 50.653333;
    const randLat = minLat + Math.random() * (maxLat - minLat)

    const minLng = 3.006667;
    const maxLng = 3.106667;
    const randLng = minLng + Math.random() * (maxLng - minLng)
    points.push({ lat: randLat, lng: randLng })
}

const blueIcon = new L.Icon({
    iconUrl: 'marker-icon.svg',
    iconRetinaUrl: 'marker-icon.svg',
    iconSize: new L.Point(48, 48),
});

const redIcon = new L.Icon({
    iconUrl: 'marker-icon-red.svg',
    iconRetinaUrl: 'marker-icon-red.svg',
    iconSize: new L.Point(48, 48),
});

const MapWrapper = () => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (!map) return;
    }, [map]);

    const { t } = useTranslation();

    return (
        <MapContainer
            whenCreated={setMap}
            center={center}
            zoom={13.5}
            scrollWheelZoom={true}
            style={{ height: '100vh', width: '100wh' }}
        >
            <TileLayer {...tileLayer} />
            <MapSearchBar
                maxMarkers={1}
                showMarker={true}
                marker={{
                    icon: redIcon,
                    draggable: false
                }}
                animateZoom={true}
                autoClose={true}
                searchLabel={t("Find a V'Lille station")}
                resultFormat={({result}) => {
                    console.log(result);
                    return ("<img src='marker-icon-red.svg' width='24px' height='24px'></img>" + result.label)
                }}
                keepResult={true}
                style='bar'
            />

            {points.map(({ lat, lng }, index) => (
                <MapPin
                    key={index}
                    icon={blueIcon}
                    lat={lat}
                    lng={lng}
                    name={"DELORY BARBIEUX"}
                    address={"15, BOULEVARD DU GENERAL DE GAULLE - ROUBAIX"}
                    available_bicycle={"5"}
                    available_parking={"2"}
                    payment_method={(index % 4) ? t("no") : t("yes")} //TODO : retirer le ternaire
                    status={(index % 2) ? 'online' : 'offline'} //TODO : retirer le ternaire

                />
            ))}


        </MapContainer>
    )
}

export default MapWrapper;