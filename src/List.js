import React from "react";
import "./App.css";

class List extends React.Component {
  render() {
    return (
      <div className="list_item">
        <p className="list_text">{this.props.item}</p>
        <button className="delete_button" onClick={this.props.deleteItem}>
          Delete
        </button>
      </div>
    );
  }
}

export default List;
