import React from "react";
import { useState } from "react";
import './ValorantApp.css'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';
import axios from "axios";
import WeaponItems from "./WeaponItems";
import RefreshIcon from '@mui/icons-material/Refresh';
import Alert from '@mui/material/Alert';

export default function ValorantApp() {
    
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const [loginButtonLoading, setLoginButtonLoading] = useState(false);
    const [offersFetched , setOffersFetched] = useState(false);
    const [skinArray, setSkinArray] = useState(null);
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginError , setLoginError] = useState({isError: false, display: 'none'});
    

    async function loginAndFetch(){
        // Start spinning the circle
        if (login != null && password != null) {
        setLoginButtonLoading(true);
        const skins = await axios.post('http://127.0.0.1:80/getSkinsWeb', {"login": `${login}`, "password": `${password}`});
        if (skins.data < 1) {
            setLoginError({isError: true, display: 'block'})
            setLoginButtonLoading(false)
            return
        }
        // Do after logged in
        setIsLoggedIn(true);

        // Do after offers fetched
        setOffersFetched(true);
        setSkinArray(skins.data);
        setLoginButtonLoading(false);
    } else {
        setLoginError({isError: true, display: 'block'})
        setLoginButtonLoading(false)
    }
}

    function loginPanel(){
        return(
        <div>
            <h1>Login</h1>
            <div className="tfContainer">
                <TextField required id="loginField" label="Login" onChange={(e) => setLogin(e.target.value)}/>
            </div>
            <div className="tfContainer">
                <TextField required id="paswordField" label="Password" type="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <LoadingButton loading={loginButtonLoading} loadingPosition="start" startIcon={<LoginIcon/>} variant="contained" size="large" style={{margin: '20px'}} onClick={loginAndFetch}>Login</LoadingButton>
            <div style={{width: '75%', margin: 'auto', display: `${loginError.display}`}}>
                <Alert variant="filled" severity="error" >Error! Is your login info correct?</Alert>
            </div>
        </div>
        )
    }

    function storePanel(){
        return(
            <div className="yourStore">
                <h1>Your Store</h1>               
                    <WeaponItems array={skinArray} />
                    <LoadingButton loading={loginButtonLoading} loadingPosition="start" startIcon={<RefreshIcon/>} variant="contained" size="large" onClick={loginAndFetch} style={{'marginTop': '25px'}} >Refresh</LoadingButton>
            </div>
        )
    }

    return(
        <div className='ValorantApp'>
            {(isLoggedIn && offersFetched) ? storePanel() : loginPanel()}
        </div>
    )


}