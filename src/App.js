import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'


 
class App extends Component {
  /* 모든 컴포넌트는 render function를 가짐 : '뭔가를 보여주는, 출력하는 기능'
   * '이 컴포넌트가 나에게 보여주는 것이 무엇인가'
   * Render : componentWillMount() -> render() -> componentDidMount()
   * Udate : componentWillReciveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> conponentDidUpdate()
   * */
  /*
  componentWillMount(){
    console.log('will mount')
  }

 
  */
  state = {}

  componentDidMount(){
   this._getMovies();
  }

  _renderMovies = () => {
    //movies라는 variable에 데이터를 저장
    //movies를 출력할 때 정렬된 항목(array)를 보여준다. '[<Movie />, <Movie props />]'
    const movies = this.state.movies.map(movie => {
      return <Movie 
                title     = {movie.title_english}    
                alt       = {movie.title_english} 
                poster    = {movie.large_cover_image} 
                key       = {movie.id} 
                genres    = {movie.genres}
                synopsis  = {movie.synopsis}
            />
    })
    return movies
  }

  // async : 순서와 상관없이 작업 진행
 _getMovies =  async () => {
    // async 를 쓰지않으면 await이 작동하지 않음
    const movies = await this._callApi();
    this.setState({
      movies // : movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
    // '=>' : arrow function, return의 의미
  }

  render() {
    const { movies } = this.state;
    return (
      <div className = {movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>   
    //데이터가 있으면 출력, 없으면 로딩중 
    // * '_'를 쓰는 이유 : 리액트 자체 기능과 구분
    // '= () =>' : 최신 자바스크립트
    );
  }  
}
// 컴포넌트 생성 > 렌더 > 리턴 > html 내용 > 브라우저

export default App;
