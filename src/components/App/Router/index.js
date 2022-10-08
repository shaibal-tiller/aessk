import React from 'react'
import { routes } from '../../../utils/route_util'
import { Routes, Route, } from "react-router"
import NotFound from '../../../shared/NotFound'
const Router = () => {
    return (
        <div>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} exact path={route.path} element={route.element}></Route>

                ))}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Router