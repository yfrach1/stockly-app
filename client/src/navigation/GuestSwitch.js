import { Switch, Route, Redirect } from "react-router-dom";
import ClientRoute from "./Route";
import AboutUs from "../components/guest/about/AboutUs";
import Home from "../components/guest/home/Home";
import ContactUs from "../components/guest/contact/ContactUs";
import ConnectOptionDisplay from "../components/guest/connectOptions/ConnectOptionDisplay";
const GuestSwitch = () => {
  return (
    <Switch>
      <Route
        exact={true}
        path={ClientRoute.Guest.home}
        component={(props) => <Home {...props} />}
      ></Route>
      <Route
        exact={true}
        path={ClientRoute.Guest.aboutUs}
        component={(props) => <AboutUs {...props} />}
      ></Route>
      <Route
        exact={true}
        path={ClientRoute.Guest.contactUs}
        component={(props) => <ContactUs {...props} />}
      ></Route>
      <Route
        exact={true}
        path={ClientRoute.Guest.signIn}
        component={(props) => (
          <ConnectOptionDisplay showSignIn={true} {...props} />
        )}
      ></Route>
      <Route
        exact={true}
        path={ClientRoute.Guest.signUp}
        component={(props) => (
          <ConnectOptionDisplay showSignUp={true} {...props} />
        )}
      ></Route>

      <Redirect from="/" to={ClientRoute.Guest.home} />
    </Switch>
  );
};

export default GuestSwitch;
