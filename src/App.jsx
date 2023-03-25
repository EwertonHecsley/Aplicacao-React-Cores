import React from 'react'
import './App.css'
import CardSuco from './components/CardSuco'
import sucos from './components/Data'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      sucoFilter: "",
    }

    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(event) {
    const value = event.target.value;
    //Forma 1
    this.setState({
      sucoFilter: value,
    })
  }

  render() {

    const { sucoFilter } = this.state

    return (
      <div className='div-central'>
        <h1>Filtre uma cor</h1>
        <input
          className='inp-text'
          type="text"
          onChange={this.handlerChange} />
        <ul>
          {

            sucos
              .filter((suco) => suco.sucoNome.includes(sucoFilter))
              .map((suco) => (
                <CardSuco key={suco.hex} suco={suco} />
              ))
          }
        </ul>
      </div>
    )
  }
}

export default App
