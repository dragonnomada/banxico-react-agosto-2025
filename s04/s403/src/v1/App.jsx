import { BrowserRouter, Route, BrowserRouter as Router, Routes } from "react-router"
import HomePage from "../pages/HomePage"
import UsersPage from "../pages/UsersPage"

export default function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )

}