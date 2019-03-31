import React from 'react';
import './App.css';


const List = props => (
    <ul className="list_list">
        {
            props.items.map((item, index) => <li key = {index}> {item} </li>)
        }
    </ul>
);

/*
class List extends React.Component {

    render() {
        return (
            <div className="list_item">
                <p className = "list_text"> 
                    {this.props.items}
                </p>
                <button className = "list_delete_button" onClick={this.props.deleteItem}>Delete</button>
            </div>
        );
    }
}
*/
export default List;