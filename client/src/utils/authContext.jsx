import { createContext , useState, useEffect} from "react";
import Auth from "./auth";
import { getUserById } from './apiHelpers'
//import socket.io-client

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [accesToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);


    useEffect(() => {
        const savedToken = Auth.getToken();
        // console.log('saved token', savedToken);
        // if(savedToken?.accessToken && !Auth.isTokenExpired(savedToken?.accessToken)){
        //     setUser(Auth.getProfile());
        //     setAccessToken(savedToken);
        // }
    }, [])

    //set up useEffect to handle sockets any time token state is altered
    useEffect(() => {
        if(accesToken && !Auth.isTokenExpired(accesToken)){
            console.log('we are logged in');
            console.log('logged in with acces token', accesToken);
            console.log('logged in with refresh token', refreshToken);
            console.log('user', Auth.getProfile());
            console.log('user info: ', getUserById(Auth.getProfile().user_id));
            // Auth.login(accesToken);
            // console.log('we are logged in');
        }
        // Auth.login(accesToken, refreshToken);
        // console.log('is token expired', Auth.isTokenExpired(accesToken));
        // if(token && !Auth.isTokenExpired(token)){
        //     //using the function form of setUser to avoid stale closure
        //     setUser(() => Auth.getProfile());
        //     Auth.login(token);
        //     //initialize up socket connection
        
        // }
    }, [accesToken])

    useEffect(() => {
        console.log('access token', accesToken);
        console.log('refresh token', refreshToken);
    }, [accesToken, refreshToken])



    return (
        <AuthContext.Provider value={{ user, setUser, setAccessToken, setRefreshToken }}>
            {children}
        </AuthContext.Provider>
    );
}

