import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Undertheline Holdings" className="h-4" />
    </Link>
  );
};

export default Logo;
