import React from 'react';
import logo from './basket.png';

const img = {
    width: '20px',
    height: '20px',
    float: 'right',
    cursor: 'pointer',
  }

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <img src={logo} alt={"logo"} style={img} onClick={(e)=> this.removeTodo(this.props.id) } />{this.props.todo.text}
      </div>
    );
  }
}
