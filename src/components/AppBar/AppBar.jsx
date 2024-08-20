import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css"


const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <header className={s.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

export default AppBar;