import React from 'react';

const ThingsPage = ({ things, onCreate, onDestroy })=> {
  console.log(onCreate);
  const listItems = things.map( thing => {
    return(
        <li key={ thing.id } className='list-group-item' onClick={ ()=> onDestroy( thing.id )}>
          { thing.name }
        </li>
    );
  });
  let input;
  return (
    <div className='well'>
      <div>
        <div className='form-group'>
          <input ref={(ref)=> input = ref } className='form-control' />
        </div>
        <button
          className='btn btn-primary'
          onClick={ ()=> {
            onCreate(input.value );
            input.value = '';
          }}>
            Create
        </button>
      </div>
      <ul className='list-group'>
        { listItems }
        
      </ul>
    </div>
  );
}

export default ThingsPage;
