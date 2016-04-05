import React from 'react'

import TodoList from './myTodoList.js'

export default React.createClass({
  getInitialState: function() {
    return {items: [], text: ''}
  },
  onChange: function(e) {
    this.setState({text: e.target.value})
  },
  handleSubmit: function(e) {
    e.preventDefault()
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}])
    var nextText = ''
    this.setState({items: nextItems, text: nextText})
  },
  render: function() {
    return (
      <div>
        <h4>gDash ToDo</h4>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    )
  }
})