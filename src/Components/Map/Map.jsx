import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';


const Map = ({ setCoords, setBounds, coords }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  // const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCzZuCu02pjjdsSwDpdnJsDCIJGr98iOgM' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={{ gestureHandling: 'greedy' }}
        onChange={(e) => {
          // Print coords to console for troubleshooting
          console.log(e);
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}>
      </GoogleMapReact>
    </div>
  );
};

export default Map;
