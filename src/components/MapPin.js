import { Marker } from 'react-leaflet';

import MapPinPopup from './MapPinPopup';

const MapPin = ({key, icon, lat, lng, name, address, available_bicycle,
    available_parking, payment_method, status}) => {

    console.log(lat);
    return (
        <Marker
            key={key}
            draggable={false}
            autoPan={true}
            position={[lat, lng]}
            icon={icon}
        >
            <MapPinPopup
                name={name}
                address={address}
                available_bicycle={available_bicycle}
                available_parking={available_parking}
                payment_method={payment_method}
                status={status}
            />
        </Marker>
    )
}

export default MapPin;