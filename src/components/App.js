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


  render() {
     //console.log(getAll())
     // console.log(this.state.filters)
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
        .then(console.log)

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
