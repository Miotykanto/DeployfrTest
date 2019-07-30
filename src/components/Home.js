
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import {Link } from 'react-router-dom';
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './Home.css'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('https://lasalasa.herokuapp.com/affichertous')
            .then(response => {
                console.log(response.data);
                this.setState({ profil: response.data });
                localStorage.setItem('atelier',response.data._id)
            })
            .catch(function (error) {
                console.log(error);
            })

        

    }

    liste() {
        return <div>
            <div class="row">
                
                        {
                            //(this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                (this.state.profil.length > 0) ? (this.state.profil.filter((params)=>params.visibilite).map((obj) => {
                                return (
<div class="col-md-6 carde">
<div class="card">




<div class="card-body">

  
  <h4 class="card-title"><center>{obj.titre}</center> </h4>
  <div className="container"><img width="90%" height="300px" src={'hhttps://valimbavaka.herokuapp.com/user/'+obj.image} alt="pdp" /></div>
  <p class="card-text"><span>Description:</span> {obj.description}</p>
  <p class="card-text"><span>Date:</span>{obj.date}</p>
  <p class="card-text"><span>Heure de debut:</span>{obj.debut}</p>
  <p class="card-text"><span>Durée:</span> {obj.dure}</p>
  <p class="card-text"><span>Nombre de place non reserver:</span>{obj.place_dispo}</p>
  <p class="card-text"><span>Nombre de place reserve:</span> {obj.place_reserve}</p>
  <p class="card-text"><span>Prix:</span> {obj.prix}<span>€</span></p>
  <Link className="btn btn-danger " id="bouttonAjouter" to={"/particulier/"+obj._id} onClick={()=>{
      console.log(obj.id2);
      localStorage.setItem('ti',obj._id)
      
  }}>  S'inscrire </Link>

</div>
</div>
</div>)



                            })) : ('')
                        }
                
        </div>
        </div>
    }
    render() {
        return (
            <div >
                {this.liste()}
            </div>
        );
    }
}