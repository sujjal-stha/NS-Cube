import React, { useState } from 'react';
import { BookOpen, Upload, Download, Heart, Search, Clock, User, Save ,Star} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';

export default function NotesPage(){
    const { user } = useAuth();
    const { notes, likeNote, saveNote } = useData();

    const [, setShowUploadModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterSubject, setFilterSubject] = useState('');
    const [filterClass, setFilterClass] = useState('');

    const notesList = Array.isArray(notes) ? notes : [];

    const filteredNotes = notesList.filter((n) => {
    const title = (n?.title ?? '').toLowerCase();
    const desc = (n?.description ?? '').toLowerCase();
    const subj = n?.subject ?? '';
    const cls = n?.['class'] ?? '';
    const fac = n?.faculty ?? '';

    const matchesFaculty = fac && fac === (user?.faculty ?? '');
    const matchesSearch = title.includes(searchTerm.toLowerCase()) || desc.includes(searchTerm.toLowerCase());
    const matchesSubject = !filterSubject || subj === filterSubject;
    const matchesClass = !filterClass || String(cls) === filterClass;

    return matchesFaculty && matchesSearch && matchesSubject && matchesClass;
  });

  const subjects = [
    ...new Set(
      notesList
        .filter((n) => (n?.faculty ?? '') === (user?.faculty ?? ''))
        .map((n) => n?.subject)
        .filter(Boolean)
    ),
  ];
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
  return (
     <div className="max-w-6xl mx-auto p-6">
        {}
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Study Notes</h1>
          <p className="text-gray-600">Share and access notes for {user?.faculty ?? 'your'} faculty</p>
                  </div>
                  <button
          onClick={() => setShowUploadModal(true)}
          className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
        >
          <Upload className="h-4 w-4" />
          <span>Upload Notes</span>
        </button>
            </div>
            {}
             <div className="flex flex-col lg:flex-row gap-4 mb-6">
               <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
                </div>
                <select
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Subjects</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
            <select
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Classes</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>
        
              </div>
              {}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.length > 0 ? (
                filteredNotes.map((notes)=>(
                   <div
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
               <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div>
                    <span>
                       {notes?.subject ?? 'General'}
                      </span>
                       <span className="ml-2 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      Class {notes?.['class'] ?? '—'}
                    </span>
                      </div>
                    </div>
                    <button
                  onClick={() => notes?.id && saveNote(notes.id)}
                  className={`p-1 rounded transition-colors ${
                    notes?.saved ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
                  }`}
                >
                  <Save className={`h-4 w-4 ${notes?.saved ? 'fill-current' : ''}`} />
                </button>
                </div>
                 <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{notes?.title ?? 'Untitled'}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{notes?.description ?? 'No description.'}</p>
               <div className="flex items-center space-x-1">
                  {renderStars(notes.rating)}
                  <span className="text-xs">({notes.rating})</span>
                </div>

               <div className="flex items-center space-x-2 mb-4 text-xs text-gray-500">
                     <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                  <span>{notes?.author?.name ?? 'Unknown'}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                      </div>
                </div>
                 <div className="flex items-center justify-between">
                     <div className="flex items-center space-x-4">
                      <button
                    onClick={() => notes?.id && likeNote(notes.id)}
                    className={`flex items-center space-x-1 transition-colors ${
                      notes?.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${notes?.liked ? 'fill-current' : ''}`} />
                    <span className="text-sm">{notes?.likes ?? 0}</span>
                  </button>
                   <div className="flex items-center space-x-1 text-gray-500">
                       <Download className="h-4 w-4" />
                    <span className="text-sm">{notes?.downloads ?? 0}</span>
                    </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"onClick={()=>window.open("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "_blank")}>
                  Download
                </button>
                  </div>
              </div>
                ))
                        ) : (
                          <div className="col-span-full text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
            <p className="text-gray-600">Be the first to upload notes for {user?.faculty ?? 'your'} faculty!</p>
          </div>
              )}
                </div>
        </div>
  );
}