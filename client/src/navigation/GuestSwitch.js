import { Switch, Route, Redirect } from "react-router-dom";
import ClientRoute from "./Route";
import HomePage from "../components/guest/MainPage/Main";
import AboutUs from "../components/guest/about/AboutUs";
const GuestSwitch = () => {
  return (
    <Switch>
      <Route
        exact={true}
        path={"/home"}
        component={(props) => <HomePage {...props} />}
      ></Route>
      {/* <Route
        exact={true}
        path={ClientRoute.Guest.aboutUs}
        component={(props) => <AboutUs {...props} />}
      ></Route>
      <Route
        exact={true}
        path={ClientRoute.Guest.conatact}
        component={(props) => <AboutUs {...props} />}
      ></Route> */}

      <Redirect from="/" to={ClientRoute.Guest.home} />
    </Switch>
  );
};

export default GuestSwitch;
