import React from 'react';

const Header = (props) => {
  const { head }  = props;
  return ( 
      <p>{props.head}</p>
  )
}

export default Header;