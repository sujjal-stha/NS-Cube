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
    addQuestions:(question: Omit<Question, 'likes' |'views' | 'createdAt' | 'id' | 'answers'>) => void;
    addAnswer: (questionId: string, answer:Omit<Answer, 'likes' | 'createdAt' | 'id'>) => void;
    likeQuestion: (questionId: string) => void;
    likeAnswer: (questionId: string, answerId: string) => void;
    addNotes: (note: Omit<Notes, 'likes' | 'createdAt' | 'id' | 'downloads'>) => void;
    likeNotes: (noteId: string) => void;
    saveNotes: (noteId: string) => void;
    getUserStats: () => { questionsAsked: number; notesUploaded: number; totalLikes: number ; rank: number};
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const dndContext = useContext(React.createContext<any>(undefined));
  const [questions, setQuestions] = useState<Question[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    // Load initial data
    loadInitialData();
  }, []);


  const loadInitialData = () => {
     const sampleQuestions: Question[] = [
        {
        id: '1',
        title: 'What is the derivative of x²?',
        content: 'I need help understanding how to find the derivative of x squared. Can someone explain the process step by step?',
        author: { name: 'Priya Sharma', faculty: 'Science' },
        faculty: 'Science',
        subject: 'Mathematics',
        likes: 15,
        views: 123,
        answers: [
          {
            id: '1',
            content: 'The derivative of x² is 2x. Using the power rule: d/dx(x^n) = n*x^(n-1), so d/dx(x²) = 2*x^(2-1) = 2x',
            author: { name: 'Raj Kumar', faculty: 'Science' },
            likes: 8,
            createdAt: '2024-01-20T10:30:00Z'
          }
        ],
        createdAt: '2025-01-20T09:15:00Z'
      },
      
     ]
  }
}







