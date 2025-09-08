import React, { useState } from 'react';
import { FileText, Download, Search, Clock, Eye, Star, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';  


interface Pyq{
  id: string;
  title: string;
  class: string;
subject: any;
  faculty: any;   
type: 'Board Exam' | 'Important Questions' | 'Model Question';
 year :string;
 fileUrl: string;
filetype: 'pdf' | ' doc';
 download: number; 
createdAt: string;
rating: number;
};
  export default function PYQspage(){
    const { user } = useAuth();
    const [ filtersubject, setFilterSubject] = useState('');
    const [ filterYear, setFilterYear] = useState('');
    const [ filterType, setFilterType] = useState('');
    const [ filterClass, setFilterClass] = useState('');
      const [ searchTerm, setSearchTerm] = useState('');
  
      const PYQs: Pyq[] = [
    // Science (7)
    {
        id: '1',
        title: 'Mathematics PYQ 2024',
        class: '12',
        subject: 'Mathematics',
        faculty: 'Science',
        type: 'Board Exam',
        year: '2024',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 612,
        createdAt: '2025-09-07',
        rating: 4.5,
    },
    {
        id: '2',
        title: 'Physics PYQ 2023',
        class: '12',
        subject: 'Physics',
        faculty: 'Science',
        type: 'Board Exam',
        year: '2023',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 587,
        createdAt: '2025-09-06',
        rating: 4.4,
    },
    {
        id: '3',
        title: 'Chemistry PYQ 2022',
        class: '12',
        subject: 'Chemistry',
        faculty: 'Science',
        type: 'Board Exam',
        year: '2022',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 498,
        createdAt: '2025-09-05',
        rating: 4.3,
    },
    {
        id: '4',
        title: 'Biology Important Questions 2021',
        class: '12',
        subject: 'Biology',
        faculty: 'Science',
        type: 'Important Questions',
        year: '2021',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 430,
        createdAt: '2025-09-04',
        rating: 4.2,
    },
    {
        id: '5',
        title: 'Computer Science Model Paper 2024',
        class: '12',
        subject: 'Computer Science',
        faculty: 'Science',
        type: 'Model Question',
        year: '2024',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 355,
        createdAt: '2025-09-03',
        rating: 4.6,
    },
    {
        id: '6',
        title: 'Mathematics Important Questions 2023',
        class: '11',
        subject: 'Mathematics',
        faculty: 'Science',
        type: 'Important Questions',
        year: '2023',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 298,
        createdAt: '2025-09-02',
        rating: 4.0,
    },
    {
        id: '7',
        title: 'Physics Model Paper 2022',
        class: '11',
        subject: 'Physics',
        faculty: 'Science',
        type: 'Model Question',
        year: '2022',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 275,
        createdAt: '2025-09-01',
        rating: 3.9,
    },

    // Management (7)
    {
        id: '8',
        title: 'Accountancy PYQ 2024',
        class: '12',
        subject: 'Accountancy',
        faculty: 'Management',
        type: 'Board Exam',
        year: '2024',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 701,
        createdAt: '2025-09-07',
        rating: 4.7,
    },
    {
        id: '9',
        title: 'Economics PYQ 2023',
        class: '12',
        subject: 'Economics',
        faculty: 'Management',
        type: 'Board Exam',
        year: '2023',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 612,
        createdAt: '2025-09-06',
        rating: 4.4,
    },
    {
        id: '10',
        title: 'Business Studies Important Questions 2022',
        class: '11',
        subject: 'Business Studies',
        faculty: 'Management',
        type: 'Important Questions',
        year: '2022',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 430,
        createdAt: '2025-09-05',
        rating: 4.1,
    },
    {
        id: '11',
        title: 'Marketing Model Questions 2024',
        class: '12',
        subject: 'Marketing',
        faculty: 'Management',
        type: 'Model Question',
        year: '2024',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 365,
        createdAt: '2025-09-04',
        rating: 4.0,
    },
    {
        id: '12',
        title: 'Finance PYQ 2023',
        class: '12',
        subject: 'Finance',
        faculty: 'Management',
        type: 'Board Exam',
        year: '2023',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 412,
        createdAt: '2025-09-03',
        rating: 4.2,
    },
    {
        id: '13',
        title: 'Accountancy Important Questions 2021',
        class: '11',
        subject: 'Accountancy',
        faculty: 'Management',
        type: 'Important Questions',
        year: '2021',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 289,
        createdAt: '2025-09-02',
        rating: 3.8,
    },
    {
        id: '14',
        title: 'Economics Model Paper 2022',
        class: '11',
        subject: 'Economics',
        faculty: 'Management',
        type: 'Model Question',
        year: '2022',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 310,
        createdAt: '2025-09-01',
        rating: 3.9,
    },

    // Humanities (3)
    {
        id: '15',
        title: 'History PYQ 2024',
        class: '12',
        subject: 'History',
        faculty: 'Humanities',
        type: 'Board Exam',
        year: '2024',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 378,
        createdAt: '2025-09-06',
        rating: 4.3,
    },
    {
        id: '16',
        title: 'Geography Important Questions 2023',
        class: '12',
        subject: 'Geography',
        faculty: 'Humanities',
        type: 'Important Questions',
        year: '2023',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 242,
        createdAt: '2025-09-04',
        rating: 4.0,
    },
    {
        id: '17',
        title: 'Sociology Model Paper 2022',
        class: '11',
        subject: 'Sociology',
        faculty: 'Humanities',
        type: 'Model Question',
        year: '2022',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 198,
        createdAt: '2025-09-02',
        rating: 3.7,
    },

    // Law (3)
    {
        id: '18',
        title: 'Constitutional Law PYQ 2023',
        class: '12',
        subject: 'Constitutional Law',
        faculty: 'Law',
        type: 'Board Exam',
        year: '2023',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 290,
        createdAt: '2025-09-05',
        rating: 4.1,
    },
    {
        id: '19',
        title: 'Criminal Law Important Questions 2022',
        class: '12',
        subject: 'Criminal Law',
        faculty: 'Law',
        type: 'Important Questions',
        year: '2022',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 215,
        createdAt: '2025-09-03',
        rating: 3.9,
    },
    {
        id: '20',
        title: 'Civil Law Model Questions 2021',
        class: '11',
        subject: 'Civil Law',
        faculty: 'Law',
        type: 'Model Question',
        year: '2021',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 160,
        createdAt: '2025-09-01',
        rating: 3.6,
    },

    // Education (3)
    {
        id: '21',
        title: 'Teaching Methods PYQ 2024',
        class: '12',
        subject: 'Teaching Methods',
        faculty: 'Education',
        type: 'Board Exam',
        year: '2024',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 198,
        createdAt: '2025-09-06',
        rating: 4.0,
    },
    {
        id: '22',
        title: 'Educational Psychology Important Questions 2023',
        class: '12',
        subject: 'Educational Psychology',
        faculty: 'Education',
        type: 'Important Questions',
        year: '2023',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 142,
        createdAt: '2025-09-04',
        rating: 3.8,
    },
    {
        id: '23',
        title: 'Curriculum Development Model Paper 2022',
        class: '11',
        subject: 'Curriculum Development',
        faculty: 'Education',
        type: 'Model Question',
        year: '2022',
        fileUrl: 'https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link',
        filetype: 'pdf',
        download: 125,
        createdAt: '2025-09-02',
        rating: 3.7,
    },
];
  const filteredPYQs = PYQs.filter(pyq => {
    const matchesFaculty = pyq.faculty === user?.faculty;
    const matchesSearch = pyq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pyq.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = !filtersubject || pyq.subject === filtersubject;    //filtering 
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
        <p className="text-gray-600">Access previous year questions and Important Questions for {user?.faculty} faculty</p>
      </div>
      {}
<div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search PYQs and Important Questions..."
  value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
    
     <select
          value={filtersubject}
          onChange={(e) => setFilterSubject(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Subjects</option>
          {subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
            ))}
        </select>
        <select
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
          </select>
         <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Types</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      {}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{filteredPYQs.length}</div>
          <div className="text-sm text-gray-600">Available Papers</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{subjects.length}</div>        
          <div className="text-sm text-gray-600">Subjects Covered</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">{years.length}</div>
          <div className="text-sm text-gray-600">Years Available</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">
            {filteredPYQs.reduce((acc, Pyq) => acc + Pyq.download, 0)}
          </div>
          <div className="text-sm text-gray-600">Total Downloads</div>
        </div>
      </div>
{}
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPYQs.length > 0 ? (
          filteredPYQs.map((pyq) => (
            <div key={pyq.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFacultyColor(pyq.faculty)}`}>
                      {pyq.subject}
                    </span>
                    <span className="ml-2 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      Class {pyq.class}
                    </span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(pyq.type)}`}>
                  {pyq.type}
                </span>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{pyq.title}</h3>

              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <span className="font-medium">Year: {pyq.year}</span>
                <div className="flex items-center space-x-1">
                  {renderStars(pyq.rating)}
                  <span className="text-xs">({pyq.rating})</span>
                </div>
              </div>
          

              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Download className="h-3 w-3" />
                  <span>{pyq.download} downloads</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{formatTimeAgo(pyq.createdAt)}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center space-x-1">
                  <Download className="h-3 w-3" />
                  <button onClick={()=>window.open("https://drive.google.com/file/d/1IEPh9b-pEkkrXClceD-Tqvptf5G8uyce/view?usp=drive_link", "_blank")}>Download</button>
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                  <Eye className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))
        ): (
          <div className="col-span-full text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No PYQs found</h3>
            <p className="text-gray-600">No past year questions available for the selected criteria.</p>
          </div>
        )}
      </div>

      {}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Most Downloaded This Month</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPYQs
            .sort((a, b) => b.download - a.download)
            .slice(0, 3)
            .map((pyq, index) => (
              <div key={pyq.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    #{index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">{pyq.title}</h4>
                    <p className="text-xs text-gray-600">{pyq.download} downloads</p>
                  </div>
                </div>
                 
              </div> 
            
            ))}
        </div>
</div>
</div>
  )
  };
