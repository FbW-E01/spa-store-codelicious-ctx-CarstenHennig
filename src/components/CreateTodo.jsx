import React from 'react';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            todoText: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.createTodo({
            id: Math.ceil(Math.random() * 99999999),
            user: 1, // Hardcoded! Do you want a challange? Convert this to use UserContext too; class based ones are different from functional ones
            text: this.state.todoText,
            done: false
        });
    }

    render() {
        console.log("CreateTODO render function is running!");
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add new TODO</h4>
                <input
                    type="text"
                    value={this.state.todoText}
                    onChange={this.handleChange}
                />
                <button type="submit">Add TODO</button>
            </form>
        );
    }
}

export default CreateTodo;