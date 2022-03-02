import React from 'react'
// eslint-disable-next-line
import {Link} from 'react-router-dom'
import '../../styles/VenteAchat.css'

function VenteAchat() {
  return (
        <div className="form-exte col">
            <form className="form-horizontals">
                <span className="headings bg-dark text-white text-center">Operation Achat/vendre</span>
                <div className="form-group">
                    <label for="donne">Je donne</label>
                    <input
                        type="number"
                        name="donne"
                        className="form-control"
                        id="donne"
                        placeholder="BTC"
                    />
                    <i className="bi bi-cash-stack icon"></i>
                </div>
                <div className="form-group help">
                    <label for="recois">Je reçois</label>
                    <input
                        type="number"
                        name="recois"
                        className="form-control"
                        id="recois"
                        placeholder="USD PM"
                    />
                    <i className="bi bi-currency-dollar icon"></i>
                </div>
                    
                <div className="form-groups">
                    <button type="submit" className="btn btn-outline-danger button">
                        Voir les Achateurs/ vendeurs
                    </button>
                </div>
                    
            </form>
        </div>
  )
}

export default VenteAchat