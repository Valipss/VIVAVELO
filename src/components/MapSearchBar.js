import { useEffect, useMemo, useState } from 'react';
import { useMap } from 'react-leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';
import './MapSearchBar.css';

const prov = new OpenStreetMapProvider();

const MapSearchBar = (props) => {
    const map = useMap();

    useEffect(() => {
      const searchControl = new GeoSearchControl({
        provider: prov,
        ...props,
      });
  
      map.addControl(searchControl);
      return () => map.removeControl(searchControl);
    }, [props]);
  
    return null;
};

export default MapSearchBar