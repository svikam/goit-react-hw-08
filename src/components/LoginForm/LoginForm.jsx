import { Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

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
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" placeholder="Enter your email" />
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" placeholder="Enter your password" />
                    <button type="submit">Login</button>
                    <p>You don`t have account?</p><Link to="/register">Sign up!</Link>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;