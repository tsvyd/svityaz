import React, { Component } from 'react'
import './Style_Components.css'
import './App.css'
import './Style.scss'
import List from './Component/List'


export default class App extends Component {

  state = {
    vlad: 0,
    nameH1:'Название',
    input:'none'
}

  render() {

  return (


    <div className='main'>

      <List />
      
    </div>
  );
}
renameH1 = () => {
  this.setState({
    nameH1:this.state.input
  })
}
randomclick = () => {
  this.setState({
      vlad:Math.round(Math.random() * 10)
  })
}
handleInput = (event) => {
  this.setState({
    input:event.target.value
  })
}
}
 