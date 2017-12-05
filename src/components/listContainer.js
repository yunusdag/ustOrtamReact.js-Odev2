import React, { Component } from "react";
import I from "immutable";

class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    /*
     After creating same flow that we did our lesson, you will have your todo datas a
     You will need to loop over this immutable array by using JSX syntax and create dynamic to-do-list here.
     this is a test immutable array you can look at example and understand how to do the operation.
    */
    const testDatas = I.List([1, 2, 3, 4]);

    return (
      <div className="list-container">
        {
          /*
            This is test example with test data. You will need to make it dynamic with store's todo data.
           */
          testDatas.map(eachTestData => (
            <div key={eachTestData} className="fake-todo-with-test-data">{eachTestData}</div>
          ))
        }
      </div>
    );
  }
}

export default ListContainer;
