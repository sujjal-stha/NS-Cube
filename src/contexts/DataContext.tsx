import React, { createContext, useContext, useState, useEffect ,ReactNode} from 'react';
import { useAuth } from './AuthContext';

export interface Question {
    id: string;
    title: string;
    content: string;
    author: {
        id: string;
        name: string;
        avatar? : string;
    };
    faculty: string;
    subject: string;
    class: string;
    createdAt: string;
    likes: number;
    views: number;
    answers: Answer[];
    liked?: boolean;
}
export interface Answer {
    id: string;
    content: string;
    author: {
        id: string;
        name: string;
        avatar? : string;
    };
    createdAt: string;
    likes: number;
    liked?: boolean;
}

export interface Notes {
    id: string;
    title: string;
    description: string;
    faculty: string;
    subject: string;
    class: string;
    fileUrl: string;
    filetype: 'pdf' | 'doc' | 'ppt' | 'other';
    author: {
        id: string;
        name: string;
        avatar? : string;
    };
    downloads: number;
    likes: number;
    createdAt: string;
    liked?: boolean;
    saved?: boolean;
}

export interface NewsArticle {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    imageurl: string;
    author: string;
    publishedAt: string;
    category: 'NEB updates' | 'Scholarships' | 'Entrance Exams' | 'General' | 'Events';
}

interface DataContextType {
    questions: Question[];
    notes: Notes[];
    news: NewsArticle[];
    addQuestions: (question: Omit<Questions, 'Likes' |'views' | 'createdAt'>) => void;
    addAnswer: (questionId: string, answer: Answer) => void;
    likeQuestion: (questionId: string) => void;
    likeAnswer: (questionId: string, answerId: string) => void;
    addNotes: (note: Notes) => void;
    likeNotes: (noteId: string) => void;
    saveNotes: (noteId: string) => void;
    getUserStats: () => { questions: number; notes: number; news: number };
}
export function DataProvider(){}
export default function DataContext(){}