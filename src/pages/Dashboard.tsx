import React from 'react';
import BarChartComponent from '../components/BarChartComponent';
import UserActivityTable from '../components/UserActivityTable';
import FeedbackForm from '../components/FeedbackForm';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <div className="card">
        <BarChartComponent />
      </div>
      <div className="card">
        <h2>Recent Activity</h2>
        <UserActivityTable />
      </div>
      <div className="card">
        <h2>Submit Feedback</h2>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Dashboard; 