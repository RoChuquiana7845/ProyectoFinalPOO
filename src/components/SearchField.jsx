import { GeoSearchControl, MapBoxProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

// eslint-disable-next-line react/prop-types
export const SearchField = ({ apiKey }) => {
  const provider = new MapBoxProvider({
    params: {
      access_token: apiKey,
    },
  });

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
  });

  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};