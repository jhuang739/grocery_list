import React from 'react';
import './App.css';
import List from "./List";

class App extends React.Component {
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

  deleteItem = indexToDelete => {
    this.setState(({items}) => ({
        items: items.filter((list, index) => index !== indexToDelete)
    }));
  };

  render() {
    return (
      <div>
        <div className="header">Grocery List</div>
        <form className="App" onSubmit = {this.onSubmit}>
          <input value = {this.state.term} onChange = {this.onChange} />
          <button>Add Item</button>
        </form>
        <List items = {this.state.items}/>
        {/*
        <div className="list_content">
          {this.state.items.map((items, index) => {
            return <List 
              items = {this.state.items}
              deleteItem = {this.deleteItem.bind(this, index)}
              />
          })}
        </div> */}
      </div>
    );
  }
}

export default App;