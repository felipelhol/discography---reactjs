import React, {Component} from 'react';
import './Discography.css';
import Album from './Album.js';


class Discography extends Component {

  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  componentDidMount(){
    const discographyUrl = 'https://gist.githubusercontent.com/emersonbrogadev/74da958938b36ee5baf14a08a81aa337/raw/d53f60755543ff0fa677d1dee31d2b226e65d7db/albums.json';
  
    fetch(discographyUrl)
    .then(result => result.json())
    .then((result) => {

      console.log('result', result);

      this.setState({data: result.data || [] })
    })
    .catch((error) =>{
      console.error(error);
    })
  }

  render() {
    const { data } = this.state;

    if(!data || !data.length) return (<h2>Loading...</h2>);

    return (
      <div>
        <h2>Discography</h2>
        <div className="discography">        
        {data.map(album => <Album key={album.title} item={album}/>)}
      </div>
      </div>    
    );    
  }
}
/*
function App() {
  return (
    <div className="App">
     <h1>create react app</h1>
    </div>
  );
}
*/
export default Discography;
