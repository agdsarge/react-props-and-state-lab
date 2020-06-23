import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
    
  render() {
      console.log("in pets, this is this.props.pets:", this.props.pets)
      //let {pet: {name, type, age, weight, gender}} = this.props
    return (
        <div className="ui cards">
            {this.props.pets.map( pet =>
                <Pet
                    key={pet.id}
                    pet={pet}
                />
            )}

        </div>
    )
  }
}

export default PetBrowser
