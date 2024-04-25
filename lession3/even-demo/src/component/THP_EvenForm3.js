import React, { Component } from 'react'
// xu ly even vs props,state
export default class THP_EvenForm3 extends Component {
    constructor(props){
        super(props);
        //tao doi tuong du lieu thong qua state
        this.state = {
            name:"trinh huu phuc",
            job:" no job"
        }
    }

    // ham xu ly su kien
    handleChangeName = (ev)=>{
        this.setState({
            name:"K22CNT3-rejactJs"
        })
    }
    handleChangeJob = ()=>{
        this.setState({
            name:"COng nghe phan mem"
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay doi du lieu trong state</h2>
        <p>Du lieu:{this.state.name} - {this.state.job} </p>
        <button onClick={this.handleChangeName}>Thay doi ten</button>
        <button onClick={this.handleChangeJob}>Thay Job</button>

        
      </div>
    )
  }
}
