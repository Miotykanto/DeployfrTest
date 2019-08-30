

import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
//import Activer from './boutonactive'
export default class Chacun extends Component {

    constructor(props) {
        super(props);
        
        this.handleActive = this.handleActive.bind(this);
        this.handleDesactive = this.handleDesactive.bind(this);
        this.state = { profil: [] ,visibilite:false};
    }


    handleActive(){
        this.setState({visibilite:true})
    }
    handleDesactive(){
        this.setState({visibilite:false})
    }

    componentDidMount() {
        axios.get('https://ngambae.herokuapp.com/'+this.props.location.pathname)
            .then(response => {
                console.log(response.data);
                this.setState({ profil: response.data });
                localStorage.setItem('atelier',response.data._id)
            })
            .catch(function (error) {
                console.log(error);
            })
//get front-particulier


    }

    liste() {
        return <div>
            <div class="row">
                
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return (
<div class="col-md-6 carde">
<div class="card">




<div class="card-body">

  
  <h4 class="card-title" id='titrebe'
  onClick={()=>{
      console.log(obj._id);
      localStorage.setItem('atelier',obj.id2);
      
  }}><center>{obj.titre}</center> </h4>
  <img width="100%" height="300px" src={'https://ngambae.herokuapp.com/user/'+obj.image} alt="pdp" />
  <p class="card-text">Description: {obj.description}</p>
  <p class="card-text">Date de reservation: {obj.date}</p>
  <p class="card-text">Date fin de reservation : {obj.debut}</p>
  <p class="card-text">Nombre d'Adulte: {obj.dure}</p>
  <p class="card-text">Nombre d'Enfant: {obj.place_dispo}</p>
  <p class="card-text">Total Personne: {obj.place_reserve}</p>
  <p class="card-text" 
onClick={()=>{
    console.log(localStorage.getItem('ti'));
    
}}

 >Prix: {obj.prix}</p>
  <div className='row'>
      <div className='col-md-4'>
  <Link to={'/profil/'+obj._id} className="btn btn-primary">Edit</Link></div>

  <div>   
  <div className='col-md-4'>
            {this.state.visibilite ? (<div>
    <button className='btn btn-primary' onClick={(e)=>{
        e.preventDefault()
         axios.get("https://ngambae.herokuapp.com/masquer/"+obj._id).then(res=>console.log(res.data)
         )
         this.handleDesactive()
        }}>Desactiver</button>
   
      </div>):(<div>
    <button className='btn btn-primary' onClick={(e)=>{
        e.preventDefault()
        axios.get("https://ngambae.herokuapp.com/affichier/"+obj._id).then(res=>console.log(res.data)
        )
        this.handleActive()
        }}>Activer</button>
      </div>)}  
      </div>
              </div>
             <div className='col-md-4'>
  <Link to={'/getParticulier/'+obj._id} className="btn btn-primary" >Interessé</Link></div>
             </div>
  

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
