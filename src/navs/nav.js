import React from 'react';
import NavLink from '.';


let style = {
  padding: '10px',
  background: '#dddd',
  margin: '3px'
}

const Nav = () => {
  return (
    <div>
      <nav>
        <ul style={{display: 'flex'}} className="justify-content-around">
          <li style={style}><NavLink name='Reach Router' to="/" href="#home">Home</NavLink></li>
          <li style={style}><NavLink name='Reach Router' to="/about" href="#about">About</NavLink></li>
          <li style={style}><NavLink name='Reach Router' to="/product" href="#product">Product</NavLink></li>
          <li style={style}><NavLink name='Reach Router' to="/blog" href="#blog">Blog</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;