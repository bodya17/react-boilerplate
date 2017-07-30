import React from 'react'
import { render } from 'react-dom'
import Movies from './Movies'
import { HashRouter, Route, Link } from 'react-router-dom'

const Greet = (props) => {
    return <h1>Hello</h1>
}

const Main = () => {
    return (
        <HashRouter>
            <div>
                <nav>
                    <Link to="/movies">Movies</Link>
                    <Link to="/greet">Greet</Link>
                </nav>
                <div>
                    <Route path="/greet" component={Greet} />
                    <Route path="/movies" component={Movies} />
                </div>
            </div>
        </HashRouter>
    )
}

render(<Main />, document.getElementById('app'))
