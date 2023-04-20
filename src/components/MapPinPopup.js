import {Popup} from 'react-leaflet';
import './MapPinPopup.css'
import { useTranslation } from 'react-i18next';

const MapPinPopup = ({name, address, available_bicycle,
    available_parking, payment_method, status}) => {
    
    const { t } = useTranslation();
    const popupStatusClass = 'popup-status ' + status;

    return (
        <Popup className='popup'>
            <h1 className='popup-name'>{name}</h1>
            <h2 className='popup-address'>{address}</h2>
            <ul className='popup-list'>
                <li>
                    <div className='popup-list-item-logo'>
                        <img src='velo.svg' alt='Logo de vélo'></img>
                        <span>
                            {available_bicycle}
                        </span>
                    </div>
                    {t("Available V'Lille")}
                </li>
                <li>
                    <div>
                        <img src='parking.svg' alt='Logo de Parking'></img>
                        <span>
                            {available_parking}
                        </span>
                    </div>
                    {t("Available parking")}
                </li>
                <li>
                    <div>
                        <img src='CB.svg' alt='Logo de CB'></img>
                        <span>
                            {payment_method}
                        </span>
                    </div>
                        {t("CC payment")}
                </li>
            </ul>
            <span className={popupStatusClass}>{t(status[0].toUpperCase() + status.slice(1))}</span>
        </Popup>
    )
}

export default MapPinPopup