import Assign from 'object-assign'
import EventEmitter from 'events'

import Dispatcher from '../appDispatcher.js'

var CHANGE_EVENT = 'change'
var UPDATE_NOTES_EVENT = 'update-notes'
var store = localStorage

var NotesStore = Assign({}, EventEmitter.prototype, {
	getStore: function(){
		return store
	},
	setStore: function(updatedStore){
		store = updatedStore
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT)
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback)
	},
	dispatcher: Dispatcher.register(function(payload){
		switch(payload.actionType){
			case UPDATE_NOTES_EVENT:
				store.notes = payload.notes
				NotesStore.emitChange()
				console.log('dispatched')
			break
		}
	})
})

export default NotesStore

