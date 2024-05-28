import { useState } from "react";
import "../App.css";
import Login from "./Login";
import Signup from "./Signup";

const AuthCard = () => {
  const [activeTab, setActiveTab] = useState('login');

  const renderContent = () => {
      if (activeTab === 'login') {
          return <Login />;
      } else {
          return <Signup />;
      }
  };

  return (
      <div className="auth-card">
          <div className="tabs">
              <button
                  className={`tab ${activeTab === 'login' ? 'active' : ''}`}
                  onClick={() => setActiveTab('login')}
              >
                  Login
              </button>
              <button
                  className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
                  onClick={() => setActiveTab('signup')}
              >
                  Signup
              </button>
          </div>
          <div className="content">
              {renderContent()}
          </div>
      </div>
  );
};

export default AuthCard;
