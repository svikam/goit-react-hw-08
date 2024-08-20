import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./LoginForm.module.css"

const LoginForm = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const initialValues = {
        email: "",
        password: "",
    };
    const dispatch = useDispatch();
    const handleSubmit = (values, options) => {
        dispatch(loginThunk(values));
        console.log(values);
        options.resetForm();
    };
    if (isLoggedIn) {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.wrapper}>
                    <label htmlFor="email" className={s.label}>Email</label>
                    <Field name="email" type="email" placeholder="Enter your email" className={s.field} />
                    <label htmlFor="password" className={s.label}>Password</label>
                    <Field name="password" type="password" placeholder="Enter your password" className={s.field} />
                    <button type="submit" className={s.btn}>Login</button>
                    <div className={s.signUp}><p>You don`t have account?</p><Link to="/register">Sign up!</Link></div>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;