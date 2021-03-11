import React, { useState } from 'react'
import TrophyCase from './containers/TrophyCase.js';
import NamePlate from './components/NamePlate.js';
import Popup from './components/Popup.js'
import './App.css'


const App = () =>{
    const [trophies, setTrophies] = useState([
        {
            trophyId: 0,
            name: '10 Stories Read',
            dateEarned: 'December 12 2020',
            earned: true,
        },{
            trophyId: 1,
            name: 'Read for 1 Hour',
            dateEarned: 'December 12 2020',
            earned: true,
        },{
            trophyId: 2,
            name: '20 Stories Read',
            dateEarned: '',
            earned: false,
        },{
            trophyId: 3,
            name: 'Read for 2 Hours',
            dateEarned: '',
            earned: false,
        }
    ]);
    const [showPopup, setShowPopup] = useState(false)
    const [popupPosition, setPopupPosition] = useState([])
    const [popupTrophy, setPopupTrophy] = useState(null)


    const bubbleDetails = (e, id) =>{
        setShowPopup(true)
        setPopupPosition([e.pageX, e.pageY])
        setPopupTrophy(trophies[id])
    }

    const hideBubble = () => {
        setShowPopup(false)
    }

    return (
        <>
        <NamePlate />
        <TrophyCase 
            trophies = {trophies}
            bubbleDetails = {bubbleDetails}
            hideBubble = {hideBubble}
        />
        <Popup 
            showPopup = {showPopup}
            popupPosition = {popupPosition}
            popupTrophy = {popupTrophy}
        />
        </>
    )
}

export default App