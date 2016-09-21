import React from 'react';
import { Component } from 'react';
import {GoogleMapLoader, GoogleMap} from "react-google-maps";

//will return a Google Map element
export default (props) => {
	return(
      <GoogleMapLoader
        containerElement={
          <div style={{height: "100%"}} />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={{lat: props.lat, lng: props.lon}} />
        }
      />
	);
}
