import LoginPage from '../pages/login/LoginPage';

const PrivateRoute = ({component: Component, auth = false}) => {
    return (
            auth ? <Component /> : <LoginPage />
    )
}

export default PrivateRoute
