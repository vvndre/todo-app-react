import React from "react";
import "./App.css";

export default class App extends React.Component {
  //new app
  constructor(props) {
    // React.Component. contstructor(props);
    super(props);
    this.state = {
      //isClicked: false,
      todos: [],
      text: "",
    };
    this.onClickHandler = () => {
      // get the input text
      const text = this.state.text;
      // create a new list of the current todos,
      // add the new text
      const todos = [...this.state.todos, text];
      // Set the new todo list to the state
      this.setState({
        todos: todos,
        text: "",
        // isClicked: !this.state.isClicked
      });
    };

    this.onChangeHandler = (evt) => {
      this.setState({
        text: evt.target.value,
      });
    };
  }

  render() {
    return (
      <div className="App">
        Hello World!
        <hr />
        <button onClick={this.onClickHandler}> Add Item </button>
        {/* <p>Am I Clicked? {this.state.isClicked ? 'Yes' : 'No'}</p>  */}
        <input
          type="text"
          value={this.state.text}
          onChange={this.onChangeHandler}
        />
        {/* <p>Text State?
          {this.state.text}
        </p> */}
        <h3> Todo List </h3>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <Todo key={index}>{todo}</Todo>;
          })}
        </ul>
      </div>
    );
  }
}

class Todo extends React.Component {
  render() {
    return (
      <li className="Todo">
        <input type="checkbox" /> {this.props.children}
      </li>
    );
  }
}
