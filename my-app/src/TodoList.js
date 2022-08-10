import React from "react";


export class TodoList extends React.Component {

    state = {
        items: ['Lucas', 'Sandra', 'Jude'],
        name: "",
    }

    handleControlledNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
        // return console.log(this.state)
    }

    addElementToList = (event) => {
        event.preventDefault()
        console.log(this.state.id)

        this.setState({
            items: [...this.state.items, this.state.name],
            name: "",
        })
    }

    resetList = (event) => {
        event.preventDefault()
        this.setState({
            items: [],
            name: ""
        })
    }


    render() {
        return (<div>
            <ul>{this.props.render(this.state.items)}</ul>
            <form onSubmit={this.addElementToList}>
                <input type="text" name="newItem" value={this.state.name} onChange={this.handleControlledNameChange} />
                <button type="submit" name="addToList">Add to list</button>
                <button name="reset" onClick={this.resetList}>reset</button>
            </form>
        </div>)
    }
}