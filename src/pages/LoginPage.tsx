import React, { useState } from 'React';
import { Link,useNavigate } from 'react-router-dom';
import {BookOpen , mail , lock ,Eye,EyeOff,ArrowLeft } from 'lucid-react';
import {useAuth} from "../contxts/AuthContext";

export default function LoginPage() {
const [ email,setemail] = useState('');
const [password,setPassword] = useState('');
const [showPassword,setShowPassword] = useState('false');
const [isLoading,setIsLoading] = useState('false');
const [error,setError]= useState('');

const { login } = useAuth();
const navigate = useNavigate();

const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading('true');

    try {
      const user = await login(email.trim(), password);
      if (user) {
        navigate('/feed');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err: any) {
      const msg = err?.message || String(err);
      if (msg.includes('auth/wrong-password')) {
        setError('Incorrect password. Try again or reset your password.');
      } else if (msg.includes('auth/user-not-found')) {
        setError('No account found with this email. Please register.');
      } else if (msg.includes('auth/invalid-email')) {
        setError('Invalid email address.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className = "absoulte inset 0-overflow  "
  )
  
}
