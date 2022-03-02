import React from 'react';
import '../../styles/Footers.css'
import {Link} from 'react-router-dom'

function Footers() {
    return (

        <div className="bg-dark" style={{padding:25}}>
            
            <footer className="page-footer font-small special-color-dark text-white">

                <div className="container">
                    
                    <div class="row">
                        
                        <div class="col-md-6 mb-4" style={{margin:"5px auto"}}>
                            <form class="input-group">
                                <input type="text" class="form-control form-control-sm" placeholder="Your email"
                                    aria-label="Your email" aria-describedby="basic-addon2" /> &nbsp;&nbsp;&nbsp;
                                <div class="input-group-append">
                                    <button class="btn btn-sm btn-outline-light my-0" type="button">Sign up</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    
                    <div className="row pb-3 text-center justify-content-center">
                        <div className="col-md-12">
                            <div className="mb-5 flex-center">
                               
                                <Link to="#" className="fb-ic" style={{marginRight:25, textDecoration:"none", fontSize:30}}>
                                    <i className="bi bi-facebook text-white"> </i>
                                </Link>
                                
                                <Link to="#" className="tw-ic" style={{marginRight:25, textDecoration:"none", fontSize:30}}>
                                    <i className="bi bi-twitter text-white"> </i>
                                </Link>
                               
                                <Link to="#" className="gplus-ic" style={{marginRight:25, textDecoration:"none", fontSize:30}}>
                                    <i className="bi bi-google text-white"> </i>
                                </Link>
                                
                                <Link to="#" className="li-ic" style={{marginRight:25, textDecoration:"none", fontSize:30}}>
                                    <i className="bi bi-linkedin text-white"> </i>
                                </Link>
                                
                                <Link to="#" className="ins-ic" style={{marginRight:25, textDecoration:"none", fontSize:30}}>
                                    <i className="bi bi-instagram text-white"> </i>
                                </Link>
                                
                                <Link to="#" className="pin-ic" style={{ fontSize:30}}>
                                    <i className="bi bi-pinterest text-white"> </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <hr className="rgba-white-light" style={{margin:"0 15%"}} />

                <div className="footer-copyright text-center py-3">©2022 Copyright:
                    <Link to="#" className="text-white" style={{textDecoration:"none"}}> <i className="bi bi-currency-dollar"></i> Dollars Exchanger</Link>
                </div>

            </footer>
            
        </div>
    )
}

export default Footers
