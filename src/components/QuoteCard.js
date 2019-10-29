import React from 'react';
import './QuoteCard.css';

function QuoteCard(props){
  return(
  <div>
    <figure className="QuoteCard">
      <img src={props.quote.image} alt={props.quote.character} />
    <figcaption>
      <blockquote>{props.quote.quote}</blockquote>
      <cite>{props.quote.character}</cite>
    </figcaption> 
    </figure>
  </div>)
}

export default QuoteCard;