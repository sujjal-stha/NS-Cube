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
                    </div>
                </div>
            </div>

  )
}
