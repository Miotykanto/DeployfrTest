import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
//import Slider from './slider'
import image from './logobe.png'
import './Navbar.css'
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown} from "mdbreact";
class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    render() {
        const {isAuthenticated} = this.props.auth;
        const authLinks = (
          <div >
<div id="top-nav" class="navbar navbar-inverse navbar-static-top eto">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    
                    <ul >
                    <li><a href="a" to='/login' onClick={this.onLogout.bind(this)}  id="conect"><i class="fa fa-sign-out"></i> Deconnexion</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    </div>

</div>


<div class="col-lg-2 col-md-2 col-sm-3 col-xs-12" id ="aaa">

    <ul className="midina" >
        <Link to={"/atelier"}  className='sac'>Creer nouveau atelier</Link><br/><br/>
        <Link to={"/register/"+localStorage.getItem('id')} className='sac'>Tous ateliers</Link><br/><br/>

    </ul>
</div>

</div>

        )
      const guestLinks = (
        <div>
       <div>
   <MDBNavbar  color="default-color" dark expand="md" id="colorNav">
            
   <MDBNavbarToggler onClick={this.toggleCollapse} />
   <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
     <MDBNavbarNav left>
     <MDBNavItem>
       <img width='80px' height='80px' src={image} />
   <MDBNavLink to="/" id='daholo'>Accueil</MDBNavLink>
 </MDBNavItem>
 
       
       <MDBNavItem>
         <MDBDropdown>
           
           
         </MDBDropdown>
       </MDBNavItem>
     </MDBNavbarNav>
     <MDBNavbarNav right>
       
     <MDBNavLink className="waves-effect waves-light" to="/login" id='daholo'>
              Connecter
            </MDBNavLink>
     </MDBNavbarNav>
   </MDBCollapse>
 </MDBNavbar>
 </div>
  {/* <div className="slider"><Slider/></div>  */}
   </div>

      )
        return(
            
                
                <div  id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
           
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));