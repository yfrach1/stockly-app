import AboutUs from "../../components/guest/about/AboutUs";
import ContactUs from "../../components/guest/contact/ContactUs";
import Home from "../../components/guest/home/Home";
import HomeConnector from "../../components/guest/home/Home-connector";
import ConnectOptionDisplay from "../../components/guest/connectOptions/ConnectOptionDisplay";
import ConnectOptionDisplayConnector from "../../components/guest/connectOptions/ConnectOptionDisplay-connector";
const MainView = {
  HOME: <HomeConnector />,
  ABOUT_US: <AboutUs />,
  CONTACT_US: <ContactUs />,
  SIGN_UP: <ConnectOptionDisplayConnector />,
  SIGN_IN: <ConnectOptionDisplayConnector />,
};

export default MainView;
