 import React,{useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { Home , MessageSquare, BookOpen, FileText, Newspaper,  User, Menu, X,LogOut} from'lucide-react'
import {useAuth} from '../contexts/AuthContext';
import DNDButton from './DNDButton';

const navItems = [
  { path: '/feed', icon: Home, label: 'Feed' },
  { path: '/questions', icon: MessageSquare, label: 'Q&A' },
  { path: '/notes', icon: BookOpen, label: 'Notes' },
  { path: '/pyqs', icon: FileText, label: 'PYQs' },
  { path: '/news', icon: Newspaper, label: 'News' },
  { path: '/profile', icon: User, label: 'Profile' },
];

const facultyColors = {
  Science: 'text-green-600',
  Management: 'text-blue-600',
  Humanities: 'text-purple-600',
  Law: 'text-red-600',
  Education: 'text-orange-600'
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {}
          <div className="flex items-center">
             <Link
          to="/"
          className="flex items-center space-x-2 text-gray-800 hover:text-green-600">
          <img
            src="/logo.png"
            alt="StudyNet"
            className="h-12 w-12 mr-1"/>
          <span className="text-xl font-bold">StudyNet</span>
        </Link>

          </div>

          {}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 shadow-md'
                      : 'text-gray-600 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                  }`}>
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {}
          <div className="flex items-center space-x-4">
            {}
            <DNDButton />

            {
            user && (
              <div className="hidden md:flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className={`text-xs ${facultyColors[user.faculty] || 'text-gray-600'}`}>
                      Class {user.class} • {user.faculty}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition-all duration-300 transform hover:scale-110"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
              )
            }
            {}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-110"
            >
                {isMobileMenuOpen? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>
        </div>
    </div>
    {isMobileMenuOpen&& (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-200 shadow-lg overflow-hidden">
          <div className="px-4 py-3 space-y-1 max-h-screen overflow-y-auto">
            {}
            <DNDButton />
                {navItems.map((item)=> {
                    const Icon = item.icon;
                    const isActive= location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 shadow-md'
                      : 'text-gray-600 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                  }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                    </Link>
                    );
                })}
                {user && (
              <>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex items-center space-x-3 px-3 py-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className={`text-xs ${facultyColors[user.faculty] || 'text-gray-600'}`}>
                        Class {user.class} • {user.faculty}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );}