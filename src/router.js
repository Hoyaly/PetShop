import { ROUTERS } from "./components/Router";
import Cards from "./components/Cards";
import { Route, Routes } from "react-router-dom";

const rederUserRouters = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.LIST,
            component: <Cards/>
        },
    ]

    return (
        <Routes>
            {
                userRouters.map((item, key) => {
                    <Route key={key} path={item.path} element={item.component}></Route>
                })
            }
        </Routes>
    )
}

const RouterCustom = () => {
    return rederUserRouters();
}
export default RouterCustom;