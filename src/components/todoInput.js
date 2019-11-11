import React from 'react';

const style = {
  div: {
    marginLeft: '400px',
    marginTop: '100px',
    marginBottom: '40px',
  },
  h2: {
    color: 'black',
    fontWeight: 'normal',
  },
}

const inputik  = {
  width: '400px',
  padding: '5px',
}

const submit  = {
  width: '50px',
  padding: '5px',
  marginLeft: '20px',
  color: 'white',
  backgroundColor: 'blue',
}

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.todoText};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {
    // Ensure a todo was actually entered before submitting
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div style={style.div}>
        <h2 style={style.h2}>ToDo List</h2>
        <input type="text" placeholder="New Task" value={this.state.value} onChange={this.handleChange} style={inputik} />
        <button style={submit} onClick={() => this.addTodo(this.state.value)}>Add</button>
      </div>
    );
  }
}
