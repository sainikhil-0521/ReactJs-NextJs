import React, {useState} from "react";

const Counter:React.FC = () => {
    const [count, setCount] = useState(0);
    console.log("rendering")
    return (
        <div>
            <p className='text-lg mb-2'>Count: {count}</p>
            <button className="btn mr-2" onClick={() => setCount((prevCount) => prevCount>0 ? count-1 : 0)}>-</button>
            <button className="btn mr-2" onClick={() => setCount(count+1)}>+</button>
        </div>
    )
}

export default Counter;