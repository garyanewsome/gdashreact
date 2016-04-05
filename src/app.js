import ReactDOM from 'react-dom'
import React from 'react'

var myNotes = document.getElementById("notes")
var Notes = React.createClass({
	store: localStorage,
	getInitialState: function(){
		return {notes: this.recallNotes()}
	},
	updateTextarea: function(event){
		this.setState({notes: event.target.value})
	},
	storeNotes: function(){
		var myNotes = this.state.notes
    	this.store.notes = myNotes
    },
	recallNotes: function(){
		if(this.store.notes !== undefined){
			return this.store.notes;
		} else {
			return "gDash notes...";
		}
	},
	render: function(){
		return (<div>
    <h4>gDash Notes</h4>
    <textarea id="myNotes" name="notes" value={this.state.notes} onChange={this.updateTextarea} rows="20" cols="45" placeholder="gDash notes..."></textarea>
    <input type="button" id="saveButton" value="Save Note" onClick={this.store.notes}/>
</div>)
	}
})

var todos = document.getElementById("todos")
var TodoList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <li key={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
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
    );
  }
});

ReactDOM.render(<Notes />, myNotes)
ReactDOM.render(<TodoApp />, todos);

// npm run start in term to start server localhost:8080
