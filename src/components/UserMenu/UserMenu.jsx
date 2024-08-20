import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css"

const UserMenu = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
    return (
        <div className={s.container}>
            <p className={s.welcome}>Welcome, {user.name} !</p>
            <ul>
                {!isLoggedIn && (
                    <>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                    </>
                )}
                {isLoggedIn && (
                    <li>
                        <button className={s.btn} onClick={() => dispatch(logoutThunk())}>Exit</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default UserMenu;