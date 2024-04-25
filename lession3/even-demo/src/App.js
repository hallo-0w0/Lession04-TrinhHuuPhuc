import React, { Component } from 'react'
import THP_EvenForm1 from './component/THP_EvenForm1'
import THP_EvenForm2 from './component/THP_EvenForm2'
import THP_EvenForm3 from './component/THP_EvenForm3'
import THP_EvenForm4 from './component/THP_EvenForm4'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Even form demo</h1>
        <THP_EvenForm1/>
        <THP_EvenForm2/>
        <THP_EvenForm3/>
        <THP_EvenForm4 name="Trinh HUU Phuc"/>

      </div>
    )
  }
}
