import React from 'react'
import Dispatcher from '../appDispatcher.js'
import Store from '../stores/notesStore.js'

export default React.createClass({
	getInitialState: function(){
		return {notes: this.recallNotes()}
	},
	componentDidMount: function(){
		Store.addChangeListener(this._onChange)
	},
	componentWillUnmount: function(){
		Store.removeChangeListener
	},
	updateTextarea: function(event){
		Dispatcher.dispatch({
			actionType: 'update-notes',
			notes: event.target.value
		})
	},
	recallNotes: function(){
		if(Store.getStore().notes !== undefined){
			return Store.getStore().notes
		} else {
			return "gDash notes..."
		}
	},
	render: function(){
		return (<div>
    <h4>gDash Notes</h4>
    <textarea id="myNotes" name="notes" value={this.state.notes} onChange={this.updateTextarea} rows="20" cols="25" placeholder="gDash notes..."></textarea>
  
</div>)
	},
	_onChange(){
		console.log('tateReceived')
		this.setState({
			notes: this.recallNotes()
		})
	}
})



