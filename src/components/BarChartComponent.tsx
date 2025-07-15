import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { getActivities } from '../services/api';

interface Activity {
  id: number;
  type: string;
}

interface ChartData {
  name: string;
  count: number;
}

const BarChartComponent = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await getActivities();
        const activities: Activity[] = response.data;
        
        const activityCounts = activities.reduce((acc, activity) => {
          acc[activity.type] = (acc[activity.type] || 0) + 1;
          return acc;
        }, {} as { [key: string]: number });

        const formattedData = Object.keys(activityCounts).map((key) => ({
          name: key,
          count: activityCounts[key],
        }));

        setChartData(formattedData);
      } catch (err) {
        setError('Failed to fetch chart data.');
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  if (loading) return <p>Loading chart data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" name="Activity Count" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent; 