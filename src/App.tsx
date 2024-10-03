import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useRecipeFetcher} from "./services/RecipeFetcherContext";
import {useAsync} from "react-use";


function Test() {
    const recipeFetcher = useRecipeFetcher()
    const cake = useAsync(async () => recipeFetcher.fetchText('cake'))

    if (cake.loading) return (<p>loading</p>)
    if (cake.error) return (<p>{cake.error.message}</p>)

    return (<div>{cake.value!}</div>)
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <section>
                    <Test/>
                </section>
            </header>
        </div>
    );
}

export default App;
