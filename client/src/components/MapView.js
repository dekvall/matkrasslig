import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: { count: 0, locations: [] },
    };
  }

  componentDidMount() {
    fetch("/getVolunteerLocations")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        this.setState({ mapData: { count: 0, locations: [] } });
        return Promise.reject("No response from server");
      })
      .then((data) => {
        //Might have to do with how i'm not passing props but i hav to do this atm
        //The markers do not show if they get displayed before the map
        setTimeout(() => this.setState({ mapData: data }), 500);
      });
  }

  markerText(loc) {
    if (loc.count > 1) {
      return `${loc.count} volontärer i ${loc.city} (${loc.zipcode})`;
    }
    return `${loc.count} volontär i ${loc.city} (${loc.zipcode})`;
  }

  render() {
    const { mapData } = this.state;
    const markers = mapData.locations.map((d, i) => {
      return (
        // We need to set spiderfyOnMaxZoom to false so that markers in the same spot don't spider
        <MarkerClusterGroup
          key={i}
          singleMarkerMode={true}
          spiderfyOnMaxZoom={false}
        >
          {d.data.map((e, j) => {
            return (
              <Marker key={j} position={e.coordinates}>
                <Popup>{this.markerText(e)}</Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      );
    });

    return (
      <div className="mapHolder">
        <h2>Våra {mapData.total} st volontärer finns i hela landet</h2>
        <div id="mapid" className="leaflet-container">
          <LeafletMap
            center={[59.8, 14.9]}
            zoom={5}
            maxZoom={19}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
          >
            <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            {markers}
          </LeafletMap>
        </div>
      </div>
    );
  }
}

export default MapView;
