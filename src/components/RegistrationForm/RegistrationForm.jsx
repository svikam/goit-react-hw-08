import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

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
                <Form className={s.wrapper}>
                    <label htmlFor="name" className={s.label}>Name</label>
                    <Field name="name" type="name" placeholder="Enter your name" />
                    <label htmlFor="email" className={s.label}>Email</label>
                    <Field name="email" placeholder="Enter your email" />
                    <label htmlFor="password" className={s.label}>Password</label>
                    <Field name="password" type="password" placeholder="Enter your password" />
                    <button type="submit" className={s.btn}>Login</button>
                    <div className={s.signIn}><p>Have you already an account?</p><Link to="/login">Sign in</Link></div>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;