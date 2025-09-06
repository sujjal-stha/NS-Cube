import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FeedPage from './pages/FeedPage';
import QuestionsPage from './pages/QuestionsPage';
import NotesPage from './pages/NotesPage';
import PYQsPage from './pages/PYQsPage';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/Layout';

import { AuthProvider,useAuth } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';

export function AppRoutes() {
  const { user,loading } = useAuth();
    if(loading){
        return (
        <div className="flex items-center justify-center min-h-screen">
           <p className="text-gray-600">Loading...</p>
        </div>
        )
    }


}


export function App() {  return (
    <AuthProvider>
      <DataProvider>
        
