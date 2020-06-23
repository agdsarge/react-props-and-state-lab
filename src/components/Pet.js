import React from 'react'

class Pet extends React.Component {
  render() {
      console.log("this is this onAdoptPet", this.props.onAdoptPet)
      let indivPet = this.props.pet
      //console.log(petObj)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {indivPet.gender === 'female' ? '♀' : '♂'}
            {/*'♀' OR '♂' */}
            {indivPet.name}
          </a>
          <div className="meta">
            <span className="date">{indivPet.type}</span>
          </div>
          <div className="description">
            <p>Age: {indivPet.age}</p>
            <p>Weight: {indivPet.weight}</p>
          </div>
        </div>
        <div className="extra content">
            { indivPet.isAdopted === true ?
          <button className="ui disabled button">Already adopted</button>
            :
          <button className="ui primary button" onClick={(e) => this.props.onAdoptPet(e, indivPet.id)}>Adopt pet</button>
            }
        </div>
      </div>
    )
  }
}

export default Pet
