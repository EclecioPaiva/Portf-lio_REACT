import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { 
    name: "linkedin", 
    icon: <FaLinkedinIn />, 
    url: "https://www.linkedin.com/in/ecl%C3%A9cio-carlos-01219333b/" 
  },
  { 
    name: "github", 
    icon: <FaGithub />, 
    url: "https://github.com/EclecioPaiva" 
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a 
          href={network.url} 
          className="social-btn" 
          id={network.name} 
          key={network.name}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;

