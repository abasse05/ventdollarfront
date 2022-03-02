import React from 'react'
import '../../styles/Card.css'

function Card() {
  return (
        <div className="card bg-dark cards" style={{borderRadius: "0 35px 0 35px"}}>
            <div className="card-body">
                <p className="text-bold text-white text-center" style={{fontWeight:"bold", fontSize:20}}>Monnaies échangeables</p>
                <hr className="rgba-white-light" style={{margin:"0 15%"}} />

                <table class="table table-borderless text-white">
                    <thead>
                        <tr>
                            <th scope="col">Logo</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CFA</td>
                            <td>USD PM</td>
                            <td>500 XOF</td>
                        </tr>
                        <tr>
                            <td>Dollar</td>
                            <td>USD PM</td>
                            <td>500 XOF</td>
                        </tr>
                        <tr>
                            <td>Dinar</td>
                            <td>USD PM</td>
                            <td>500 XOF</td>
                        </tr>
                        <tr>
                            <td>CFA</td>
                            <td>USD PM</td>
                            <td>500 XOF</td>
                        </tr>
                        <tr>
                            <td>Dollar</td>
                            <td>USD PM</td>
                            <td>500 XOF</td>
                        </tr>
                        <tr>
                            <td>Dinar</td>
                            <td>USD PM</td>
                            <td>500 XOF</td>
                        </tr>
                        <tr>
                            <td>CFA</td>
                            <td>USD PM</td>
                            <td>500 XOF</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Card