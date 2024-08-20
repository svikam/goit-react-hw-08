import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage"));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
// import HomePage from '../pages/HomePage/HomePage';
// import LoginPage from "../pages/LoginPage/LoginPage";
// import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
// import ContactsPage from '../pages/ContactsPage/ContactsPage';
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from '../Routes/PrivateRoute';
import { RestrictedRoute } from '../Routes/RestrictedRoute';
import { selectIsRefreshing } from '../redux/auth/selectors';

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing)
    useEffect(() => {
    dispatch(refreshUser());
    }, [dispatch]);
    return isRefreshing? null : (
        <div>
            <Suspense fallback={<div>Loading page...</div>}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="contacts"
                            element={
                                <PrivateRoute>
                                    <ContactsPage />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/login"
                            element={
                                <RestrictedRoute>
                                    <LoginPage />
                                </RestrictedRoute>
                            }
                        />
                        <Route path="/register"
                            element={
                                <RestrictedRoute>
                                    <RegistrationPage />
                                </RestrictedRoute>    
                            }
                        />
                        <Route path="*" element={<NotFoundPage />}/>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;