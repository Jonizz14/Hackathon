import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(formData.username, formData.password);
      } else {
        await register(formData.username, formData.password, formData.email);
      }
      navigate('/');
    } catch (error) {
      alert(isLogin ? 'Login failed' : 'Registration failed');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>{isLogin ? 'Login to' : 'Register for'} ZooMarket Pro</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <Input
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          )}
          <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
        </form>
        <div className="toggle-section">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-button"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </div>
        {isLogin && (
          <div className="demo-info">
            <p>Demo: admin/admin or user/user</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
