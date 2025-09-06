import { User, Edit, BookOpen, MessageSquare, Heart, Trophy, Calendar, Mail, GraduationCap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';

export default function ProfilePage(){
    const { user } = useAuth();
  const { getUserStats, questions, notes } = useData();

  const stats = getUserStats();
  const userQuestions = questions.filter(q => q.author.name === user?.name);
  const userNotes = notes.filter(n => n.author.name === user?.name);

   const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
  if (!user) return null;

  return (

    <div className="max-w-4xl mx-auto p-6">
        {}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
             <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <User className="h-10 w-10 text-white" />
                        </div>
                        <div>
                                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600 flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </p>
               <div className="flex items-center space-x-3 mt-2">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getFacultyColor(user.faculty)}`}>{user.faculty}</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600 flex items-center space-x-1">
                                         <GraduationCap className="h-3 w-3" />
                  <span>Class {user.class}</span>
                                        </span>
                </div>
                            </div>
                </div>
                          <div className="flex space-x-2">
                             <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
              type="button"
              onClick={() => { /* No function, just sample button */ }}
            >
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </button>
                            </div>
            </div>
             <div className="flex items-center space-x-2 mt-4 text-sm text-gray-500">
                     <Calendar className="h-4 w-4" />
          <span>Joined {formatDate(user.joinDate)}</span>
                </div>
        </div>
        {}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
              type="button"
              onClick={() => { /* No function, just sample button */ }}
            >
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </button>
            </div>
  );
}