import { SwipeableDrawer } from '@material-ui/core'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1598550931&w=1400&h=950"
        }
    ])
    const swiped = (direction, personName) => {
        console.log('Removing:'+personName)
    }
    const outOfFrame = (personName) => {
        console.log(personName + "has Left the screen")
    }
    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {
                    people.map((person) => (
                        <TinderCard className='swipe' key={person.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                            <div style={{backgroundImage:`url(${person.url})`}} className='card'>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards
