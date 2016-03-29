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
    <h4>
        Column right - Notepad
    </h4>
    <textarea id="myNotes" name="notes" value={this.state.notes} onChange={this.updateTextarea} rows="20" cols="45" placeholder="gDash notes..."></textarea>
    <input type="button" id="saveButton" value="Save Note" onClick={this.store.notes}/>
</div>)
	}
})

ReactDOM.render(<Notes />, myNotes)
// npm run start in term to start server localhost:8080





var mountNode = document.getElementById("simple")

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
})

var ManyHello = React.createClass({
	render: function() {
		return (<div><HelloMessage name="FRED" />
					<HelloMessage name="FRED" />
					<HelloMessage name="FRED" />
					<HelloMessage name="FRED" /></div>)
	}
})



ReactDOM.render(<ManyHello />, mountNode);
<div>
    <h4>
        Column right - Notepad
    </h4>
    <textarea id="myNotes" name="notes" rows="20" cols="45" placeholder="gDash notes..."></textarea>
    <input type="button" id="saveButton" value="Save Note" />
</div>