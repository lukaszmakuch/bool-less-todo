import React from 'react';
import {makeItemBinding} from './../utils';

export default makeItemBinding({
  whenToRender: view => ({
    all: view,
    done: null,
    undone: view,
  }),
  itemView: ({dispatch, title, toNode}) =>
    <li className="undone" onClick={() => dispatch(toNode({type: 'CLICK_ITEM'}))}>
      {title}
    </li>,
});