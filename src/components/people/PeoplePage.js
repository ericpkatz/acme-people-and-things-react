import React, { Component } from 'react';

const PeoplePage = ({ people }) => {
  const lis = people.map( person => <li className='list-group-item' key={ person.id }>{ person.name }</li>);
  return (
        <ul className='list-group'>
          { lis }
        </ul>
    );
}

export default PeoplePage;
