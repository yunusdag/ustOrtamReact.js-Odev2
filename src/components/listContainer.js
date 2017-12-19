import React, { Component } from "react";
import I from "immutable";

class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.todoItems;

    return (
      <div className="list-container">
        {
          items.map((each, idx) => {
            return (
              <div key={idx} className="each-todo">
                {each}
                {
                  /*
                    you should have a delete button for each todo item like that,
                    and delete button should dispatch delete functionality for reducer
                    (Hint: you can look at what we did for add-task button)
                    (Hint: do not forget to bring dispatch method from "app.js" like we did for form)
                   */
                  <button
                    onClick={e => {
                      this.props.dispatch({
                        type: "DELETE_TODO_TEST_ITEM",
                        data: idx
                      })
                    }}
                    className="delete-icon"
                  >{"X"}
                  </button>
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default ListContainer;
