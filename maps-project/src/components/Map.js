import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps'

const google = window.google;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: this.props.markers,
      interval: '',
      actualPosition: 0,
      currentLat: this.props.centerMapCoordinates[0],
      currentLng: this.props.centerMapCoordinates[1],
      autoPlay: true
    }
    this.timer = this.timer.bind(this);
    this.onPlay = this.onPlay.bind(this);
  }
  componentDidMount() {
    let interval = setInterval(this.timer, 8000);
    this.setState({ interval });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  timer() {
    const { markers, actualPosition } = this.state;
    this.updateStates(actualPosition + 1 < markers.length ? actualPosition + 1 : 0, markers[actualPosition].lat, markers[actualPosition].lng);
  }
  onPlay() {
    this.setState({ autoPlay: true });
  }
  onStop() {
    this.setState({ autoPlay: false });
  }
  onNext() {
    const { markers, actualPosition } = this.state;
    this.updateStates(actualPosition + 1 < markers.length ? actualPosition + 1: 0, markers[actualPosition].lat, markers[actualPosition].lng);
  }
  onPrevious() {
    const { markers, actualPosition } = this.state;
    let newPosition;
    if (actualPosition - 1 < markers.length &&
        actualPosition - 1 > 0) {
          newPosition = actualPosition - 1;
    }else {
      newPosition = 0;
    }
    this.updateStates(newPosition, markers[actualPosition].lat, markers[actualPosition].lng);
  }
  updateStates(newPosition, newLat, newLng){
    this.setState({
      actualPosition: newPosition,
      currentLat: newLat,
      currentLng:  newLng
    })
  }
  render() {
    const { autoPlay, markers, currentLat, currentLng } = this.state;
    const { centerMapCoordinates } = this.props;

    let dynamicMarkers;
    if (markers) {
      dynamicMarkers = markers.map((value, index) => {
        return(
          <Marker
            key={index}
            position={{ lat: value.lat, lng: value.lng }}
            defaultTitle={ value.name }
            icon={ value.icon }
          />
        );
      });
    }
    const MyMapComponent = withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={
          autoPlay ? { lat: currentLat, lng: currentLng }
          : { lat: centerMapCoordinates[0], lng: centerMapCoordinates[1]  }
        }
        defaultTitle="Mapa">
        { dynamicMarkers }
      </GoogleMap>
    );
    return(
      <MyMapComponent
        loadingElement={<div style={{ height: '100%'}}/> }
        containerElement={ <div style={{ height: '70vh'}}/>}
        mapElement={ <div style={{ height: '100%'}}/>}
      />
    );
  }
}

export default Map;
