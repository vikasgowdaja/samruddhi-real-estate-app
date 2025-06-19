import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PropertiesProvider } from './contexts/PropertiesContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import PropertyList from './pages/properties/PropertyList';
import PropertyDetail from './pages/properties/PropertyDetail';
import PostProperty from './pages/properties/PostProperty';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageListings from './pages/admin/ManageListings';
import ManageUsers from './pages/admin/ManageUsers';
import Profile from './pages/Profile';

function App() {
  return (
    <AuthProvider>
      <PropertiesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            <Route path="/properties" element={
              <ProtectedRoute>
                <Layout>
                  <PropertyList />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/properties/:id" element={
              <ProtectedRoute>
                <Layout>
                  <PropertyDetail />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/post-property" element={
              <ProtectedRoute>
                <Layout>
                  <PostProperty />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/profile" element={
              <ProtectedRoute>
                <Layout>
                  <Profile />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/admin" element={
              <ProtectedRoute adminOnly>
                <Layout>
                  <AdminDashboard />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/admin/listings" element={
              <ProtectedRoute adminOnly>
                <Layout>
                  <ManageListings />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/admin/users" element={
              <ProtectedRoute adminOnly>
                <Layout>
                  <ManageUsers />
                </Layout>
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </PropertiesProvider>
    </AuthProvider>
  );
}

export default App;