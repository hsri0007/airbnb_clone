import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import { fetchHotels } from "../../apiCalls/apiCalls";
import CardComponent from "../../customComponents/cardComponent/cardComponent";
import MapComponent from "./mapComponent/mapContainer";
import HotelsAppbar from "../hotelsAppbar/hotelsAppbar";
const HotelPreviewComponent = () => {
  const params = useParams();
  const location = useLocation();
  const [state, setState] = React.useState([]);

  console.log(location);
  React.useEffect(() => {
    if (location?.hotelstate) {
      window.localStorage.setItem(
        "userdetails",
        JSON.stringify(location.hotelstate)
      );
    }
    fetchHotels(params?.id).then((res) => setState(res.data));
  }, [params]);
  return (
    <div
      style={{
        paddingTop: "10vh",
        backgroundImage: `linear-gradient(
      rgba(32, 38, 74, 90%),
  rgba(32, 38, 74, 80%)
),url(https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
)`,
        minHeight: "90vh",
      }}
    >
      <Container>
        <Row>
          <Col sm={7}>
            <HotelsAppbar state={state} />
            <Row>
              {state.map((res, i) => {
                return (
                  <Col className="mb-5" key={i}>
                    <CardComponent data={res} states={location.hotelstate} />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col>
            {state.length > 0 && (
              <MapComponent state={state} states={location.hotelstate} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HotelPreviewComponent;
