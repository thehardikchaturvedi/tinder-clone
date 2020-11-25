import { SwipeableDrawer } from '@material-ui/core'
import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name:"Elon Musk",
            url:""
        },
        {
            name:"Jeff Bezos",
            url:""
        }
    ])
    return (
        <div className='tinderCards'>
            <div className='tinderCards_cardContainer'>
                {
                    people.map((person)=>(
                        <TinderCard className='swipe' key={person.name} preventSwipe={["up","down"]} onSwipe={(dir)=>swiped(dir,person.name)} onCardLeftScreen={()=>outOfFrame(person.name)}></TinderCard>
                    ))
                }  
            </div>   
        </div>
    )
}

export default TinderCards
