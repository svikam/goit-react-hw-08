
import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Form, Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        name: "",
        email: "",
        password: "",
    };
    const handleSubmit = (values, options) => {
        console.log(values);
        dispatch(registerThunk(values));
        options.resetForm();
    };
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field name="name" placeholder="Enter your name" />
                    <Field name="email" placeholder="Enter your email" />
                    <Field name="password" type="password" placeholder="Enter your password" />
                    <button type="submit">Login</button>
                    <p>Have you already an account?</p><Link to="/login">Sign in</Link>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;