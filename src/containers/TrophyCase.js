import React from 'react';
import TrophyCard from '../components/TrophyCard'


const TrophyCase = (props) =>{

    const generateTrophies = (trophies) => {
        return trophies.map((trophy) => {
            return  (
                <TrophyCard
                    bubbleDetails = {props.bubbleDetails}
                    hideBubble = {props.hideBubble}
                    key = {trophy.trophyId}
                    trophyId = {trophy.trophyId}
                    name = {trophy.name}
                    dateEarned = {trophy.dateEarned}
                    earned = {trophy.earned}
                />
            )
        })
    }

    return (
        <div id='trophy-case'>
            {generateTrophies(props.trophies)}
        </div>
    )
}

export default TrophyCase