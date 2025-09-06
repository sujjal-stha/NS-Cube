import React, { useState } from 'react';
import { FileText, Download, Search, Clock, Eye, Star, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';  


interface Pyq{
  id: String;
  title: string;
  calss: string;
subject: any;
  faculty: any;   
type: ' Board exam' | ' important question' | 'Model question';
 year :string;
 fileUrl: string;
filetype: ' pdf' | ' doc';
 download: string; 
createdAt: number;
rating: number;
};
  export default function pyqpage(){
    const { user } = useAuth();
    const [ filtersubject, setFilterSubject] = useState('');
    const [ filterYear, setFilterYear] = useState('');
    const [ filterType, setFilterType] = useState('');
    const [ filterClass, setFilterClass] = useState('');
      const [ searchTerm, setSearchTerm] = useState('');
  
      const PYQs: Pyq[] = [
    {
        id: '1',
        title: 'Physics PYQ 2023',
        calss: '12',
        subject: 'Physics',
        faculty: 'science',
        year: '2023',
        fileUrl: '',
        filetype: 'pdf',
        download: '587',
        createdAt: Date.now(),
        rating: 4.5

    },
   {
        id: '2',
        title: 'Chemistry PYQ 2022',
        calss: '12',
        Subject: 'Chemistry',
        year: '2023',
        fileUrl: '',
        filetype: 'pdf',
        download: '393',
        createdAt: Date.now(),
        rating: 4.5

    },
    {
        id: '3',
        title: 'Mathematics PYQ 2021',
        calss: '12',
        Subject: 'Mathematics',
        faculty: 'science',                        ///download garna skane file.
        type: 'Board exam',
        year: '2023',
        fileUrl: '',
        filetype: 'pdf',
        download: '280',
        createdAt: Date.now(),
        rating: 4.5,
        
    },
    {
        id: '4',
        title: 'Biology PYQ 2020',
        class: ' 12',
        Subject: 'Biology', 
        faculty: 'science',
        type: 'BOard exam',
        year: '2023',
        fileUrl: '',
        filetype: 'pdf',
        download: '250',
        createdAt: Date.now(),
        rating: 4.5,
    },
 {
   id: '5',
   title: 'mathmatics pyq',
   calss: '12',
   subject: 'mathematics',
   faculty: 'science',
   type: ' Board exam',
   year: '',
   fileUrl: '',
   filetype: ' pdf',
   download: '',
   createdAt: 0,
   rating: 4.5,
 },
 {
  id: '6',
  title: ' mathmatics pyq',
  calss: '12',
  subject: 'mathematics', 
  faculty: 'science',
  type: ' Board exam',
  year: '2024',
  fileUrl: '',
  filetype: ' pdf',
  download: ' 400'
  createdAt: 0,
  rating: 4.5,
 },

  ];

  const filteredPYQs = PYQs.filter(pyq => {
    const matchesFaculty = pyq.faculty === user?.faculty;
    const matchesSearch = pyq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pyq.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = !filtersubject || pyq.subject === filtersubject;    //filtering ??? confusing xa
    const matchesYear = !filterYear || pyq.year === filterYear;
    const matchesType = !filterType || pyq.type === filterType;
    return matchesFaculty && matchesSearch && matchesSubject && matchesYear && matchesType;
  });

  const subjects = [...new Set(PYQs.filter(p => p.faculty === user?.faculty).map(p => p.subject))];
  const years = [...new Set(PYQs.map(p => p.year))].sort((a, b) => parseInt(b) - parseInt(a));
  const types = ['Board Exam', 'Model Question', 'Important Questions'];

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

  const getTypeColor = (type: string) => {
    const colors = {
      'Board Exam': 'text-red-600 bg-red-50',
      'Model Question': 'text-blue-600 bg-blue-50',
      'Important Questions': 'text-orange-600 bg-orange-50'
    };
    return colors[type as keyof typeof colors] || 'text-gray-600 bg-gray-50';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };
  return(
    <div className="max-w-6xl mx-auto p-6">
      {}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Past Year Questions & Important Questions</h1>
        <p className="text-gray-600">Access previous year questions and important questions for {user?.faculty} faculty</p>
      </div>
      {}
      <div className='min-h-'>


      </div>



        </div>




  )
  };

  