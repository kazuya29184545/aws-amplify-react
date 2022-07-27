import { Outlet } from "react-router-dom";
import { InputPrice } from "./InputPrice";
import { Whopaid } from "./Whopaid";
import { Button } from "./Button";
import { useLocation } from "react-router-dom"
import { useState } from "react"


export const Split = () => {
    const { state } = useLocation();
    const [addPrice, setAddPrice] = useState(0);
    const [kazuyaPay, setKazuyaPay] = useState(false);
    const [manatoPay, setManatoPay] = useState(false);
    const [newBalance, setNewBalance] = useState(0);


    const onChangeAddPrice = (e) => {
        
        return setAddPrice(e.target.value);
    }
    
    const isKazuya = () => {
        setKazuyaPay(!kazuyaPay);
        // console.log(kazuyaPay);
    }
    const isManato = () => {
        setManatoPay(!manatoPay);
        // console.log(manatoPay);
    }

    function onClickCalcurate() {
        let number = parseInt(addPrice);
        if (kazuyaPay) {
            console.log(state.state + number)
            // setNewBalance(state.state + addPrice);
        } else {
            console.log(state.state - number)
            // setNewBalance(state.state - addPrice);
        }
    }

    //splitwise
    //flutter
    
    
    
    
    return (
        <>    
            <InputPrice state={state} addPrice={addPrice} onChangeAddPrice={onChangeAddPrice} />
            <Whopaid isKazuya={isKazuya} isManato={isManato} kazuyaPay={kazuyaPay} manatoPay={manatoPay} />
            <Button onClick={onClickCalcurate} newBalance={newBalance}  />
            
            <Outlet />
        </>
    );
};