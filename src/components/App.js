import React  from 'react';
import SearchField from './SearchField';
import GifContainer from './GifContainer';
import './../App.css';
import axios from 'axios'



/*

user input
check user input
take api data
check api data
output api data base on user input
display api data
random button
random api data
style





*/




class App extends React.Component {
  constructor(){
    super();
    this.state = {
        gifs: [],
        rand: ""
    }
  }

  searchGifs = (name, type) => {
    switch (type) {
      case 0: //Search
        this.search(name);
        break;
      case 1: //random
        this.random();
        break;
      default: //Default trending
        this.trending();
        break;
    }
  }

  
  componentDidMount(){
    this.searchGifs();
  }
  
  //API Key: 0QegizgIHwqHH4870fIotwRSzqYpbmLw





  //Search function
  search = (name) =>{
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${name}&limit=24&api_key=0QegizgIHwqHH4870fIotwRSzqYpbmLw`)
    .then(res => {this.setState({gifs: res.data.data, rand: ""}); 
    console.log("Search")})
    
    .catch(err => console.log("Error"))
  }

  //Random function
  random = () =>{
    axios.get(`https://api.giphy.com/v1/gifs/random?&limit=1&api_key=0QegizgIHwqHH4870fIotwRSzqYpbmLw`)
    .then(res => {this.setState({rand: res.data.data.images.original.url}); 
    console.log("Random")})
    .catch(err => console.log("Error"))
  }

  //Trending function
  trending = () =>{
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=0QegizgIHwqHH4870fIotwRSzqYpbmLw`)
    .then(res => {this.setState({gifs: res.data.data, rand:""}); 
    console.log("Trending")})
    .catch(err => console.log("Error"))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
            <a href="/">
            <img src="https://cdn.discordapp.com/attachments/795434246109659138/799356325821677578/5842a962a6515b1e0ad75b04.png" alt="giphy logo" className="logo"/>
            </a>
              <h1>Giphy Search</h1>
            <p>Please Enter Your Favorite Gif</p>
            <SearchField searchGifs={this.searchGifs}/>
            <button onClick={()=>this.searchGifs("", 1)}>Random</button>
            <div className="gifContainer">
            <GifContainer gifs = {this.state.gifs} rand={this.state.rand}/>
            </div>
            
        </div>
      </div>
    );
  }
}


export default App;