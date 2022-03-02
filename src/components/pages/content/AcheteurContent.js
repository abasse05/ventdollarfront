import React from 'react'
import '../../styles/AcheteurContent.css'
import {Link} from 'react-router-dom'

function AcheteurContent() {
  return (
    <div className="containersinscritpion" style={{}}>
          <div className="container">
              <div className="row">
                  <div className="col-md-offset-3 col-md-9" style={{margin:"10 auto"}}>
                      <div className="form-containerss form-mains">
                          <div className="row bg-dark">
                              <h3 className="title text-left text-white text-center tilte-texte">Acheteurs agrés de Dollars Exchanger</h3>
                          </div>
                            <table className="table table-borderless tables">
                                <thead>
                                    <tr>
                                        <th scope="col">&nbsp;</th>
                                        <th scope="col">Marchands</th>
                                        <th scope="col">Moyens de transaction</th>
                                        <th scope="col">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i class="bi bi-currency-bitcoin"></i></td>
                                        <td>Jean Jack</td>
                                        <td>Orange, Wave, MTN</td>
                                        <td><Link to="/vendeur" className="btn btn-outline-primary buttoncontact">Contacter</Link></td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-currency-dollar"></i></td>
                                        <td>Alex Parker</td>
                                        <td>Xpress, Wave, MTN</td>
                                        <td><Link to="/vendeur" className="btn btn-outline-primary buttoncontact">Contacter</Link></td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-currency-euro"></i></td>
                                        <td>Mickael Son</td>
                                        <td>Orange, Moov, MTN</td>
                                        <td><Link to="/vendeur" className="btn btn-outline-primary buttoncontact">Contacter</Link></td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-cash-coin"></i></td>
                                        <td>Coulibaly zoumana</td>
                                        <td>Wave, Moov, MTN</td>
                                        <td><Link to="/vendeur" className="btn btn-outline-primary buttoncontact">Contacter</Link></td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-currency-exchange"></i></td>
                                        <td>Lamba Change</td>
                                        <td>MTN, Moov, Wave</td>
                                        <td><Link to="/vendeur" className="btn btn-outline-primary buttoncontact">Contacter</Link></td>
                                    </tr>
                                    <tr>
                                        <td><i class="bi bi-badge-tm"></i></td>
                                        <td>TraderForex</td>
                                        <td>Wave, Moov, Orange</td>
                                        <td><Link to="/vendeur" className="btn btn-outline-primary buttoncontact">Contacter</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default AcheteurContent