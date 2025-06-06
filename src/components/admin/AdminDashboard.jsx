import React, { useState } from 'react';
import { Calendar, Users, Settings, ClipboardList } from "lucide-react";
import ManageEvents from './ManageEvents';
import EventRegistrations from './EventRegistrations';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('events');

  const renderContent = () => {
    switch (activeTab) {
      case 'events':
        return <ManageEvents />;
      case 'registrations':
        return <EventRegistrations />;
      case 'users':
        return <div className="p-4">Users Management (Coming Soon)</div>;
      case 'settings':
        return <div className="p-4">Settings (Coming Soon)</div>;
      default:
        return <ManageEvents />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md min-h-screen p-4">
          <h1 className="text-2xl font-bold text-black mb-8">Admin Panel</h1>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('events')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === 'events'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Manage Events</span>
            </button>
            <button
              onClick={() => setActiveTab('registrations')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === 'registrations'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ClipboardList className="w-5 h-5" />
              <span>Event Registrations</span>
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === 'users'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Users</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === 'settings'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

