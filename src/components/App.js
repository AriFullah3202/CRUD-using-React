import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Box from "./Box"

class App extends Component {
  state = {
    boxes: [],
  }

  createBox = () => {
    const { boxes } = this.state;

    this.setState({ boxes: [...boxes, 0] });

  }
  handleDelete = (id) => {

    console.log("=================== id from parent" + id)
    const updatededBox = this.state.boxes;
    updatededBox.splice(id, 1);
    console.log("=============== updated" + updatededBox);
    this.setState({ boxes: updatededBox });

  }

  render() {

    return (

      <div className={"container text-align-center"}>
        <div className="d-flex justify-content-center">

          <button onClick={this.createBox}>CreateNewBox</button>

        </div>
        <br />
        {this.state.boxes.map((number, index) =>
          <div key={index}>

            <Box num={number} id={index} onDelete={this.handleDelete} />
          </div>


        )}

      </div>
    );
  }







  // singleBox = () => {
  //   return <Box />;
  // }
  // getBoxes = () => {
  //   const arr = [1, 2, 3]
  //   return arr.map(
  //     this.singleBox
  //   )

  // }
  // createBox = () => {
  //   const { arra } = this.state;
  //   this.setState({ arr: [...arr, 0] })
  // 
  //
}
export default App;