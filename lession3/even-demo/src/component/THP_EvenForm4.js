import React, { Component } from 'react'

export default class THP_EvenForm4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "Phuc"
        }
    }

    handleGetName = ()=>{
        alert(this.props.name);
        this.setState({
            name: this.props.name
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Lay du lieu tu props</h2>
        <button onClick={this.handleGetName}>Lay ten</button>
        <h2>Welcome to , {this.state.name}</h2>
        
      </div>
    )
  }
}
