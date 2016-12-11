import React from 'react';

const Nav = ({ page })=> {
  const links = [ 'home', 'people', 'things'].map( _page => {
    return ( 
        <li key={_page} className={ _page === page ? 'active' : '' }>
          <a href={ _page === 'home' ? '#' : `#${_page}` }>{_page}</a>
        </li>
    );
  });

  return (
      <ul className='nav nav-tabs'>
        { links }
      </ul>
  );
}

export default Nav;
