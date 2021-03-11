import React from 'react';

const TrophyCard = (props) =>{

    return (
        <div 
            onClick = {(e) => props.bubbleDetails(e, props.trophyId)}
            onMouseOut = {props.hideBubble}
            onMouseLeave = {props.hideBubble}

            className={`trophy-outline ${props.earned ? "earned" : "unearned"}`}>
            <div  className="trophy-art"></div>
            <h2 className="trophy-name">{props.name}</h2>
            <h4 className="trophy-date">{props.earned? props.dateEarned : "Not earned yet!"}</h4>
        </div>
    )
}

export default TrophyCard