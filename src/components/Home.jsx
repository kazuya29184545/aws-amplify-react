import { Outlet, Link,useLocation } from "react-router-dom";
// import styled from "styled-components";
import "../index.css";
import { useState, useEffect} from "react";



const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "black",
};

export const Home = () => {
    const [ totalBalance, setTotalBalance ] = useState(-3000);

    const { state } = useLocation();

    // useEffect(() => {
    //     setTotalBalance(state.state)
    // }, [state.state])

    
    


    return (
    <>
        <div>
            <div className="header">
                <h1>Bank of Kazuya</h1>
            </div>
            <div className="totalDebt">
                <h2>Current Balance</h2>
                <h1 style={{marginTop: '50px'}}>${totalBalance}</h1>
            </div>
            <Link to="/split" style={linkStyle} state={{ state: totalBalance }}>
                <div className="firstContainer">
                    <p>Split</p>
                </div>
            </Link>
            <br />
            <Link to="/manual" style={linkStyle}>
                <div className="firstContainer">
                    <p>Manual</p>
                </div>
            </Link>
        </div>
        
        <Outlet />
    </>
    );
};
