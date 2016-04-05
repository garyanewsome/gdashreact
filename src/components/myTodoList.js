import React from 'react'

export default React.createClass({
  render: function() {
 	console.log('render')
    var createItem = function(item) {
      return <li key={item.id}>{item.text}</li>
    }
    return <ul>{this.props.items.map(createItem)}</ul>
  }
})