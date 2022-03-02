import React from 'react'
import '../../styles/StartButton.css'

function StartButton() {
  return (

        <div className="col">
            <div className="row button-contain">
                <div className="col">
                    <a href="/login" className="btn btn-light btn-lg" id="buttonconnect">Connectez-vous</a>
                </div>
                <div className="col">
                    <a href="/inscription" className="btn btn-dark btn-lg" id="buttoninscrit">Inscrivez-vous</a>
                </div>
            </div>
        </div>
  )
}

export default StartButton