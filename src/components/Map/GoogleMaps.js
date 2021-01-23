import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class GoogleMaps extends Component {
    static defaultProps = {
        center: {
          lat: 55.834945,
          lng: 13.308801
        },
        zoom: 17
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ 
                    key: "AIzaSyDiESond1tNLfZxoc1rmoE_ggK8mqd5LWI",
                    language: 'sv' 
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={55.834945}
                    lng={13.308801}
                    text="Eslövs Emballage"
                />
            </GoogleMapReact>
          </div>
        );
      }
    }
export default GoogleMaps
