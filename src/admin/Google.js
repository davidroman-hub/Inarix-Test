
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import './Home.scss'
const AnyReactComponent = ({ text, order }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
    center: {
        lat: 47.484574,
        lng: 4.341844
    },
    zoom: 15
    };

    render() {
    return (
      // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key:process.env.REACT_APP_GOOGLE_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
            <AnyReactComponent
            lat={47.484574}
            lng={4.341844}
            text={
            <a className='map' target='_blank' rel='noopener noreferrer' href="/">
                <i class="fas fa-map-marker-alt map"/>sample
            </a>}
            />
        </GoogleMapReact>
    </div>
    );
    }
}

export default SimpleMap;
