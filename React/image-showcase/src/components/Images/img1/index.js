import React from 'react';

const Img1 = (props) => {
    const {url, alt} = props;
    return (
      <img src={props.url} alt={props.alt} style={{"width: 250px; height: 200px"}} />
    )
  }


export default Img1;