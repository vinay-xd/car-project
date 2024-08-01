import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const Mycontext = createContext()

export function Contextprovider({ children }) {

    const [token, settoken] = useState(localStorage.getItem('token'))
    const [role, setrole] = useState(localStorage.getItem('role'))
    const [userData, setUserData] = useState([])

    const localdata = (tokendata, roledata) => {
        localStorage.setItem('token', tokendata)
        localStorage.setItem('role', roledata)
        settoken(tokendata)
        setrole(roledata)
    }


    const isSignIn = !!token;
    const signout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        settoken(null)
        setrole(null)
    }

    const fetchuserData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/get-userdata', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log(response);
            setUserData(response.data.user)
        } catch (error) {
            console.log(error);
        }
    }
    // console.log(userData);
    useEffect(() => {
        fetchuserData()
    }, [])

    



    return (
        <>
            <Mycontext.Provider value={{ token, role, localdata, isSignIn, signout, userData, fetchuserData}}>
                {children}
            </Mycontext.Provider>
        </>
    )
}

export const useData = () => {
    return useContext(Mycontext)
}