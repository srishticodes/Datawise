import React, { useEffect, useState } from 'react';
import { getActivities } from '../services/api';

interface Activity {
  id: number;
  userName: string;
  type: string;
  timestamp: string;
}

const UserActivityTable = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await getActivities();
        setActivities(response.data);
      } catch (err) {
        setError('Failed to fetch activities.');
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Activity Type</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity) => (
          <tr key={activity.id}>
            <td>{activity.userName}</td>
            <td>{activity.type}</td>
            <td>{new Date(activity.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserActivityTable; 