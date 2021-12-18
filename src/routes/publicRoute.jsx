import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ children, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => { 
                // eslint-disable-next-line no-unused-expressions
                return !isAuthenticated ? (children) : (
                    <Redirect
                        to={{
                            pathname: "/store",
                            state: { from: location}
                        }}
                    />
                )
            }}
        />
    )
}

export default PublicRoute
