import { Link } from 'react-router-dom';
import { Users, Trophy, FileText, ArrowRight, BookOpen ,BotMessageSquare  } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Interactive Learning',
    description: 'Access notes, ask questions, and learn from your peers in your faculty'
  },
  {
    icon: Users,
    title: 'Faculty-Based Community',
    description: 'Connect with students from your specific faculty and class'
  },
  {
    icon: BotMessageSquare ,
     title: 'NS-AI',
    description: 'Educational AI ChatBot , especially designed to provide results according to NEB syllabus'
  },
  {
    icon: FileText,
    title: 'Past Year Questions',
    description: 'Access comprehensive PYQs and important questions for exam prep'
  }
];

const stats = [
  { label: 'Active Students', value: '2,500+' },
  { label: 'Study Materials', value: '1,200+' },
  { label: 'Questions Answered', value: '5,800+' },
  { label: 'Success Rate', value: '94%' }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 relative overflow-hidden">
      {}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>

        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {}
      <nav className="bg-white/90 backdrop-blur-md border-b border-purple-200 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {}
              <img
                src="/logo.png"
                alt="StudyNet"
                className="h-12 w-12 sm:h-12 sm:w-12 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                StudyNet
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
       <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mb-8">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-4">
          <span className="text-2xl">🎓</span>
								<span className="text-purple-700 font-medium">
									Nepal's #1 Educational Platform
								</span>
          </div>
          </div>
        </div>
        </div>
        </section>

</div>
)
}