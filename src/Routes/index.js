import { lazy, memo } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    useRouteMatch,
    useHistory,
    useLocation,
    useParams
} from 'react-router-dom'
import { LazyComponents, } from '@/utils'
import { useStateValue, connect, UserSelector } from '@/store/configureStore'
import Spin from '@/components/Spin'
import Lanf from '@/assets/images/landing-login.jpg'
import Standard from '@/theme/standard'





export const GetRoutes = (origin) => {
    const Login = lazy(() => import('@/Pages/Login'));
    const PasswordReset = lazy(() => import('@/Pages/PasswordReset'));
    const Dashboard = lazy(() => import('@/Pages/Dashboard'));
    const Profile = lazy(() => import('@/Pages/Profile'));
    const Header = lazy(() => import('@/components/Header'));
    const Menu = lazy(() => import('@/components/Menus/'));
    const HeaderRightbar = lazy(() => import('@/components/HeaderRightbar'));

    const Main = memo(({ user }) => {
        const path = useRouteMatch()
        const history = useHistory()

        if (!user?.data?.token && !user?.logged) {
            // return History.replace('/login')
            return <Redirect to="/login" />
        }


        return (
            <div className="px-4">
                <Router >
                    {LazyComponents(() => (
                        <Header>
                            <Menu />
                            <HeaderRightbar />
                        </Header>
                    ))}
                    <Switch>
                        <Route
                            path="/home/profile"
                            component={() => LazyComponents(Profile)}
                        />
                        <Route
                            // exact
                            path="/home"
                            component={() => {
                                 const p = useParams()
                                const l = useLocation()
                                console.log(p, l,  'matched')

                                return LazyComponents(Dashboard)
                            }}
                        />
                        <Route
                            exact
                            path="/home/s/:id?"
                            component={() => LazyComponents(Dashboard)}
                        />
                        <Route
                            path="/home/profile"
                            component={() => LazyComponents(Profile)}
                        />

                        {/* <Route
                            exact
                            path="/home/s/:id?"
                            component={() => LazyComponents(Dashboard)}
                        /> */}
                        <Route path="/s/:id?" component={() => 'sis'} />

                        {/* <Route path="/" component={() => LazyComponents(Dashboard)} /> */}
                        <Route path="*" component={() => 'not found'} />
                    </Switch>
                </Router>
            </div>
        )
    })
    const Layout = connect(Main, UserSelector)

    switch (origin) {
        case 'http://localhost:3000':
            return (<Switch>
                <Route
                    exact
                    path="/"
                    component={() => LazyComponents(Layout)}
                />
                <Route
                    exact
                    path="/resetpassword/:id?"
                    component={() => (
                        <Standard>{LazyComponents(PasswordReset)}</Standard>
                    )}
                />
                <Route
                    path="/login/:id?"
                    component={() => <Standard>{LazyComponents(Login)}</Standard>}
                />
                <Route path="/" component={() => LazyComponents(Layout)} />
                <Route path="*" component={() => <h1>assssssssssssssssssssssss</h1>} />
            </Switch>)
            break;
        case 'http://localhost:4000':
            const Dsh = lazy(() => import('@/dsh'));
            const DshTheme = lazy(() => import('@/dsh/theme'));

            return (<Switch>
                <Route exact path="/" component={() => {
                    const { user } = useStateValue()

                    if (user?.data?.token && user?.logged) {
                        return LazyComponents(Layout)
                    }

                    return LazyComponents(Dsh)
                }} />
                <Route
                    exact
                    path="/resetpassword/:id?"
                    component={() => (
                        <Standard>{LazyComponents(PasswordReset)}</Standard>
                    )}
                />
                <Route
                    path="/login/:id?"
                    component={() => <Standard>{LazyComponents(Login)}</Standard>}
                />
                <Route path="/" component={() => LazyComponents(Layout)} />
                <Route path="*" component={() => 'ads'} />
            </Switch>)
            break;

        default:
            return (<Switch>
                <Route
                    exact
                    path="/"
                    component={() => LazyComponents(Layout)}
                />
                <Route
                    exact
                    path="/resetpassword/:id?"
                    component={() => (
                        <Standard>{LazyComponents(PasswordReset)}</Standard>
                    )}
                />
                <Route
                    path="/login/:id?"
                    component={() => <Standard>{LazyComponents(Login)}</Standard>}
                />
                <Route path="/" component={() => LazyComponents(Layout)} />
                <Route path="*" component={() => <h1>assssssssssssssssssssssss</h1>} />
            </Switch>)
            break;
    }
}