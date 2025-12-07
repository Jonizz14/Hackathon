import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data immediately
    const checkAuthState = () => {
      try {
        const storedUser = localStorage.getItem('zooMarketUser');
        const loginTime = localStorage.getItem('zooMarketLoginTime');
        
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          // Verify user data has required fields
          if (userData && userData.id && userData.username) {
            // Check session timeout (24 hours)
            if (loginTime) {
              const timeDiff = Date.now() - parseInt(loginTime);
              const sessionTimeout = 24 * 60 * 60 * 1000; // 24 hours
              
              if (timeDiff > sessionTimeout) {
                // Session expired, clear data
                localStorage.removeItem('zooMarketUser');
                localStorage.removeItem('zooMarketLoginTime');
                setUser(null);
              } else {
                setUser(userData);
              }
            } else {
              setUser(userData);
            }
          } else {
            localStorage.removeItem('zooMarketUser');
          }
        }
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('zooMarketUser');
        localStorage.removeItem('zooMarketLoginTime');
      } finally {
        setLoading(false);
      }
    };

    checkAuthState();
  }, []);

  // Session timeout check on user activity
  useEffect(() => {
    const handleUserActivity = () => {
      const loginTime = localStorage.getItem('zooMarketLoginTime');
      if (loginTime && user) {
        localStorage.setItem('zooMarketLoginTime', Date.now().toString());
      }
    };

    // Listen for user activity
    window.addEventListener('mousedown', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);

    return () => {
      window.removeEventListener('mousedown', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
    };
  }, [user]);

  const login = async (username, password) => {
    try {
      const response = await fetch(`http://localhost:3001/users?username=${username}&password=${password}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const users = await response.json();
      if (users.length > 0) {
        const loggedUser = users[0];
        setUser(loggedUser);
        localStorage.setItem('zooMarketUser', JSON.stringify(loggedUser));
        // Store additional session info
        localStorage.setItem('zooMarketLoginTime', Date.now().toString());
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      // Clear any corrupted data
      localStorage.removeItem('zooMarketUser');
      return false;
    }
  };

  const register = async (username, password, email) => {
    try {
      const newUser = { id: Date.now(), username, password, email };
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        setUser(newUser);
        localStorage.setItem('zooMarketUser', JSON.stringify(newUser));
        localStorage.setItem('zooMarketLoginTime', Date.now().toString());
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    // Clear all session data
    localStorage.removeItem('zooMarketUser');
    localStorage.removeItem('zooMarketLoginTime');
    // Optionally clear other session-related data
    sessionStorage.clear();
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};