import { Link } from 'react-router-dom';
import { Users, FileText, ArrowRight, BookOpen ,BotMessageSquare  } from 'lucide-react';

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

      {}
      <section className="pt-12 sm:pt-20 pb-8 sm:pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-4">
                <span className="text-2xl">🎓</span>
                <span className="text-purple-700 font-medium">Unifying your learning experience.</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-responsive">
              Your Gateway to
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent block animate-pulse">Academic Success</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed px-4 text-responsive">
              Join Nepal's premier educational platform designed specifically for NEB students.
              Connect, learn, and excel with your peers in Class 11 & 12. ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                to="/register"
                className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:from-purple-600 hover:via-blue-600 hover:to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span className="text-xl"></span>
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="border-2 border-purple-300 hover:border-purple-500 text-gray-700 hover:text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and resources tailored for NEB curriculum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

            {}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All NEB Faculties Supported
            </h2>
            <p className="text-xl text-gray-600">
              Tailored content and communities for every stream
            </p>
          </div>

         <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: 'Science', color: 'from-green-400 to-green-600', subjects: 'Physics, Chemistry, Biology, Math', emoji: '🔬' },
              { name: 'Management', color: 'from-blue-400 to-blue-600', subjects: 'Accountancy, Economics, Business', emoji: '💼' },
              { name: 'Humanities', color: 'from-purple-400 to-purple-600', subjects: 'Sociology, Psychology, History', emoji: '📖' },
              { name: 'Law', color: 'from-red-400 to-red-600', subjects: 'Legal Studies, Constitutional Law', emoji: '⚖️' },
              { name: 'Education', color: 'from-orange-400 to-orange-600', subjects: 'Teaching Methods, Pedagogy', emoji: '👨‍🏫' }
            ].map((faculty, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${faculty.color} rounded-2xl flex items-center justify-center mb-4 transform transition-transform duration-300`}>
                  <span className="text-2xl">{faculty.emoji}</span>
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                  {faculty.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {faculty.subjects}
                </p>
              </div>
            ))}
          </div>        </div>
      </section>

      {}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Studies?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of NEB students who are already succeeding with StudyNet
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-flex items-center space-x-2"
          >
            <span>Start Learning Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
             <BookOpen></BookOpen> <span className="text-xl font-bold">StudyNet</span>
            </div>
            <div className="text-gray-400">
            <p>NS-Cube Team Members :</p>
            <p>1. Samir Lamsal</p>
            <p>2. Sujjal Shrestha</p>
            <p>3. Sakshyam Ghimire</p>
            <p>4. Neeraj Thapa</p>
            </div>
            <div className="text-gray-400">
              <p>&copy; 2025 NS-CUBE.</p>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}