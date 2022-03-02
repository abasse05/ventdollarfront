import React from 'react'
import '../../styles/EspaceContent.css'
import userPicture from '../../assets/img/person-circle.svg'
import Card from "./Card"
import VenteAchat from './VenteAchat'

function EspaceContent() {
  return (
    <div className="containersespace" style={{}}>
        <div className="row">
            <div className="profil col-md-3 bg-light rounded">
                <div class="row">
                    <img src={userPicture} class="rounded-circle" alt="..." style={{width:180, margin:"10px auto"}} />
                </div>
                <div class="row">
                    <p className="text text-center">NOM ET PRENOM</p>
                    <p className="text text-center">Statut : Vendeur / Client</p>
                </div>

                <div class="row">
                    <br/>
                    <button className="btn btn-outline-secondary" style={{width:"90%", margin:"1px auto"}}>Modiﬁer mes informations</button>
                    <div style={{clear:"both",height:10}}>&nbsp;</div>
                    <button className="btn btn-outline-secondary" style={{width:"90%", margin:"1px auto"}}>Enregistrer une opération</button>
                    <div style={{clear:"both",height:10}}>&nbsp;</div>
                    <button className="btn btn-outline-secondary" style={{width:"90%", margin:"1px auto"}}>Historique</button>
                    <div style={{clear:"both",height:40}}>&nbsp;</div>
                    <button className="btn btn-outline-secondary" style={{width:"90%", margin:"1px auto"}}>Deconnexion</button>

                </div>
            </div>
            <div className="contenu col-md-9 bg-white">
                <div className="row">
                    <div className="col-8 col-gauche">
                        <VenteAchat />
                    </div>
                    <div className="col-4 col-droite">
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EspaceContent