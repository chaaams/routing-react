import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../App.css'

function withRouter(Component){
    return(props) =>{return <Component params={useParams()} {...props}/>}
}
class Produit extends React.Component{
    constructor(){
        super();
        this.state ={
            name: '',
            img: '',
            description: '',
            price: ''

        }
    }
componentDidMount= () =>{
    const URL = ' https://fakestoreapi.com/products/'+this.props.params.productId;
    axios(URL).then(result=>{
        console.log(result);
        this.setState({
            name: result.data.title,
            img: result.data.image,
            description: result.data.description,
            price: result.data.price
        })
    })
}
    render(){
        return(
            <div className="parentDiv">
                <h2>{this.state.name}</h2>
                <img height={200} src={this.state.img}/>
                <p>{this.state.description}</p>
                <p>Price: {this.state.price}€</p>
                
            </div>

        )
    }
}
export default withRouter(Produit)