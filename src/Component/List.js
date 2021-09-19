import React, { Component } from 'react'
import '../Style_Components.css'
import Counter from '../Counter/Counter'
class List extends Component {

    state = {
        quantity : 0,
        arrList:[{id:0,value:'vlad'}],
        arrNew:[],
        elementInput:'Вадим',
        focus:null

    }

    addElement = () =>{
        if(this.state.elementInput !== ""){
        this.setState({
            arrNew: this.state.arrList.push({id:Math.random(99999) , value:this.state.elementInput, number:this.state.arrList.length + 1}),
            elementInput:"",
            focus:document.querySelector('input').focus()

        })}else{
            return false
        }
    }
    elementPlus = (event) => {
        this.setState({
            elementInput: event.target.value
        })
    }
  
    closeElement = (name) =>{
      this.setState({
        arrList:this.state.arrList.filter(item => item.id !== name)
    })
  }
    closeAllElement = (name) =>{
    this.setState({
        arrList:this.state.arrList.filter(item => item.id === name)
    })
}
    onKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      this.addElement()
    }else return false
  }

    render() {
        const tS = this.state
        return (
            <div className='list' >
                <Counter />
                <h1>Лист с {tS.arrList.length}{tS.arrList.length === 1 || tS.arrList.length === 0 ? '-м':'-мя'}{tS.arrList.length === 1||tS.arrList.length === 0 ?' пукнтом':' пунктами'}</h1>
                <div style={{display:'flex',width:'200px',margin:'0 auto'}}>
                <input value={this.state.elementInput} type='text' onChange={this.elementPlus} onKeyPress={this.onKeyPressHandler} />
                <button onClick={this.addElement} >Додати</button>
                
                </div>
                <button onClick={() => this.closeAllElement()} >Удалить все</button>
                  { this.state.arrList.map(item => {
                            <h1>{item}</h1>  
                return( 
                  
                <div key={item.id} className='element animation__circle'>
                    <p >{tS.arrList.indexOf(item,0)+1}. {item.value}</p>
                     <button   onClick={  () => this.closeElement(item.id)}>x</button>
                </div>
                 )})}
            </div>
            
        )
        }
 
}

export default List