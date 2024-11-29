import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/eu.jpeg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
  return (
  <aside id="sidebar">
    <img src={Avatar} alt="Eclécio Carlos" />
    <p className="title">Desenvolvedor Web</p>
    <SocialNetworks />
    <InformationContainer />
    
  </aside>
  );
};

export default Sidebar;
