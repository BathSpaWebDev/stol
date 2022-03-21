import "./Header.css"
import basketIcon from "../../basket-shopping-solid.svg";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <header className="header">
        <div className="header-content">
          <Logo />
          <Link to={"/checkout/"} >
            <img src={basketIcon} alt="shopping basket" className="basket" />
          </Link>
        </div>
      </header>
    )
}