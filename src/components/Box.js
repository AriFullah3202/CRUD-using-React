import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


class Box extends Component {

    constructor(props) {
        super();
        this.state = {
            number: props.num,
            id: props.id,


        };

    }

    increment = () => {
        const increaseNumber = () => this.state.number = this.state.number + 1;
        this.setState(increaseNumber);
    };

    decrement = () => {
        const decreseNumber = this.state.number;
        if (decreseNumber === 0) {

        }
        else {

            const decreseNumber = () => this.state.number = this.state.number - 1;
            this.setState(decreseNumber);
        }
    }
    delete = (id) => {
        this.state.onDelete = this.props.onDelete(id);

        console.log("=============id form child" + id);
    }

    render() {
        return (
            <div className={"container"}>

                <div className={"d-flex gap-3 justify-content-center"}>

                    <button className={"bg-danger my-2 p-1 text-white"} type="button" onClick={this.decrement} >decreseNo: {this.state.id} </button>
                    <div className={"my-3 p-3"}> {this.state.number}   </div>
                    <button className={"bg-primary my-2 p-1 text-white"} type="button" onClick={this.increment}>increseNo: {this.state.id}</button>
                    <button className={"bg-danger my-2 p-1"} type="button" onClick={event => this.delete(this.state.id)}>DeleteNo{this.state.id}</button>

                </div>


            </div>
        )
    }
}
export default Box;





