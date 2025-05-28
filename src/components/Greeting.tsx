import React from "react";

type GreetingProps =  {
    name: string;
};
const Greeting:React.FC<GreetingProps> = ({name}) => {
    return <h1 className="text-2xl font-semibold">Hello, {name} 👋</h1>;
}

export default Greeting;