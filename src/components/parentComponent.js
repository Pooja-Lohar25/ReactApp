import React from "react";
import {ChildComponent} from "./childComponent";
class Parent extends React.Component{
    constructor(){
        super()
        this.state = {
            parentName : 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
       console.log(`hello ${this.state.parentName}`)
    }
    render(){
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
}
export {Parent}