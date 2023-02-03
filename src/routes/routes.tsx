import { lazy } from 'react'

const NotFound = lazy(() => import('pages/not-found'))
const LoginPage = lazy(() => import('pages/login'))

type TRoute = {
    key: string
    path: string
    page: React.LazyExoticComponent<React.FC>
}

const routes: TRoute[] = [
    {
        key: 'not-found',
        path: '*',
        page: NotFound,
    },
    {
        key: 'login',
        path: '/',
        page: LoginPage,
    },
]

export default routes
