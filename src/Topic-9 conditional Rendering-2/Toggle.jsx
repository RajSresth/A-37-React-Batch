import {useState} from 'react'

const Toggle = () => {
    const [login, setLogin] = useState(false);

    const [msg, setMsg] = useState("hide");

    const handleClick = () => {
        // setLogin(!login)
        setMsg(msg === "hide"? "show": "hide");
    }

  return (
    <div id="toggle">
        {/* { login ? <h1>Welcome User</h1> : <h1>Please Login</h1>} */}
        {msg === "hide" && <h1>Please Login</h1>}
        {msg === "show" && <h1>Welcome User</h1>}
        
        <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

export default Toggle