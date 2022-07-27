import React from "react";
import "../index.css"

export const Whopaid = (props) => {
    const { isKazuya, isManato, kazuyaPay, manatoPay } = props;
    return (
        <>
            <div>
                <h2>Who paid this time ?</h2>
                <button onClick={isKazuya} className={kazuyaPay ? "red" : ""}>Kazuya</button>
                <button onClick={isManato} className={manatoPay ? "red" : ""}>Manato</button>
            </div>
        </>
    );
};
