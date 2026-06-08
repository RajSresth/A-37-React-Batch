import React from "react";
import CardClass from "./CardClass";
import "./card.css"

 class ShopClass extends React.Component{

    constructor(props)
    {
        super(props)
    }

    render()
    {
        return <div className="shop-class">
            <h1>Hello from Shop Class</h1>
            <CardClass/>
        </div>
    }
}

export default ShopClass;


 


/**
 * <CardClass 
                user={{
                       fullname: "MS Dhoni", 
                       team: "CSK",
                       age:43
                    }} 
            />
 */
