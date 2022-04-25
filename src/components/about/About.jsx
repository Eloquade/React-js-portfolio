import "./about.css";
import Logo from "../../img/Lawrence.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Logo}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        We do IT..
        </p>
        <p className="a-desc">
            I am a student that design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
        </p>
        
      </div>
    </div>
  );
};

export default About;
