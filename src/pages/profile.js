// src/pages/AccountSettings.js
import React from 'react';

const AccountSettings = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Account Settings</h2>
      <form className="space-y-4 max-w-lg mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile</h3>
        <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-md" />
        <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-md" />
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Password</h3>
        <input type="password" placeholder="Current Password" className="w-full px-4 py-2 border rounded-md" />
        <input type="password" placeholder="New Password" className="w-full px-4 py-2 border rounded-md" />
        
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md mt-4">Update Settings</button>
      </form>
    </div>
  );
};

export default AccountSettings;