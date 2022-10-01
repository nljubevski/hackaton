import "./Banner.css";
import avatar from "../assets/avatar.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-name">Hello, Josh</div>
      <img className="banner-avatar" src={avatar} />
    </div>
  );
};

export default Banner;
