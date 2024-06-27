import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import DataCollection from './components/DataCollection';
import DataProcessing from './components/DataProcessing';
import Alerting from './components/Alerting';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Dashboard />
                <DataCollection />
                <DataProcessing />
                <Alerting />
            </main>
        </div>
    );
};

export default App;
