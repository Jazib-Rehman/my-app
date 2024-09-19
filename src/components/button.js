import { useState } from "react"

const Button = ({setCount, count}) => {
    const [btn, setBtn] = useState(0)
    console.log("render")
    return <div>
        {btn}
        <button onClick={()=> setBtn(btn+1)}>Click me</button>
    </div>
}

export default Button;