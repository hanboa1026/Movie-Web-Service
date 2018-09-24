import React, { Component } from 'react';
import './Movie.css';
import Proptype from 'prop-types'

class Movie extends Component{

    static propTypes = {
        title   : Proptype.string 
        ,poster : Proptype.string//string
    } 

    render(){
        console.log(this.props)
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        console.log(this.props)
        return(
            <img src={this.props.poster} alt="Movie Poster"/>
        )
    }
} 
 
export default Movie