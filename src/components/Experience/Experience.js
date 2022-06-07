import React, { Component } from 'react'
import './Experience.css'
import Cards from '../Cards/Cards'



export class Experience extends Component {
  render() {
    return (
      <div className='section'>
        <div className='title-container'>
            <h5 className='title-text'>some relevant experience  :</h5>
        </div>
        <div className='cards-container'>
          <div className='card1'>
            <Cards 
              title='ML INTERN'
              imageUrl={'aieradesignlogo.png'}
              body='currently here'/>
          </div>
          <div className='card2'>
            <Cards 
            title='SUMMER INTERN'
            imageUrl={'hellome.png'}
            body='testing body '
          />
          </div>
          <div className='card3'>
             <Cards 
            title='SUMMER INTERN'
            imageUrl={'westerndev.png'}
            body='testing body '
          />

          </div>
        </div>
        </div>
    )
  }
}

export default Experience

{/** <div className='cards-conatiner'>
        <div className='card'>
          
          <Cards 
            title='ML INTERN'
            imageUrl={'aieradesignlogo.png'}
            body='currently here'/>
        </div>
          
            <div className='card'>
            <Cards 
            title='SUMMER INTERN'
            imageUrl={'hellome.png'}
            body='testing body '
          /></div>
      
        <div className='card'>
            <Cards 
            title='SUMMER INTERN'
            imageUrl={'westerndev.png'}
            body='testing body '
          /></div>
        </div>
        </div>*/}