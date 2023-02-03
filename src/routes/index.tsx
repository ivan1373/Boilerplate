import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Loader from 'components/atoms/Loader/Loader'

import routes from './routes'

type RouteMakerProps = {
    page: React.LazyExoticComponent<React.FC>
    path: string
}

const RouteMaker: React.FC<RouteMakerProps> = ({ page: Page }) => {
    return <Page />
}

const Router: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter>
                <Routes>
                    {routes.map((data) => (
                        <Route
                            element={<RouteMaker {...data} />}
                            key={data.key}
                            path={data.path}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default Router
