import AboutUs from "../../components/guest/about/AboutUs";
import ContactUs from "../../components/guest/contact/ContactUs";
import Home from "../../components/guest/home/Home";
import ConnectOptionDisplay from "../../components/guest/connectOptions/ConnectOptionDisplay";
const MainView = {
  HOME: <Home ggg={false} />,
  ABOUT_US: <AboutUs />,
  CONTACT_US: <ContactUs />,
  SIGN_UP: <ConnectOptionDisplay showSignUp={true} />,
  SIGN_IN: <ConnectOptionDisplay showSignIn={true} />,
};

export default MainView;
