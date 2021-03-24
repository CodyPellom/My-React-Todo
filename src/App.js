import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }
  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    //copy of current list of items
    const list = [...this.state.list];
    //add a new item to the list
    list.push(newItem);
    //Update state with new list and reset newItem input
    this.setState({
      list,
      newItem: "",
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];
    //filter out item being deleted
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="App">
        <div>
          <p>Add an Item</p>
          <br />
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add</button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    className="lil-button"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
