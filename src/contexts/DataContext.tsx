import React, { createContext, useContext, useState, useEffect , ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface Question {
    id: string;
    title: string;
    content: string;
    author: {
        faculty: string;
        name: string;
        avatar? : string;
    };
    faculty: string;
    subject: string;
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
        faculty: string;
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
    fileType: 'pdf' | 'doc' | 'ppt' | 'other';
    author: {
        faculty: string;
        name: string;
        avatar? : string;
    };
    downloads: number;
    likes: number;
    createdAt: string;
    liked?: boolean;
    saved?: boolean;
    rating: number;
}

export interface NewsArticle {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    imageUrl: string;
    author: string;
    publishedAt: string;
    category: 'NEB updates' | 'Scholarships' | 'Entrance Exams' | 'General' | 'Events'| 'Other';
}

interface DataContextType {
    questions: Question[];
    notes: Notes[];
    news: NewsArticle[];
    addQuestion:(question: Omit<Question, 'likes' |'views' | 'createdAt' | 'id' | 'answers'>) => void;
    addAnswer: (questionId: string, answer:Omit<Answer, 'likes' | 'createdAt' | 'id'>) => void;
    likeQuestion: (questionId: string) => void;
    likeAnswer: (questionId: string, answerId: string) => void;
    addNote: (note: Omit<Notes, 'likes' | 'createdAt' | 'id' | 'downloads'>) => void;
    likeNote: (noteId: string) => void;
    saveNote: (noteId: string) => void;
    getUserStats: () => { questionsAsked: number; notesUploaded: number; totalLikes: number ; rank: number};
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const dndContext = useContext(React.createContext<any>(undefined));
  const [questions, setQuestions] = useState<Question[]>([]);
  const [notes, setNotes] = useState<Notes[]>([]);
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
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
        createdAt: '2025-09-15T10:30:00Z'
      }
    ],
    createdAt: '2025-09-20T09:15:00Z'
  },
  {
    id: '2',
    title: 'What is mitochondria and its function?',
    content: 'Can someone explain the role of mitochondria in cellular respiration and ATP production?',
    author: { name: 'Sita Thapa', faculty: 'Science' },
    faculty: 'Science',
    subject: 'Biology',
    likes: 22,
    views: 186,
    answers: [
      {
        id: '2',
        content: 'Mitochondria are the powerhouse of the cell. They produce ATP through cellular respiration by breaking down glucose in the presence of oxygen.',
        author: { name: 'Dr. Ramesh Koju', faculty: 'Science' },
        likes: 12,
        createdAt: '2025-09-15T10:30:00Z'
      },
      {
        id: '3',
        content: 'The process occurs in three stages: glycolysis, Krebs cycle, and electron transport chain.',
        author: { name: 'Maya Gurung', faculty: 'Science' },
        likes: 8,
        createdAt: '2025-09-12T16:45:00Z'
      }
    ],
    createdAt: '2025-03-12T10:15:00Z'
  },
  {
    id: '3',
    title: 'Explain Newton\'s laws of motion',
    content: 'What are the three laws of motion and how do they apply in real life?',
    author: { name: 'Arjun Basnet', faculty: 'Science' },
    faculty: 'Science',
    subject: 'Physics',
    likes: 18,
    views: 142,
    answers: [
      {
        id: '4',
        content: '1st law: Object at rest stays at rest. 2nd law: F=ma. 3rd law: Every action has equal and opposite reaction.',
        author: { name: 'Nisha Pradhan', faculty: 'Science' },
        likes: 10,
        createdAt: '2025-08-01T11:30:00Z'
      }
    ],
    createdAt: '2025-08-01T09:00:00Z'
  },
  {
    id: '4',
    title: 'What is photosynthesis equation?',
    content: 'I need the complete balanced chemical equation for photosynthesis with explanation.',
    author: { name: 'Ravi Shrestha', faculty: 'Science' },
    faculty: 'Science',
    subject: 'Chemistry',
    likes: 25,
    views: 201,
    answers: [
      {
        id: '5',
        content: '6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. Plants convert carbon dioxide and water into glucose using sunlight.',
        author: { name: 'Sunita Tamang', faculty: 'Science' },
        likes: 15,
        createdAt: '2025-08-15T10:30:00Z'
      }
    ],
    createdAt: '2025-02-20T11:45:00Z'
  },
  {
    id: '5',
    title: 'What is object-oriented programming?',
    content: 'Can someone explain OOP concepts like inheritance, polymorphism, and encapsulation?',
    author: { name: 'Bikash Karki', faculty: 'Science' },
    faculty: 'Science',
    subject: 'Computer Science',
    likes: 28,
    views: 234,
    answers: [
      {
        id: '6',
        content: 'OOP organizes code into objects and classes. Inheritance allows code reuse, polymorphism enables multiple forms, encapsulation hides data.',
        author: { name: 'Dr. Kiran Adhikari', faculty: 'Science' },
        likes: 16,
        createdAt: '2025-09-15T10:30:00Z'
      }
    ],
    createdAt: '2025-09-15T10:30:00Z'
  },
  {
    id: '6',
    title: 'How to solve quadratic equations?',
    content: 'What are different methods to solve ax² + bx + c = 0?',
    author: { name: 'Pooja Maharjan', faculty: 'Science' },
    faculty: 'Science',
    subject: 'Mathematics',
    likes: 19,
    views: 156,
    answers: [
      {
        id: '7',
        content: 'Methods include factoring, completing the square, and quadratic formula: x = (-b ± √(b²-4ac))/2a',
        author: { name: 'Suraj Pandey', faculty: 'Science' },
        likes: 11,
        createdAt: '2025-08-05T15:00:00Z'
      }
    ],
    createdAt: '2025-08-05T13:00:00Z'
  },
  {
    id: '7',
    title: 'What is electromagnetic induction?',
    content: 'How does Faraday\'s law work and what are its applications?',
    author: { name: 'Anita Poudel', faculty: 'Science' },
    faculty: 'Science',
    subject: 'Physics',
    likes: 21,
    views: 167,
    answers: [
      {
        id: '8',
        content: 'Changing magnetic field induces electric current. Used in generators, transformers, and induction motors.',
        author: { name: 'Deepak Lamsal', faculty: 'Science' },
        likes: 12,
        createdAt: '2025-09-19T18:10:00Z'
      }
    ],
    createdAt: '2025-07-19T16:10:00Z'
  },
  {
    id: '8',
    title: 'Define osmosis and diffusion',
    content: 'What\'s the difference between osmosis and diffusion in biology?',
    author: { name: 'Kabita Rai', faculty: 'Science' },
    faculty: 'Science',
    subject: 'Biology',
    likes: 16,
    views: 112,
    answers: [
      {
        id: '9',
        content: 'Osmosis is water movement across membranes. Diffusion is movement of any substance from high to low concentration.',
        author: { name: 'Rajan Bhatta', faculty: 'Science' },
        likes: 9,
        createdAt: '2025-07-22T14:00:00Z'
      }
    ],
    createdAt: '2025-07-22T12:00:00Z'
  },
  {
    id: '9',
    title: 'What are ionic and covalent bonds?',
    content: 'How do these chemical bonds form and what are their properties?',
    author: { name: 'Laxmi Neupane', faculty: 'Science' },
    faculty: 'Science',
    subject: 'Chemistry',
    likes: 23,
    views: 189,
    answers: [
      {
        id: '10',
        content: 'Ionic bonds form through electron transfer between metals and non-metals. Covalent bonds form through electron sharing between non-metals.',
        author: { name: 'Dr. Pradeep Joshi', faculty: 'Science' },
        likes: 14,
        createdAt: '2025-09-30T20:25:00Z'
      }
    ],
    createdAt: '2025-09-30T18:25:00Z'
  },
  {
    id: '10',
    title: 'What are algorithms and data structures?',
    content: 'How do we choose the right algorithm and data structure for a problem?',
    author: { name: 'Ganesh Magar', faculty: 'Science' },
    faculty: 'Science',
    subject: 'Computer Science',
    likes: 26,
    views: 212,
    answers: [
      {
        id: '11',
        content: 'Algorithms are step-by-step procedures. Data structures organize data efficiently. Choose based on time/space complexity requirements.',
        author: { name: 'Sushma Khatri', faculty: 'Science' },
        likes: 15,
        createdAt: '2025-9-05T17:40:00Z'
      }
    ],
    createdAt: '2025-9-05T15:40:00Z'
  },

 
  {
    id: '11',
    title: 'What is double-entry bookkeeping?',
    content: 'Can someone explain the principle and provide examples of double-entry accounting?',
    author: { name: 'Rajesh Acharya', faculty: 'Management' },
    faculty: 'Management',
    subject: 'Accountancy',
    likes: 24,
    views: 198,
    answers: [
      {
        id: '12',
        content: 'Every transaction affects at least two accounts. Debits must equal credits. Example: Cash purchase decreases cash and increases inventory.',
        author: { name: 'Dr. Meera Jha', faculty: 'Management' },
        likes: 15,
        createdAt: '2025-01-20T12:00:00Z'
      }
    ],
    createdAt: '2025-01-20T10:00:00Z'
  },
  {
    id: '12',
    title: 'What is supply and demand theory?',
    content: 'How do supply and demand curves determine market equilibrium and prices?',
    author: { name: 'Kritika Sharma', faculty: 'Management' },
    faculty: 'Management',
    subject: 'Economics',
    likes: 31,
    views: 267,
    answers: [
      {
        id: '13',
        content: 'Supply shows quantity producers offer at different prices. Demand shows quantity consumers want. Market equilibrium occurs where curves intersect.',
        author: { name: 'Amit Thakur', faculty: 'Management' },
        likes: 18,
        createdAt: '2025-02-11T11:30:00Z'
      }
    ],
    createdAt: '2025-02-11T09:30:00Z'
  },
  {
    id: '13',
    title: 'What is SWOT analysis?',
    content: 'How do we conduct SWOT analysis for strategic business planning?',
    author: { name: 'Prabin Khadka', faculty: 'Management' },
    faculty: 'Management',
    subject: 'Business Studies',
    likes: 29,
    views: 245,
    answers: [
      {
        id: '14',
        content: 'SWOT analyzes Strengths, Weaknesses, Opportunities, and Threats. It helps evaluate internal capabilities and external environment for strategic decisions.',
        author: { name: 'Sita Devi', faculty: 'Management' },
        likes: 17,
        createdAt: '2025-03-05T16:00:00Z'
      }
    ],
    createdAt: '2025-03-05T14:00:00Z'
  },
  {
    id: '14',
    title: 'What are the 4Ps of marketing mix?',
    content: 'Explain Product, Price, Place, and Promotion with real examples.',
    author: { name: 'Shreya Pandey', faculty: 'Management' },
    faculty: 'Management',
    subject: 'Marketing',
    likes: 33,
    views: 289,
    answers: [
      {
        id: '15',
        content: 'Product (what you sell), Price (cost strategy), Place (distribution channels), Promotion (advertising and communication methods).',
        author: { name: 'Binod Maharjan', faculty: 'Management' },
        likes: 19,
        createdAt: '2025-04-18T18:00:00Z'
      }
    ],
    createdAt: '2025-04-18T16:00:00Z'
  },
  {
    id: '15',
    title: 'What is time value of money?',
    content: 'How do we calculate present value and future value in finance?',
    author: { name: 'Nabin Shrestha', faculty: 'Management' },
    faculty: 'Management',
    subject: 'Finance',
    likes: 27,
    views: 221,
    answers: [
      {
        id: '16',
        content: 'Money today is worth more than same amount in future. Use formulas: FV = PV(1+r)^n for future value and PV = FV/(1+r)^n for present value.',
        author: { name: 'Kamala Dhakal', faculty: 'Management' },
        likes: 16,
        createdAt: '2025-05-22T13:10:00Z'
      }
    ],
    createdAt: '2025-05-22T11:10:00Z'
  },
  {
    id: '16',
    title: 'How to prepare financial statements?',
    content: 'What are the steps to create income statement and balance sheet?',
    author: { name: 'Ramesh Gurung', faculty: 'Management' },
    faculty: 'Management',
    subject: 'Accountancy',
    likes: 25,
    views: 203,
    answers: [
      {
        id: '17',
        content: 'Income statement shows revenues and expenses over a period. Balance sheet shows assets, liabilities, and equity at a specific date. Follow accounting principles.',
        author: { name: 'Lila Karki', faculty: 'Management' },
        likes: 14,
        createdAt: '2025-06-15T15:30:00Z'
      }
    ],
    createdAt: '2025-06-15T13:30:00Z'
  },
  {
    id: '17',
    title: 'What is GDP and its components?',
    content: 'How is Gross Domestic Product calculated and what does it measure?',
    author: { name: 'Dipesh Tamang', faculty: 'Management' },
    faculty: 'Management',
    subject: 'Economics',
    likes: 28,
    views: 234,
    answers: [
      {
        id: '18',
        content: 'GDP = C + I + G + (X-M) where C=consumption, I=investment, G=government spending, X=exports, M=imports. It measures total economic output.',
        author: { name: 'Dr. Sarita Upreti', faculty: 'Management' },
        likes: 16,
        createdAt: '2025-07-10T17:00:00Z'
      }
    ],
    createdAt: '2025-07-10T15:00:00Z'
  },
  {
    id: '18',
    title: 'What is entrepreneurship?',
    content: 'What are the key characteristics and challenges of being an entrepreneur?',
    author: { name: 'Krishna Bhattarai', faculty: 'Management' },
    faculty: 'Management',
    subject: 'Business Studies',
    likes: 30,
    views: 256,
    answers: [
      {
        id: '19',
        content: 'Entrepreneurship involves creating new businesses, taking calculated risks, and innovating. Key traits include creativity, persistence, and risk tolerance.',
        author: { name: 'Gita Subedi', faculty: 'Management' },
        likes: 18,
        createdAt: '2025-08-03T19:20:00Z'
      }
    ],
    createdAt: '2025-08-03T17:20:00Z'
  },
  {
    id: '19',
    title: 'Digital marketing vs traditional marketing',
    content: 'What are the advantages and cost differences between digital and traditional marketing?',
    author: { name: 'Suresh Regmi', faculty: 'Management' },
    faculty: 'Management',
    subject: 'Marketing',
    likes: 26,
    views: 218,
    answers: [
      {
        id: '20',
        content: 'Digital marketing offers better targeting, real-time analytics, and lower costs. Traditional marketing has broader reach but higher costs and less precise measurement.',
        author: { name: 'Muna Karmacharya', faculty: 'Management' },
        likes: 15,
        createdAt: '2025-09-14T14:40:00Z'
      }
    ],
    createdAt: '2025-09-14T12:40:00Z'
  },
  {
    id: '20',
    title: 'What is capital budgeting?',
    content: 'How do companies evaluate long-term investment projects using NPV and IRR?',
    author: { name: 'Ritu Manandhar', faculty: 'Management' },
    faculty: 'Management',
    subject: 'Finance',
    likes: 24,
    views: 195,
    answers: [
      {
        id: '21',
        content: 'Capital budgeting evaluates long-term investments. NPV calculates present value of cash flows. IRR finds discount rate that makes NPV zero. Accept if NPV > 0.',
        author: { name: 'Gopal Paudel', faculty: 'Management' },
        likes: 13,
        createdAt: '2025-10-28T11:50:00Z'
      }
    ],
    createdAt: '2025-10-28T09:50:00Z'
  },

  // Education Faculty (3 questions)
  {
    id: '21',
    title: 'What is student-centered learning?',
    content: 'How can teachers implement student-centered approaches effectively in diverse classrooms?',
    author: { name: 'Teacher Laxmi Bhusal', faculty: 'Education' },
    faculty: 'Education',
    subject: 'Teaching Methods',
    likes: 24,
    views: 198,
    answers: [
      {
        id: '22',
        content: 'Student-centered learning focuses on learners\' needs and interests. Use collaborative learning, project-based activities, and differentiated instruction methods.',
        author: { name: 'Dr. Narayan Poudel', faculty: 'Education' },
        likes: 15,
        createdAt: '2025-03-07T12:20:00Z'
      }
    ],
    createdAt: '2025-03-07T10:20:00Z'
  },
  {
    id: '22',
    title: 'How does motivation affect student learning?',
    content: 'What are intrinsic and extrinsic motivation and their impact on academic performance?',
    author: { name: 'Sangeeta Oli', faculty: 'Education' },
    faculty: 'Education',
    subject: 'Educational Psychology',
    likes: 26,
    views: 211,
    answers: [
      {
        id: '23',
        content: 'Intrinsic motivation comes from internal satisfaction. Extrinsic motivation comes from external rewards. Intrinsic motivation leads to deeper, long-lasting learning.',
        author: { name: 'Principal Khem Bahadur', faculty: 'Education' },
        likes: 16,
        createdAt: '2025-09-18T17:40:00Z'
      }
    ],
    createdAt: '2025-09-18T15:40:00Z'
  },
  {
    id: '23',
    title: 'What is inclusive education?',
    content: 'How can schools accommodate students with diverse learning needs and abilities?',
    author: { name: 'Kamala Subedi', faculty: 'Education' },
    faculty: 'Education',
    subject: 'Curriculum Development',
    likes: 22,
    views: 178,
    answers: [
      {
        id: '24',
        content: 'Inclusive education ensures all students, regardless of abilities, learn together. Use universal design, assistive technology, and individualized support strategies.',
        author: { name: 'Dr. Bishnu Sharma', faculty: 'Education' },
        likes: 14,
        createdAt: '2025-05-12T14:30:00Z'
      }
    ],
    createdAt: '2025-05-12T12:30:00Z'
  },

  {
    id: '24',
    title: 'What is social stratification?',
    content: 'How does social class system affect individual opportunities and social mobility?',
    author: { name: 'Saraswati Dahal', faculty: 'Humanities' },
    faculty: 'Humanities',
    subject: 'Sociology',
    likes: 22,
    views: 178,
    answers: [
      {
        id: '25',
        content: 'Social stratification is hierarchical arrangement based on wealth, power, and prestige. It affects access to education, healthcare, and economic opportunities.',
        author: { name: 'Prof. Shyam Acharya', faculty: 'Humanities' },
        likes: 14,
        createdAt: '2025-04-25T15:00:00Z'
      }
    ],
    createdAt: '2025-04-25T13:00:00Z'
  },
  {
    id: '25',
    title: 'What is cognitive behavioral therapy?',
    content: 'How does CBT work in treating depression and anxiety disorders?',
    author: { name: 'Indira Shakya', faculty: 'Humanities' },
    faculty: 'Humanities',
    subject: 'Psychology',
    likes: 25,
    views: 203,
    answers: [
      {
        id: '26',
        content: 'CBT focuses on changing negative thought patterns and behaviors. It helps patients identify distorted thinking and develop healthier coping strategies.',
        author: { name: 'Dr. Madhav Belbase', faculty: 'Humanities' },
        likes: 16,
        createdAt: '2025-08-12T19:30:00Z'
      }
    ],
    createdAt: '2025-08-12T17:30:00Z'
  },
  {
    id: '26',
    title: 'What caused World War I?',
    content: 'What were the main political and economic factors that led to the Great War?',
    author: { name: 'Urmila Khadka', faculty: 'Humanities' },
    faculty: 'Humanities',
    subject: 'History',
    likes: 21,
    views: 167,
    answers: [
      {
        id: '27',
        content: 'Main causes include militarism, alliances, imperialism, and nationalism. The assassination of Archduke Franz Ferdinand triggered the war.',
        author: { name: 'Dr. Rajesh Hamal', faculty: 'Humanities' },
        likes: 13,
        createdAt: '2025-07-14T18:30:00Z'
      }
    ],
    createdAt: '2025-07-14T16:30:00Z'
  },

  // Law Faculty (3 questions)
  {
    id: '27',
    title: 'What is the principle of natural justice?',
    content: 'What are the key elements of natural justice in legal proceedings?',
    author: { name: 'Advocate Bishnu Sapkota', faculty: 'Law' },
    faculty: 'Law',
    subject: 'Constitutional Law',
    likes: 19,
    views: 145,
    answers: [
      {
        id: '28',
        content: 'Natural justice includes: 1) Right to be heard (audi alteram partem), 2) No bias rule (nemo judex in causa sua). Ensures fairness in judicial proceedings.',
        author: { name: 'Judge Rama Khadka', faculty: 'Law' },
        likes: 12,
        createdAt: '2025-02-14T13:00:00Z'
      }
    ],
    createdAt: '2025-02-14T11:00:00Z'
  },
  {
    id: '28',
    title: 'What is burden of proof in criminal law?',
    content: 'Who has the responsibility to prove guilt in criminal cases and what is the standard?',
    author: { name: 'Prakash Bhandari', faculty: 'Law' },
    faculty: 'Law',
    subject: 'Criminal Law',
    likes: 16,
    views: 126,
    answers: [
      {
        id: '29',
        content: 'Prosecution must prove guilt "beyond reasonable doubt." Accused is presumed innocent. Burden shifts only in specific statutory exceptions.',
        author: { name: 'Advocate Sunita Ghimire', faculty: 'Law' },
        likes: 10,
        createdAt: '2025-06-21T16:30:00Z'
      }
    ],
    createdAt: '2025-06-21T14:30:00Z'
  },
  {
    id: '29',
    title: 'What is contract formation in civil law?',
    content: 'What are the essential elements required for a valid contract?',
    author: { name: 'Lawyer Deepak Thapa', faculty: 'Law' },
    faculty: 'Law',
    subject: 'Civil Law',
    likes: 18,
    views: 134,
    answers: [
      {
        id: '30',
        content: 'Essential elements: offer, acceptance, consideration, legal capacity, lawful object, and free consent. All must be present for valid contract formation.',
        author: { name: 'Senior Advocate Prabha Devi', faculty: 'Law' },
        likes: 11,
        createdAt: '2025-11-03T15:45:00Z'
      }
    ],
    createdAt: '2025-11-03T13:45:00Z'
  }
];
    const sampleNotes: Notes[] = [
  {
    id: '1',
    title: 'Simple Harmonic Motion Notes',
    description: 'Complete notes on SHM including equations, graphs, and real-world applications',
    faculty: 'Science',
    subject: 'Physics',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Science',
      name: 'Sujjal Shrestha'
    },
    downloads: 230,
    likes: 345,
    createdAt: '2025-01-15T13:45:00Z',
    rating: 3.5
  },
  {
    id: '2',
    title: 'Calculus Derivatives and Integration',
    description: 'Step-by-step solutions for differentiation and integration problems',
    faculty: 'Science',
    subject: 'Mathematics',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Science',
      name: 'Priya Sharma'
    },
    downloads: 189,
    likes: 267,
    createdAt: '2025-02-10T09:30:00Z',
    rating: 4.5
  },
  {
    id: '3',
    title: 'Cell Biology and Genetics',
    description: 'Comprehensive notes on cell structure, DNA, RNA, and inheritance patterns',
    faculty: 'Science',
    subject: 'Biology',
    class: '11',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Science',
      name: 'Dr. Ramesh Koju'
    },
    downloads: 156,
    likes: 198,
    createdAt: '2025-03-05T14:20:00Z',
    rating: 1.5
  },
  {
    id: '4',
    title: 'Organic Chemistry Reactions',
    description: 'Important organic reactions with mechanisms and examples',
    faculty: 'Science',
    subject: 'Chemistry',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Science',
      name: 'Sunita Tamang'
    },
    downloads: 203,
    likes: 289,
    createdAt: '2025-04-12T11:15:00Z',
    rating: 5
  },
  {
    id: '5',
    title: 'Data Structures and Algorithms',
    description: 'Complete guide to arrays, linked lists, trees, and sorting algorithms',
    faculty: 'Science',
    subject: 'Computer Science',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Science',
      name: 'Dr. Kiran Adhikari'
    },
    downloads: 278,
    likes: 367,
    createdAt: '2025-05-18T16:40:00Z',
    rating: 3.3
  },
  {
    id: '6',
    title: 'Trigonometry and Complex Numbers',
    description: 'Trigonometric identities, equations, and complex number operations',
    faculty: 'Science',
    subject: 'Mathematics',
    class: '11',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Science',
      name: 'Suraj Pandey'
    },
    downloads: 145,
    likes: 212,
    createdAt: '2025-06-22T10:25:00Z',
    rating: 4.5
  },
  {
    id: '7',
    title: 'Electromagnetic Waves and Optics',
    description: 'Wave properties, interference, diffraction, and optical instruments',
    faculty: 'Science',
    subject: 'Physics',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Science',
      name: 'Deepak Lamsal'
    },
    downloads: 167,
    likes: 234,
    createdAt: '2025-07-08T13:50:00Z',
    rating: 4
  },
  {
    id: '8',
    title: 'Photosynthesis and Respiration',
    description: 'Detailed study of plant metabolism and energy conversion processes',
    faculty: 'Science',
    subject: 'Biology',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Science',
      name: 'Rajan Bhatta'
    },
    downloads: 134,
    likes: 187,
    createdAt: '2025-08-14T15:35:00Z',
    rating: 3
  },
  {
    id: '9',
    title: 'Chemical Bonding and Molecular Structure',
    description: 'Ionic, covalent, and metallic bonding with VSEPR theory',
    faculty: 'Science',
    subject: 'Chemistry',
    class: '11',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Science',
      name: 'Dr. Pradeep Joshi'
    },
    downloads: 198,
    likes: 256,
    createdAt: '2025-09-20T12:10:00Z',
    rating: 2.5
  },
  {
    id: '10',
    title: 'Object-Oriented Programming in C++',
    description: 'Classes, objects, inheritance, polymorphism with practical examples',
    faculty: 'Science',
    subject: 'Computer Science',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Science',
      name: 'Sushma Khatri'
    },
    downloads: 245,
    likes: 312,
    createdAt: '2025-10-15T17:20:00Z',
    rating: 1.9
  },

  {
    id: '11',
    title: 'Financial Accounting Fundamentals',
    description: 'Double-entry bookkeeping, journal entries, and financial statements preparation',
    faculty: 'Management',
    subject: 'Accountancy',
    class: '11',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Management',
      name: 'Dr. Meera Jha'
    },
    downloads: 278,
    likes: 345,
    createdAt: '2025-01-25T11:30:00Z',
    rating: 5
  },
  {
    id: '12',
    title: 'Microeconomics: Supply and Demand',
    description: 'Market equilibrium, elasticity, consumer behavior, and producer theory',
    faculty: 'Management',
    subject: 'Economics',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Management',
      name: 'Amit Thakur'
    },
    downloads: 234,
    likes: 298,
    createdAt: '2025-02-18T14:45:00Z',
    rating: 3.4
  },
  {
    id: '13',
    title: 'Strategic Management and SWOT Analysis',
    description: 'Business strategy formulation, competitive analysis, and strategic planning',
    faculty: 'Management',
    subject: 'Business Studies',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Management',
      name: 'Sita Devi'
    },
    downloads: 189,
    likes: 267,
    createdAt: '2025-03-22T16:15:00Z',
    rating: 5
  },
  {
    id: '14',
    title: 'Marketing Mix and Consumer Behavior',
    description: '4Ps of marketing, market segmentation, and consumer psychology',
    faculty: 'Management',
    subject: 'Marketing',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Management',
      name: 'Binod Maharjan'
    },
    downloads: 156,
    likes: 234,
    createdAt: '2025-04-28T09:40:00Z',
    rating: 3
  },
  {
    id: '15',
    title: 'Financial Management and Time Value of Money',
    description: 'Present value, future value, NPV, IRR, and capital budgeting techniques',
    faculty: 'Management',
    subject: 'Finance',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Management',
      name: 'Kamala Dhakal'
    },
    downloads: 203,
    likes: 278,
    createdAt: '2025-05-30T13:25:00Z',
    rating: 2
  },
  {
    id: '16',
    title: 'Cost Accounting and Management Accounting',
    description: 'Cost classification, budgeting, variance analysis, and performance measurement',
    faculty: 'Management',
    subject: 'Accountancy',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Management',
      name: 'Lila Karki'
    },
    downloads: 167,
    likes: 198,
    createdAt: '2025-06-25T15:50:00Z',
    rating: 1
  },
  {
    id: '17',
    title: 'Macroeconomics: GDP and Economic Indicators',
    description: 'National income accounting, inflation, unemployment, and fiscal policy',
    faculty: 'Management',
    subject: 'Economics',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Management',
      name: 'Dr. Sarita Upreti'
    },
    downloads: 145,
    likes: 212,
    createdAt: '2025-07-20T12:35:00Z',
    rating: 4.6
  },
  {
    id: '18',
    title: 'Entrepreneurship and Business Planning',
    description: 'Business plan development, startup strategies, and risk management',
    faculty: 'Management',
    subject: 'Business Studies',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Management',
      name: 'Gita Subedi'
    },
    downloads: 178,
    likes: 245,
    createdAt: '2025-09-16T10:20:00Z',
    rating: 3.5
  },
  {
    id: '19',
    title: 'Digital Marketing Strategies',
    description: 'Social media marketing, SEO, content marketing, and online advertising',
    faculty: 'Management',
    subject: 'Marketing',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Management',
      name: 'Muna Karmacharya'
    },
    downloads: 234,
    likes: 289,
    createdAt: '2025-09-12T17:45:00Z',
    rating: 3.7
  },
  {
    id: '20',
    title: 'Investment Analysis and Portfolio Management',
    description: 'Risk-return analysis, portfolio theory, and investment evaluation methods',
    faculty: 'Management',
    subject: 'Finance',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Management',
      name: 'Gopal Paudel'
    },
    downloads: 198,
    likes: 267,
    createdAt: '2025-09-08T14:30:00Z',
    rating: 1.5
  },
  {
    id: '21',
    title: 'Student-Centered Learning Approaches',
    description: 'Active learning strategies, collaborative learning, and project-based methods',
    faculty: 'Education',
    subject: 'Teaching Methods',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Education',
      name: 'Dr. Narayan Poudel'
    },
    downloads: 156,
    likes: 234,
    createdAt: '2025-09-15T11:20:00Z',
    rating: 0
  },
  {
    id: '22',
    title: 'Educational Psychology and Motivation',
    description: 'Learning theories, motivation strategies, and classroom management techniques',
    faculty: 'Education',
    subject: 'Educational Psychology',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Education',
      name: 'Principal Khem Bahadur'
    },
    downloads: 178,
    likes: 198,
    createdAt: '2025-09-20T14:35:00Z',
    rating: 4.6
  },
  {
    id: '23',
    title: 'Inclusive Education and Special Needs',
    description: 'Universal design for learning, assistive technologies, and accommodation strategies',
    faculty: 'Education',
    subject: 'Curriculum Development',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Education',
      name: 'Dr. Bishnu Sharma'
    },
    downloads: 134,
    likes: 167,
    createdAt: '2025-09-10T16:45:00Z',
    rating: 2
  },
  {
    id: '24',
    title: 'Assessment and Evaluation Methods',
    description: 'Formative vs summative assessment, rubric development, and feedback strategies',
    faculty: 'Education',
    subject: 'Teaching Methods',
    class: '11',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Education',
      name: 'Teacher Laxmi Bhusal'
    },
    downloads: 145,
    likes: 189,
    createdAt: '2025-09-25T13:10:00Z',
    rating: 4.0
  },
  {
    id: '25',
    title: 'Technology Integration in Teaching',
    description: 'Digital tools for education, online learning platforms, and multimedia resources',
    faculty: 'Education',
    subject: 'Pedagogy',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Education',
      name: 'Sangeeta Oli'
    },
    downloads: 167,
    likes: 212,
    createdAt: '2025-09-30T15:25:00Z',
    rating: 3.7
  },
  {
    id: '26',
    title: 'Social Stratification and Inequality',
    description: 'Class systems, social mobility, and inequality in modern society',
    faculty: 'Humanities',
    subject: 'Sociology',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Humanities',
      name: 'Prof. Shyam Acharya'
    },
    downloads: 189,
    likes: 245,
    createdAt: '2025-09-18T12:40:00Z',
    rating: 4.5
  },
  {
    id: '27',
    title: 'Cognitive Behavioral Therapy Techniques',
    description: 'CBT principles, therapeutic interventions, and case study applications',
    faculty: 'Humanities',
    subject: 'Psychology',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Humanities',
      name: 'Dr. Madhav Belbase'
    },
    downloads: 156,
    likes: 198,
    createdAt: '2025-09-12T14:55:00Z',
    rating: 5
  },
  {
    id: '28',
    title: 'World War I: Causes and Consequences',
    description: 'Political factors, military strategies, and long-term impacts of WWI',
    faculty: 'Humanities',
    subject: 'History',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Humanities',
      name: 'Dr. Rajesh Hamal'
    },
    downloads: 134,
    likes: 167,
    createdAt: '2025-09-28T16:20:00Z',
    rating: 1.6
  },
  {
    id: '29',
    title: 'Climate Change and Environmental Geography',
    description: 'Global warming causes, effects, and mitigation strategies',
    faculty: 'Humanities',
    subject: 'Geography',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Humanities',
      name: 'Prof. Ganga Devi'
    },
    downloads: 178,
    likes: 223,
    createdAt: '2025-09-20T11:30:00Z',
    rating: 4
  },
  {
    id: '30',
    title: 'Democratic Governance and Political Systems',
    description: 'Democracy principles, electoral systems, and comparative government structures',
    faculty: 'Humanities',
    subject: 'Political Science',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Humanities',
      name: 'Dr. Ramesh Dhungana'
    },
    downloads: 145,
    likes: 189,
    createdAt: '2025-09-15T13:45:00Z',
    rating: 3
  },
  {
    id: '31',
    title: 'Constitutional Law and Natural Justice',
    description: 'Fundamental rights, constitutional interpretation, and judicial review principles',
    faculty: 'Law',
    subject: 'Constitutional Law',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Law',
      name: 'Judge Rama Khadka'
    },
    downloads: 167,
    likes: 234,
    createdAt: '2025-09-28T10:15:00Z',
    rating: 0
  },
  {
    id: '32',
    title: 'Criminal Law and Burden of Proof',
    description: 'Criminal procedure, evidence law, and prosecution standards',
    faculty: 'Law',
    subject: 'Criminal Law',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Law',
      name: 'Advocate Sunita Ghimire'
    },
    downloads: 145,
    likes: 198,
    createdAt: '2025-09-22T15:30:00Z',
    rating: 5
  },
  {
    id: '33',
    title: 'Contract Law and Formation',
    description: 'Contract elements, validity requirements, and breach remedies',
    faculty: 'Law',
    subject: 'Civil Law',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Law',
      name: 'Senior Advocate Prabha Devi'
    },
    downloads: 134,
    likes: 176,
    createdAt: '2025-09-18T12:20:00Z',
    rating: 3
  },
  {
    id: '34',
    title: 'Legal Research and Writing',
    description: 'Legal citation methods, case analysis, and brief writing techniques',
    faculty: 'Law',
    subject: 'Legal Studies',
    class: '11',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Law',
      name: 'Advocate Bishnu Sapkota'
    },
    downloads: 123,
    likes: 156,
    createdAt: '2025-09-10T14:40:00Z',
    rating: 4
  },
  {
    id: '35',
    title: 'Human Rights and International Law',
    description: 'Universal human rights principles, international treaties, and enforcement mechanisms',
    faculty: 'Law',
    subject: 'Constitutional Law',
    class: '12',
    fileUrl: '#',
    fileType: 'pdf',
    author: {
      faculty: 'Law',
      name: 'Lawyer Deepak Thapa'
    },
    downloads: 156,
    likes: 201,
    createdAt: '2025-09-25T16:55:00Z',
    rating: 3
  }
];
    const sampleNews: NewsArticle[] = [
  {
    id: '1',
    title: 'IOE CEE 2025 Application Opens - Registration Starts January 15',
    content: 'The Institute of Engineering (IOE) has announced that the Common Entrance Examination (CEE) 2025 applications will open from January 15, 2025. Students who have completed their +2 or equivalent can apply for undergraduate engineering programs. The examination is scheduled for April 2025.',
    excerpt: 'IOE CEE 2025 registration begins January 15 for engineering aspirants.',
    imageUrl: '',
    author: 'IOE Administration',
    publishedAt: '2025-01-10T09:00:00Z',
    category: 'Entrance Exams'
  },
  {
    id: '2',
    title: 'NEB Grade 12 Results 2024 Published - Check Your Results Online',
    content: 'The National Examinations Board (NEB) has published the Grade 12 examination results for 2024. Students can check their results online using their symbol number and date of birth on the official NEB website. The overall pass percentage this year is 68.34%.',
    excerpt: 'NEB Grade 12 results 2024 announced with 68.34% pass rate.',
    imageUrl: '',
    author: 'NEB Official',
    publishedAt: '2024-12-20T10:30:00Z',
    category: 'NEB updates'
  },
  {
    id: '3',
    title: 'Prime Minister Scholarship 2025 - Applications Open for Undergraduate Studies',
    content: 'The Government of Nepal has announced the Prime Minister Employment Program Scholarship for 2025. Eligible students from marginalized communities can apply for full scholarships covering tuition fees, accommodation, and stipends for undergraduate programs in engineering, medicine, and other fields.',
    excerpt: 'PM Scholarship 2025 applications open for marginalized communities.',
    imageUrl: '',
    author: 'Scholarship Department',
    publishedAt: '2025-01-05T08:00:00Z',
    category: 'Scholarships'
  },
  {
    id: '4',
    title: 'IOE Entrance Exam Pattern Changed - New Syllabus for CEE 2025',
    content: 'The Institute of Engineering has updated the entrance examination pattern for CEE 2025. The new format includes 120 multiple-choice questions covering Physics (40), Chemistry (30), Mathematics (40), and English (10). The examination duration remains 3 hours.',
    excerpt: 'IOE CEE 2025 introduces new exam pattern with updated syllabus.',
    imageUrl: '',
    author: 'IOE Examination Board',
    publishedAt: '2024-12-15T14:00:00Z',
    category: 'Entrance Exams'
  },
  {
    id: '5',
    title: 'Medical College Admission Test (MCAT) 2025 Schedule Released',
    content: 'The Medical Education Commission has released the schedule for MCAT 2025. The entrance examination for MBBS and BDS programs will be held on March 30, 2025. Online registration starts from February 1 and closes on February 28, 2025.',
    excerpt: 'MCAT 2025 scheduled for March 30, registration begins February 1.',
    imageUrl: '',
    author: 'Medical Education Commission',
    publishedAt: '2025-01-08T11:15:00Z',
    category: 'Entrance Exams'
  },
  {
    id: '6',
    title: 'Digital Nepal Education Summit 2025 - Transforming Learning',
    content: 'The Ministry of Education is organizing the Digital Nepal Education Summit 2025 in Kathmandu from February 15-17. The summit will focus on integrating technology in education, online learning platforms, and preparing students for the digital age.',
    excerpt: 'Digital Education Summit 2025 to be held in Kathmandu this February.',
    imageUrl: '',
    author: 'Ministry of Education',
    publishedAt: '2025-01-12T16:30:00Z',
    category: 'Events'
  },
  {
    id: '7',
    title: 'NEB Announces Class 11 Admission Guidelines for 2025',
    content: 'The National Examinations Board has published new admission guidelines for Class 11 enrollment in 2025. Students must secure a minimum GPA of 2.0 in SEE to be eligible for Science stream, while Management and Humanities require a GPA of 1.6.',
    excerpt: 'New Class 11 admission guidelines released by NEB for 2025.',
    imageUrl: '',
    author: 'NEB Administration',
    publishedAt: '2024-12-28T13:20:00Z',
    category: 'NEB updates'
  },
  {
    id: '8',
    title: 'Study Abroad Fair 2025 - Opportunities in Australia and Canada',
    content: 'The International Education Consultancy Association is organizing a Study Abroad Fair from January 20-22, 2025, at Bhrikutimandap. Representatives from Australian and Canadian universities will provide information about undergraduate and graduate programs.',
    excerpt: 'Study Abroad Fair 2025 showcases opportunities in Australia and Canada.',
    imageUrl: '',
    author: 'Education Consultancy Association',
    publishedAt: '2025-01-06T15:45:00Z',
    category: 'Other'
  },
  {
    id: '9',
    title: 'Tips for Effective Exam Preparation - Expert Advice for Students',
    content: 'Education experts share valuable tips for effective exam preparation including time management, study techniques, stress management, and maintaining a healthy lifestyle during exam periods. These strategies can help students achieve better results.',
    excerpt: 'Expert tips for effective exam preparation and stress management.',
    imageUrl: '',
    author: 'Education Expert Panel',
    publishedAt: '2024-12-25T12:00:00Z',
    category: 'General'
  },
  {
    id: '10',
    title: 'IOE Introduces New Engineering Programs - AI and Data Science',
    content: 'The Institute of Engineering has announced two new undergraduate programs starting from 2025: Bachelor in Artificial Intelligence and Bachelor in Data Science. These programs aim to meet the growing demand for tech professionals in Nepal and internationally.',
    excerpt: 'IOE launches new AI and Data Science programs for 2025 intake.',
    imageUrl: '',
    author: 'IOE Academic Council',
    publishedAt: '2025-01-03T10:00:00Z',
    category: 'NEB updates'
  }
];
    setQuestions(sampleQuestions);
    setNotes(sampleNotes);
    setNews(sampleNews);
  };

  const addQuestion = (questionData: Omit<Question, 'id' | 'likes' | 'views' | 'answers' | 'createdAt'>) => {
    const newQuestion: Question = {
      ...questionData,
      id: Date.now().toString(),
      likes: 0,
      views: 0,
      answers: [],
      createdAt: new Date().toISOString()
    };
    setQuestions(prev => [newQuestion, ...prev]);
  };

  const addAnswer = (questionId: string, answerData: Omit<Answer, 'id' | 'likes' | 'createdAt'>) => {
    const newAnswer: Answer = {
      ...answerData,
      id: Date.now().toString(),
      likes: 0,
      createdAt: new Date().toISOString()
    };

     setQuestions(prev => prev.map(q =>
      q.id === questionId
        ? { ...q, answers: [...q.answers, newAnswer] }
        : q
    ));
  };

    const likeQuestion = (questionId: string) => {
    setQuestions(prev => prev.map(q =>
      q.id === questionId
        ? { ...q, likes: q.liked ? q.likes - 1 : q.likes + 1, liked: !q.liked }
        : q
    ));
  };

   const likeAnswer = (questionId: string, answerId: string) => {
    setQuestions(prev => prev.map(q =>
      q.id === questionId
        ? {
            ...q,
            answers: q.answers.map(a =>
              a.id === answerId
                ? { ...a, likes: a.liked ? a.likes - 1 : a.likes + 1, liked: !a.liked }
                : a
            )
          }
        : q
    ));
  };

  const addNote = (noteData: Omit<Notes, 'id' | 'likes' | 'downloads' | 'createdAt'>) => {
    const newNote: Notes = {
      ...noteData,
      id: Date.now().toString(),
      likes: 0,
      downloads: 0,
      createdAt: new Date().toISOString()
    };
    setNotes(prev => [newNote, ...prev]);

    // Show notification if DND context is available
    if (dndContext?.showNotification) {
      dndContext.showNotification('Note uploaded successfully! 📚', 'success');
    }
  };

  const likeNote = (noteId: string) => {
    setNotes(prev => prev.map(n =>
      n.id === noteId
        ? { ...n, likes: n.liked ? n.likes - 1 : n.likes + 1, liked: !n.liked }
        : n
    ));
  };

  const saveNote = (noteId: string) => {
    setNotes(prev => prev.map(n =>
      n.id === noteId
        ? { ...n, saved: !n.saved }
        : n
    ));
  };

  const getUserStats = () => {
    if (!user) return { questionsAsked: 0, notesUploaded: 0, totalLikes: 0, rank: 0 };

    const userQuestions = questions.filter(q => q.author.name === user.name);
    const userNotes = notes.filter(n => n.author.name === user.name);
    const totalLikes = userQuestions.reduce((acc, q) => acc + q.likes, 0) + userNotes.reduce((acc, n) => acc + n.likes, 0);

    return {
      questionsAsked: userQuestions.length,
      notesUploaded: userNotes.length,
      totalLikes,
      rank: 1 // Simplified ranking
    };
  };

  return (
    <DataContext.Provider value={{
      questions,
      notes,
      news,
      addQuestion,
      addAnswer,
      likeQuestion,
      likeAnswer,
      addNote,
      likeNote,
      saveNote,
      getUserStats
    }}>
      {children}
    </DataContext.Provider>
  );
}

  export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}