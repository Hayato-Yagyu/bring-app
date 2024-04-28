// src/Routes.tsx
import { Routes, Route } from "react-router-dom";
import Login from "./App"
import Form from "./components/Form"
import BringList from "./components/BringList"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/form" element={<Form />} />
            <Route path="/BringList" element={<BringList />} />
        </Routes>
    )
}
