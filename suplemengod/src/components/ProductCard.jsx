import { Button } from "antd";
import { useState } from "react";


function UserCard(props) {

    const [counter,setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="product-card">
            <img src="/proteinaBSN.webp" alt="" />
            <h2>{props.name}</h2>
            <Button>Comprar</Button>
            <button onClick={handleClick}>
                Cantidad
                <span>{counter}</span>
            </button>
        </div>
    )
}


export default UserCard;