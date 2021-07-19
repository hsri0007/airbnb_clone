import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import HotelPreviewPage from "./pages/hotelPreviewPage/hotelPreviewPage";
import SingleHotelPage from "./pages/singleHotelPage/singleHotelPage";
import PaymentsHotelPage from "./pages/paymentsPage/paymentsPage";
import Footer from "./components/footerComponent/footerComponent";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/payments" component={PaymentsHotelPage} exact />
        <Route path="/:id" component={HotelPreviewPage} exact />
        <Route path="/hotels/:id" component={SingleHotelPage} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
