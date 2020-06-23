import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
//onChangeType={typeSelectFunction}
//import {getAll} from '../data/pets.js'

// App
//   |-Filters
//   |- PetsBrowser
//      |-Pets

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
      // console.log("ATTEMPT TO CHANGE THE GD TYPE")
      // console.log(e.target.value)
      this.setState({filters: {type: e.target.value}})
  }

  onFindPetsClick = (e) => {
      //console.log('onFindPetsClick')
      let category
      if (this.state.filters.type === 'all') {
           category = ''
      } else {
           category = `?type=${this.state.filters.type}`
      }
      // console.log("category is >>>", category)
      // console.log(`/api/pets${category}`)
      fetch(`/api/pets${category}`)
         .then(r => r.json())
         .then(data => {
             this.setState({pets: data})
             return data
         })
         //.then(console.log)
  }

  onAdoptPet = (e, id) => {
      console.log("onAdoptPet")
      this.state.pets.find( pet => pet.id == id).isAdopted = true
      console.log(this.state.pets.find( pet => pet.id == id))
  }

  render() {
     //console.log(getAll())
     // console.log(this.state.filters)

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
