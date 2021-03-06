import {lens, update} from 'ramda';
import {defaultHandler} from 'rosmaro-binding-utils';

// A single item focuses on a slice of the context. 
// For example
// The whole context is like {newItemText: 'writing', items: ['first', 'second']}
// The lens for the second Item graph (generated by the *Items* dynamic composite)
// turns it into {title: 'second', id: '1'}
export default () => ({

  lens: ({localNodeName}) => lens(
    (context) => ({
      id: localNodeName,
      title: context.items[localNodeName]
    }),
    ({title}, context) => ({
      ...context, 
      items: update(parseInt(localNodeName, 10), title, context.items)
    })
  ),

  handler: defaultHandler,
  
});