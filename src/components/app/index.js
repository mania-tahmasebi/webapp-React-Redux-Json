import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Task from '../task'

const App = () => (
  <div>
    <header className={'container'}>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/task" className="nav-link">Task</Link>
        </li>
      </ul>

    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/task" component={Task} />
    </main>
  </div>
)

export default App
