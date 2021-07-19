import GoogleMapReact from "google-map-react";
import MarkerComponent from "./markerComponent";

const AnyReactComponent = ({ text, data, states }) => (
  <div style={{ height: "10px" }}>
    <MarkerComponent text={text} data={data} states={states} />
  </div>
);

const API_KEY = "AIzaSyCxZlpDt6yJWXjHqVQYa__pHusnmbY7YSo";

const ContactComponent = ({ state, states }) => {
  return (
    <div style={{ height: "90vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
        }}
        yesIWantToUseGoogleMapApiInternals={true}
        defaultZoom={15}
        defaultCenter={{
          lat: 17.3730192,
          lng: 78.547636,
        }}
      >
        {state.map(
          (data, i) =>
            data["hotel-coordinates"] && (
              <AnyReactComponent
                key={i}
                lat={+data["hotel-coordinates"].latitude}
                lng={+data["hotel-coordinates"].longitude}
                text={`${+data["min-booking-price"]}`}
                data={data}
                states={states}
              />
            )
        )}
      </GoogleMapReact>
    </div>
  );
};

export default ContactComponent;
