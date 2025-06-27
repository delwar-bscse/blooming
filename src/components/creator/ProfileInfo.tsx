"use client"

import { User, Mail, Phone, MapPin, Calendar, Shield } from 'lucide-react';
import { myFetch } from '@/utils/myFetch';
import { useEffect, useState } from 'react';

type UserData = {
  _id: string;
  profile: string;
  fullName: string;
  email: string;
  role: string;
  phone: string;
  isActive: boolean;
  isDeleted: boolean;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const ProfileInfo = () => {

  const [userData, setUserData] = useState<Partial<UserData>>({});
  // Sample data from your backend
  const userData2= {
    "_id": "685e12b2aff4a5828e935678",
    "profile": "/uploads/profile/default-user.jpg",
    "fullName": "hggkjg",
    "email": "cayox28621@asimarif.com",
    "role": "user",
    "phone": "",
    "isActive": true,
    "isDeleted": false,
    "address": "",
    "createdAt": "2025-06-27T03:40:34.444Z",
    "updatedAt": "2025-06-27T05:30:29.546Z",
    "__v": 0
  };

  useEffect(() => {
    async function getUserData() {
      const response = await myFetch("/users/my-profile", {
        method: "GET",
      });
      console.log("User Data:", response);
      setUserData(response?.data); 
    }
    getUserData();
  }, []);


  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white border-2 border-gray-400 rounded-lg overflow-hidden mt-8 shadow-lg">
      {/* Header with profile image */}
      <div className="relative bg-gray-600 text-white p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-black" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{userData?.fullName}</h2>
            <div className="flex items-center space-x-2 mt-1">
              <Shield className="w-4 h-4" />
              <span className="text-sm capitalize">{userData?.role}</span>
              <div className={`w-2 h-2 rounded-full ${userData?.isActive ? 'bg-green-400' : 'bg-red-400'}`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="p-6 space-y-4">
        {/* Contact Information */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-black" />
            <span className="text-gray-700">{userData?.email}</span>
          </div>

          {userData?.phone && (
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-black" />
              <span className="text-gray-700">{userData?.phone}</span>
            </div>
          )}

          {userData?.address && (
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-black" />
              <span className="text-gray-700">{userData?.address}</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Account Details */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Status</span>
            <span className={`px-2 py-1 rounded text-xs font-medium ${userData?.isActive
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
              {userData?.isActive ? 'Active' : 'Inactive'}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Member Since</span>
            <span className="text-sm text-gray-700">{formatDate(userData?.createdAt)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Last Updated</span>
            <span className="text-sm text-gray-700">{formatDate(userData?.updatedAt)}</span>
          </div>
        </div>
      </div>

      {/* Footer with ID */}
      <div className="bg-gray-50 px-6 py-3 border-t">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">User ID</span>
          <span className="text-xs font-mono text-gray-700">{userData?._id?.slice(-8)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;