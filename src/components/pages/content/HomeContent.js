import React from 'react';
import '../../styles/HomeContent.css'
import Card from "./Card"
import StartButton from './StartButton'

function Homecontent() {
    return (

        <div className="containers">
            <div className="row">
                <div className="col-containers col">
                    <Card />
                </div>
                <div className="col-containers col">
                    <StartButton />
                </div>
            </div>
        </div>
    )
}

export default Homecontent
