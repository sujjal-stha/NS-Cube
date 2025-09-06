import {React,useState} from 'react';
import {Link, useLocation,useNavigate} from 'react-router-dom'
import { Home , MessageSquare, BookOpen, FileText, Newspaper,  User, Menu, X,LogOut} from'lucide-react'
import {useAuth} from "../contexts/AuthContext";
import DNDButton from './DNDButton';

const navItems = [
  { path: '/feed', icon: Home, label: 'Feed' },
  { path: '/questions', icon: MessageSquare, label: 'Q&A' },
  { path: '/notes', icon: BookOpen, label: 'Notes' },
  { path: '/pyqs', icon: FileText, label: 'PYQs' },
  { path: '/news', icon: Newspaper, label: 'News' },
  { path: '/profile', icon: User, label: 'Profile'},
];

const facultyColors = 
{
  Science: 'text-green-600',
  Management: 'text-blue-600',
  Humanities: 'text-purple-600',
  Law: 'text-red-600',
  Education: 'text-orange-600'
};

export default function Navbar(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    Navigate('/')
  };
  return(
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {}
          <div className="flex items-center">
            <Link
                to="/"
          className="flex items-center space-x-2 text-gray-800 hover:text-green-600">
                
        
        </nav>
  )
}