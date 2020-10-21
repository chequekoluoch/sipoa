
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import React, { Component } from 'react'

 class Location extends Component {
  render() {
    return (
     
         <Map google={this.props.google} 
        
         zoom={14} style>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
            
 </InfoWindow>
</Map>
     
    )
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyBtEdaSnWcP64K9k8-AR4iot8EYyWfxDOM')
})(Location)