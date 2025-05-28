import React, {Children, useState} from "react";

type ChildProps = {
    children: React.ReactNode;
}
const Card:React.FC<ChildProps> = ({children}) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            {children}
        </div>
    )
}

export default Card;