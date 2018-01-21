import Watcher from './components/watcher.js';
import React, { Component } from 'react';
    import './App.css';

    class App extends Component {
        render() {
            return (
                <div className="App">
                    <div className="App-header">
                        <h2>CryptoCompare</h2>
                    </div>
                    <Watcher />
                </div>
            );
        }
    }

    export default App;