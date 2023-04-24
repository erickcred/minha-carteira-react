import { createBrowserRouter, BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import List from '../pages/List'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/list",
        element: <List />
    }
])

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/list" element={<List />}></Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes