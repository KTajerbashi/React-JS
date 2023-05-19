import React from 'react';
import MainHeader from '../header/header';
import MainNav from '../nav/nav';
import AuthContext from '../Context/auth-Context'

const Main = (props) => {
    const btn = {
        padding: '1rem',
        margin: '0.2rem auto',
        borderRadius: '0.5rem',
        border: 'none',
        textAlign: 'center',
        alignItems: 'center',
        background: '#000A05',
        color: 'wheat',
        boxShadow: '0 0 10px 5px #0005',
    };
    return (
        <div>
            <MainHeader />
            <MainNav />
            <div className='container d-flex flex-row justify-content-around'>
                <button style={btn} onClick={props.ShowHandler}>نمایش و پنهان کردن محصولات</button>
                <button style={btn} onClick={props.LoginHandler}>ورود / خروج</button>
                <AuthContext.Consumer>
                    {
                        (context) =>
                            <button style={btn} onClick={context.login}>Context Login</button>
                    }
                </AuthContext.Consumer>

            </div>

        </div>
    );
}

export default Main;