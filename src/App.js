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
  state = {
    greeting : 'Hello!',
    
  }
  componentDidMount(){
    
    //00 시간 후에 00작업을 수행시킨다.
    
    setTimeout(()=>{
      this.setState({
        movies   : [ 
          {
            title   : 'Hunger Game'
            ,poster : 'https://www.ecranlarge.com/uploads/image/000/628/original-665129-163.jpg' 
          },
          {
            title   : 'Noteboox'
            ,poster : 'https://ae01.alicdn.com/kf/HTB1cSQMIpXXXXblXXXXq6xXFXXX7/-.jpg_640x640.jpg' 
          },
          {
            title   : 'Inception'
            ,poster : 'http://image.cine21.com/cine21/poster/2010/0614/M0010010_inception_poster_3.jpg' 
          },
          {
            title   : 'The Good Place'
            ,poster : 'https://images.justwatch.com/poster/11649724/s592/deo-gus-peulreiseu' 
          }, 
        ]
        /*movies : [
          //이전 영화 리스트를 그대로 두고, 추가
          //위치를 아래로 옮기면 맨 위에 새로 추가됨
          ...this.state.movies,
          {
            title : "MISS SLOANE"
            ,poster : "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/vf1/image/VVA6V8ttTEwUoUNqIcDg8D8HGX4.jpg"
          }
        ]*/
      })
    },5000)
    
    /*setTimeout(function(){
      console.log('hello')
    },1000)
    */
  }

  _renderMovies = () => {
    //movies라는 variable에 데이터를 저장
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render() {
    return (
      /*<div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })       
        }       
       </div>
      */ 
     <div className = "App">
      {this.state.movies ? this._renderMovies() : 'Loading'}    
     </div>
    //데이터가 있으면 출력, 없으면 로딩중 
    // * '_'를 쓰는 이유 : 리액트 자체 기능과 구분
    // '= () =>' : 최신 자바스크립트
    )
  } 
}
// 컴포넌트 생성 > 렌더 > 리턴 > html 내용 > 브라우저

export default App;
