import React from 'react';
import { useSelector } from 'react-redux';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa'; // Correct import statement

// Dummy data for logs
const dummyLogs = [
    { id: 1, message: 'Processing started.', type: 'info' },
    { id: 2, message: 'Data fetched successfully.', type: 'success' },
    { id: 3, message: 'Error: Connection timeout.', type: 'error' },
    { id: 4, message: 'Processing completed.', type: 'info' },
];

const DataProcessing = () => {
    // Replace with actual selector for logs from Redux state
    const logs = useSelector((state) => state.data.logs) || dummyLogs;

    return (
        <div>
            <h2>Data Processing</h2>
            <ul className="log-list">
                {logs.map((log) => (
                    <li key={log.id} className={`log-item ${log.type}`}>
                        {log.type === 'info' && <FaSpinner className="icon spin" />} {/* Example loading spinner */}
                        {log.type === 'success' && <FaCheckCircle className="icon success" />} {/* Example success icon */}
                        {log.type === 'error' && <FaTimesCircle className="icon error" />} {/* Example error icon */}
                        <span className="message">{log.message}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataProcessing;
