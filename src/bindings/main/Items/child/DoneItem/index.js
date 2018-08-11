import React from 'react';
import {makeItemBinding} from './../utils';

export default makeItemBinding({
  whenToRender: view => ({
    all: view,
    done: view,
    undone: null,
  }),
  itemView: ({dispatch, title, toNode}) =>
    <li className="done" onClick={() => dispatch(toNode({type: 'CLICK_ITEM'}))}>
      {title}
    </li>,
});