import React, { useEffect, useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const generateDummyData = () => {
    const labels = Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`);
    const data = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));
    return { labels, data };
};

const LineChart = ({ chartData }) => (
    <div className="chart-container">
        <h3>Line Chart</h3>
        <Line
            data={{
                labels: chartData.labels,
                datasets: [
                    {
                        label: 'Metrics',
                        data: chartData.data,
                        fill: false,
                        backgroundColor: 'rgb(75, 192, 192)',
                        borderColor: 'rgba(75, 192, 192, 0.2)',
                    },
                ],
            }}
        />
    </div>
);

const BarChart = ({ chartData }) => (
    <div className="chart-container">
        <h3>Bar Chart</h3>
        <Bar
            data={{
                labels: chartData.labels,
                datasets: [
                    {
                        label: 'Metrics',
                        data: chartData.data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1,
                    },
                ],
            }}
        />
    </div>
);

const DoughnutChart = ({ chartData }) => (
    <div className="chart-container">
        <h3>Doughnut Chart</h3>
        <Doughnut
            data={{
                labels: chartData.labels,
                datasets: [
                    {
                        label: 'Metrics',
                        data: chartData.data,
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 159, 64)',
                        ],
                        hoverOffset: 4,
                    },
                ],
            }}
        />
    </div>
);

const Dashboard = () => {
    const [lineChartData, setLineChartData] = useState(generateDummyData());
    const [barChartData, setBarChartData] = useState(generateDummyData());
    const [doughnutChartData, setDoughnutChartData] = useState(generateDummyData());

    useEffect(() => {
        // Example of updating data every 5 seconds
        const interval = setInterval(() => {
            setLineChartData(generateDummyData());
            setBarChartData(generateDummyData());
            setDoughnutChartData(generateDummyData());
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <LineChart chartData={lineChartData} />
            <BarChart chartData={barChartData} />
            <DoughnutChart chartData={doughnutChartData} />
        </div>
    );
};

export default Dashboard;
