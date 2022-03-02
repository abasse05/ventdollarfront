import React from 'react'
import '../../styles/ForgetPasswordContent.css'
import {Link} from 'react-router-dom'

function ForgetPasswordContent() {
  return (
    <div className="containers" style={{}}>
          <div className="container">
              <div className="row">
                  <div className="col-md-offset-3 col-md-6" style={{margin:"0 auto"}}>
                      <form className="form-horizontal" style={{height:"120%"}}>
                          <span className="heading bg-dark text-white text-center" style={{borderRadius:15, height:100, opacity:0.9}}>Réinitisation Password</span>
                          <div className="form-group">
                              <input
                                  type="password"
                                  name="password"
                                  className="form-control"
                                  id="inputPassword3"
                                  placeholder="Password"
                              />
                              <i className="bi bi-lock-fill"></i>
                              <Link href="#" className="bi bi-eye"></Link>
                          </div>
                          <div className="form-group help">
                              <input
                                  type="password"
                                  name="password1"
                                  className="form-control"
                                  id="inputPassword3"
                                  placeholder="Confirm Password"
                              />
                              <i className="bi bi-lock-fill"></i>
                              <Link href="#" className="bi bi-eye"></Link>
                          </div>
                          <div className="form-group">
                              
                              <span className="text-danger"><Link to="/login" className="annuler" >Annuler</Link></span>

                              <button type="submit" className="btn btn-success confirm">
                                  Confirmer
                              </button>
                              
                          </div>
                      </form>
                  </div>
              </div>
          </div>
    </div>
  );
}

export default ForgetPasswordContent