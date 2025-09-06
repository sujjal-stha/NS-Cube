import React, { useState } from 'react';
import { TrendingUp, MessageSquare, Eye, Heart, BookOpen, Clock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

export default function FeedPage(){

    const { user } = useAuth();
    const { questions, notes, likeQuestion } = useData();
    const [activeTab, setActiveTab] = useState<'hot' | 'questions' | 'notes'>('hot');
    
    const facultyQuestions = questions.filter(q => q.faculty === user?.faculty);
  const facultyNotes = notes.filter(n => n.faculty === user?.faculty);

  const hotQuestions = facultyQuestions
    .sort((a, b) => (b.likes + b.views * 0.1) - (a.likes + a.views * 0.1))
    .slice(0, 5);
    
     const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

         if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
     };

     const getFacultyColor = (faculty: string) => {
    const colors = {
      Science: 'text-green-600 bg-green-50',
      Management: 'text-blue-600 bg-blue-50',
      Humanities: 'text-purple-600 bg-purple-50',
      Law: 'text-red-600 bg-red-50',
      Education: 'text-orange-600 bg-orange-50'
    };
    return colors[faculty as keyof typeof colors] || 'text-gray-600 bg-gray-50';
  };
  return (
         <div className="max-w-4xl mx-auto p-6">
            {}
             <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-2xl p-6 mb-8 text-white relative overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {user?.name}! 📖
        </h1>
        <p className="text-white/90">
          Stay updated with the latest discussions and resources in {user?.faculty}
        </p>
                <div className="flex items-center space-x-4 mt-4">
                     <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                            <span className="text-sm text-white/90">Class {user?.class}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-300 rounded-full animate-bounce"></div>
                            <span className="text-sm text-white/90">{user?.faculty} Faculty</span>
                            </div>
                    </div>
                    </div>
                </div>
                {}
                <div className="flex space-x-1 mb-6 bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 p-1 rounded-2xl shadow-lg">
                    <button
          onClick={() => setActiveTab('hot')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'hot'
              ? 'bg-white text-purple-600 shadow-lg'
              : 'text-gray-600 hover:text-purple-700 hover:bg-white/50'
          }`}
        >
            <TrendingUp className="h-4 w-4" />
          <span> Hot Questions</span>
          </button>
          <button
          onClick={() => setActiveTab('questions')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'questions'
              ? 'bg-white text-blue-600 shadow-lg'
              : 'text-gray-600 hover:text-blue-700 hover:bg-white/50'
          }`}
        >
            <MessageSquare className="h-4 w-4" />
          <span> Recent Q&A</span>
          </button>
                    </div>
            </div>

  )
}
