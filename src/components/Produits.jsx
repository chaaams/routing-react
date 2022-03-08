import React from "react";
import axios from 'axios';
import '../App.css'
import Produit from "./Produit";
import { Link } from "react-router-dom";

class Produits extends React.Component{
    constructor(){
        super();
        this.state = ({
            produits: []
        })

    }

componentDidMount(){
    const URL = ' https://fakestoreapi.com/products/';
    axios(URL).then(response => {
        const produits = response.data;
        
            this.setState({
                produits: produits
            })
            // console.log(produits);
       
    })

}

    render(){

        return(
           <>
            {this.state.produits.map((produit) =>{
                return(
                    <div key={produit.id} >
                        <p>Titre :{produit.title}</p>
                        <img src={produit.image} className='img' alt="article"  />
                        <p>Prix:{produit.price}€</p>
                        <p>Description: {produit.description}</p>
                        <Link to={`/produit/${produit.id}`}>En savoir plus</Link>
                    </div>
                )
            })}
           </>
    )
    }  
}
    

export default Produits