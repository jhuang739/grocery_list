import React, { Component } from 'react';
import './App.css';
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      items: [],
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <div className="header">Grocery List</div>
        <form className="App" onSubmit = {this.onSubmit}>
          <input value = {this.state.term} onChange = {this.onChange} />
          <button>Add Item</button>
        </form>
        <List items = {this.state.items}/>
      </div>
    );
  }
}

export default App;