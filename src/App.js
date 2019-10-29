import React from 'react';
import axios from 'axios'
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';


const sampleQuote = 
{
  quote: "Nothing you say can upset us. We're the MTV generation.",
  character: "Bart Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data =>{
        console.log(data);
        this.setState({
          quote: data[0],
        });
      });
  }

render() {
  return (
    <div>
      <Navbar />
      <QuoteCard quote={this.state.quote}/>
      <button type="button" onClick={this.getQuote}>Get another quote</button>
    </div>
  );
}}

export default App;
