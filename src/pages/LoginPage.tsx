import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUsers } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

interface User {
  id: number;
  name: string;
}

const LoginPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
        if (response.data.length > 0) {
          setSelectedUserId(response.data[0].id.toString());
        }
      } catch (err) {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleLogin = () => {
    const userToLogin = users.find(u => u.id.toString() === selectedUserId);
    if (userToLogin) {
      login(userToLogin);
      navigate('/');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>Please select a user to continue</p>
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage; 