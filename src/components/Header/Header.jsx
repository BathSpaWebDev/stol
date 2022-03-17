import "./Header.css"
import basket from "../../basket-shopping-solid.svg";
import { Logo } from "../Logo/Logo";

export const Header = () => {
    return (
      <header className="header">
        <div className="header-content">
          <Logo />
          <img src={basket} alt="shopping basket" className="basket" />
        </div>
      </header>
    )
}