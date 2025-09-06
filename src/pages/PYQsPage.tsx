import React { useState } from 'react';
import { user} from ' lucide-react' ;
import {useAuth } from '../contexts/AuthContext';  

interface PYqs ={
  id: String;
  title: string;
  calss: string;
  Subject: string;
  faculty: String;
  type: ' Board exam' | ' important question' | 'Model question';
 year :string;
 fileUrl: string;
 filetype: ' pdf'| ' doc';
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
    
  };
  const PYQs: PYqs[] = [
    {
        id: '1',
        title: 'Physics PYQ 2023',
        calss: '12',
        Subject: 'Physics',
        faculty: 'science',
        type: 'Board exam',
        year: '2023',
        fileUrl: 'https://example.com/physics-pyq-2023.pdf',
        filetype: 'pdf',
        download: 'Download',
        createdAt: Date.now(),
        rating: 4.5

    },
   {
        id: '2',
        title: 'Chemistry PYQ 2022',
        calss: '12',
        Subject: 'Chemistry',
        year: '2023',
        fileUrl: 'https://example.com/physics-pyq-2023.pdf',
        filetype: 'pdf',
        download: 'Download',
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
        fileUrl: 'https://example.com/physics-pyq-2023.pdf',
        filetype: 'pdf',
        download: 'Download',
        createdAt: Date.now(),
        rating: 4.5,
        
    },
    {
        id: '4',
        title: 'Biology PYQ 2020',
        class: ' 12',
        Subject: 'Biology', 
        faculty: 'science',
        type : 'BOard exam',
        year: '2023',
        fileUrl: 'https://example.com/physics-pyq-2023.pdf',
        filetype: 'pdf',
        download: 'Download',
        createdAt: Date.now(),
        rating: 4.5,
    },
    {
        id: '5',
        title: 'English PYQ 2019',
        Class: '12',
        subject: 'English',
        faculty: 'All',
        type: 'Board exam', ``
        year: '2023',
        fileUrl: 'https://example.com/physics-pyq-2023.pdf',
        filetype: 'pdf',
        download: 'Download',
        createdAt: Date.now(),
        rating: 4.5,
    },
    {
      id: '6',
      tile: 'Accountancy PYQ 2018',
      class: '12',
      subject: 'Accountancy',
      faculty: 'mnagement';
      type: 'Board exam',
        year: '2023',
        fileUrl: 'https://example.com/physics-pyq-2023.pdf',
        filetype: 'pdf',
        download: 'Download',
        createdAt: Date.now(),
        rating: 4.5,
    },
    {
        id : '7',
        tite: ' Business Studies PYQ 2017',
        class: ' 11',
        subject: 'Business Studies',
        faculty: 'Management',
        type: 'Board exam',
        year: '2023',
        fileUrl: 'https://example.com/physics-pyq-2023.pdf',
        filetype: 'pdf',
        download: 'Download',
        createdAt: Date.now(),
        rating: 4.5,


    };

  ];

  const filteredPYQs = pyqs.filter(pyq => {
    const matchesFaculty = pyq.faculty === user?.faculty;
    const matchesSearch = pyq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pyq.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = !filterSubject || pyq.subject === filterSubject;    //filtering ??? confusing xa
    const matchesYear = !filterYear || pyq.year === filterYear;
    const matchesType = !filterType || pyq.type === filterType;
    return matchesFaculty && matchesSearch && matchesSubject && matchesYear && matchesType;
  });

  const subjects = [...new Set(pyqs.filter(p => p.faculty === user?.faculty).map(p => p.subject))];
  const years = [...new Set(pyqs.map(p => p.year))].sort((a, b) => parseInt(b) - parseInt(a));
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
    <div className='



 


  