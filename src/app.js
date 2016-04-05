import ReactDOM from 'react-dom'
import React from 'react'

import Notes from './components/myNotes.js'
import TodoList from './components/myTodoApp.js'

var myNotes = document.getElementById("notes")

var todos = document.getElementById('todos')

ReactDOM.render(<Notes />, myNotes)
ReactDOM.render(<TodoList />, todos)

// npm run start in term to start server localhost:8080
