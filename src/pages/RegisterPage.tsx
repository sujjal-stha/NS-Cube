import React, { useState } from 'react';
import { User, FileText, OpenBook, Search, } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const faculties = ['Science', 'Management', 'Education', 'Humanities', 'Law'] as const;
const class = [ '11', '12'] as const;

   
export default function RegisterPage(){
      const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    class: '' as '11' | '12' | '',
    faculty: '' as typeof faculties[number] | '', 
  });
const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register } = useAuth();
  const navigate = useNavigate();

  const emailIsValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); //Email vallidation hoina?
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setError(null);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;
    const cls = formData.class;
    const faculty = formData.faculty;

    if (!name || !email || !password || !confirmPassword || !cls || !faculty) {
      setError('Please fill in all fields.');
      return;
    }

    if (!emailIsValid(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);

    try {
      const created = await register({
        name,
        email,
        password,
        class: cls as '11' | '12',
        faculty: faculty as typeof faculties[number]
      });

      if (created) {
        navigate('/feed');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err: any) {
      const msg = err?.message || String(err);
      if (msg.includes('auth/email-already-in-use')) {
        setError('Email already in use. Try logging in or use another email.');
      } else if (msg.includes('auth/invalid-email')) {
        setError('Invalid email address.');
      } else if (msg.includes('auth/weak-password')) {
        setError('Password is too weak. Choose at least 6 characters.');
      } else {
        setError(msg || 'Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };
 return (

 )
}