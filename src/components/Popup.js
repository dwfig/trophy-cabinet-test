import React from 'react';

const Popup = (props) =>{
    let trophy = props.popupTrophy
    return(
        <div id="bubble" style={{left: `calc(${props.popupPosition[0]}px - 10vw)`, top: `calc(${props.popupPosition[1]}px + 5vh)`,  display: `${props.showPopup ? "block" : "none"}`}}>
            {!!trophy && <p>{trophy.earned ? `You earned this trophy on ${trophy.dateEarned}!` : `To earn this trophy you will need to have ${trophy.name.toLowerCase()}.`}</p>}
        </div>    
    )
}

export default Popup