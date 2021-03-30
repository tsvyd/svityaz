import React, { Component } from 'react'
import '../Style_Components.css'
class List extends Component {

    state = {
        quantity : 0,
        arrList:[{id:0,value:'vlad'}],
        arrNew:[],
        elementInput:'okkk'

    }
    

    render() {
        const tS = this.state
        return (
            <div className='list'>
   
                <h1>Лист с {tS.arrList.length}{tS.arrList.length === 1 || tS.arrList.length === 0 ? '-м':'-мя'}{tS.arrList.length === 1||tS.arrList.length === 0 ?' пукнтом':' пунктами'}</h1>
                <div style={{display:'flex',width:'200px',margin:'0 auto'}}>
                <input value={this.state.elementInput} type='text' onChange={this.elementPlus} />
                <button onClick={this.addElement} >Додати</button>
                
                </div>
                <button onClick={() => this.closeAllElement()} >Удалить все</button>
               {  this.state.arrList.map(item => {
                            
                return( 
                  
                    <div className='element animation__circle'>
                 <p key={item.id}>{item.value}</p>
                 <button   onClick={  () => this.closeElement(item.id)}>x</button>
                
                 </div>
                
             
                 )})  }
            {console.log(this.state.arrList)}
            
            </div>
            
        )
    }
    addElement = () =>{
        this.setState({
            arrNew: this.state.arrList.push({id:Math.random(99999) , value:this.state.elementInput}),
            elementInput:""
        })
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



}

export default List