import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login.jsx"
import Home from "../pages/Home"
import { RockForm } from "./RockForm.jsx"
import RockList from "./RockList.jsx"
import { Register } from '../pages/Register.jsx'
import AllRocks from '../pages/AllRocks.jsx'
import MyRocks from '../pages/MyRocks.jsx'


export const ApplicationViews = () => {
    const [rocksState, setRocksState] = useState([{
        id: 1,
        name: "Sample",
        type: {
            id: 1,
            label: "Volcanic"
        },
        user: {
            id: 1,
            firstName: "John",
            lastName: "Doe"
        }
    }])

    const fetchRocksFromAPI = async (query = "") => {
        const response = await fetch(`http://localhost:8000/rocks${query}`,
            {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`
                }
            })
        const rocks = await response.json()
        setRocksState(rocks)
    }

    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home />} />
                <Route path="/allrocks" element={<AllRocks rocks={rocksState} fetchRocks={fetchRocksFromAPI} />} />
                <Route path="/create" element={<RockForm fetchRocks={fetchRocksFromAPI} />} />
                <Route path="/mine" element={<MyRocks rocks={rocksState} fetchRocks={fetchRocksFromAPI} />} />
            </Route>
        </Routes>
    </BrowserRouter>
}