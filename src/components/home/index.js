	 import React from 'react'
    import { Route, Link } from 'react-router-dom'
    
    const Home = props => (
      <div className={'overlay'}>
        <div className={'text-center'}>
      <h1 className=".text-pop-up-tl">React Redux</h1>
      <h3>Aamdocs Ui Developer Task</h3>
      <p>Samuel Moses</p>
      <br />
      <Link to="/task" className="btn btn-primary">Go to Task page</Link>
    </div>
  </div>
)

export default Home;