import React, { Component } from 'react'

export default class THP_EvenForm1 extends Component {
    //Ham xu ly
    eventHandleClick1 = ()=>{
        alert("even handle 1");
    }
    eventHandleClick2(){
        alert("even click 2");
    }


    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Even handle</h2>
                {/* gọi hàm xử lý even khi render */}
                <button onClick={this.eventHandleClick1()}>click 1</button>
                {/* goi ham khi xu ly click */}
                <button onClick={this.eventHandleClick2}>click 2</button>

            </div>
        )
    }
}
