import React from "react";
import { TodoList } from "./TodoList";

export class App extends React.Component {
    render() {
        return (
            <div>
                <TodoList render={(array) => array.map((item, index) => <div><li key={index}>{item}</li><button onClick={(event) => {
                    event.preventDefault()
                    array.splice(index, 1)
                    this.setState({
                        items: array,
                        name: ""
                    })
                }}>remove {item}</button></div>)} />
            </div>
        )
    }
}



