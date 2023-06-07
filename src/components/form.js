import React from "react";

class Form extends React.Component{
    
render(){
    return (
        <div>
            <form method="post" action="/event">
                <label>Event Name </label>
                <input type = "text" name = 'evename' /><br></br>
                <label>Event tagline </label>
                <input type = "text" name = "evetagline" /><br></br>
                <label>Event type </label>
                <input type = "text" nmae = "evetype"/><br></br>
                <label>Event moderator </label>
                <input type = "text" name = "evemoderator"/><br></br>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

}

export {
    Form
}