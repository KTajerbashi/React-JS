
import React,{useState} from 'react';
export const AuthContext = React.createContext({
    isAuth: false,
    login: () => {}

});
const AuthContextProvider = (props) => {
    const [isLoggedIn,setInLoggedIn] = useState(false);
    const loginHandler = () => {
        setInLoggedIn(true);
    };
    return (
        <AuthContext.Provider
        value={{
            isAuth: isLoggedIn,
            login: loginHandler,
        }}
        >
            <p>
            {props.children}
            </p>
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;