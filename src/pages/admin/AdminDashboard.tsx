import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Home, TrendingUp, DollarSign, Eye, Plus } from 'lucide-react';
import { useProperties } from '../../contexts/PropertiesContext';

export default function AdminDashboard() {
  const { properties } = useProperties();

  const stats = {
    totalProperties: properties.length,
    totalUsers: 12, // Mock data
    totalViews: 1547, // Mock data
    totalRevenue: 125000 // Mock data
  };

  const recentProperties = properties.slice(-3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your real estate platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Home className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Properties</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalProperties}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Properties */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Properties</h3>
              <Link
                to="/admin/listings"
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentProperties.map((property) => (
                <div key={property.id} className="flex items-center space-x-4">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {property.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {property.location.city}, {property.location.state}
                    </p>
                  </div>
                  <div className="text-sm text-gray-900 font-medium">
                    ${property.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <Link
                to="/post-property"
                className="flex items-center p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors group"
              >
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <Plus className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Add New Property</p>
                  <p className="text-sm text-gray-500">List a new property for sale or rent</p>
                </div>
              </Link>

              <Link
                to="/admin/listings"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Home className="w-5 h-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Manage Listings</p>
                  <p className="text-sm text-gray-500">Edit, update, or remove property listings</p>
                </div>
              </Link>

              <Link
                to="/admin/users"
                className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
              >
                <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Manage Users</p>
                  <p className="text-sm text-gray-500">View and manage user accounts</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Chart Placeholder */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Property Views</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <TrendingUp className="w-4 h-4" />
            <span>Last 30 days</span>
          </div>
        </div>
        <div className="h-64 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Analytics chart would be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
}