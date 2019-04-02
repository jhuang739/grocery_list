import React from 'react';
import './App.css';
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
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
        items: items.filter((_, index) => index !== indexToDelete)
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
        <div className="list_content">
          {this.state.items.map((item, index) => {
            console.log(item, index)
            return <List 
              item = {item}
              deleteItem = {this.deleteItem.bind(this, index)}
              />
          })}
        </div>
      </div>
    );
  }
}

export default App;