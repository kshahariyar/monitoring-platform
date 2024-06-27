import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setMetrics, setLogs, setTraces } from '../features/dataSlice';

const DataCollection = () => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            const metricsResponse = await axios.get('/api/metrics');
            dispatch(setMetrics(metricsResponse.data));

            const logsResponse = await axios.get('/api/logs');
            dispatch(setLogs(logsResponse.data));

            const tracesResponse = await axios.get('/api/traces');
            dispatch(setTraces(tracesResponse.data));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h2>Data Collection</h2>
            <button onClick={fetchData}>Fetch Data</button>
        </div>
    );
};

export default DataCollection;
