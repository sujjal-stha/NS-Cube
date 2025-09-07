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
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setError(null);
    setFormData(prev => ({ ...prev, [field]: value }));
  };
const handleSubmit = async (e: React.FormEvent) => {   
  e.preventDefault();
  if (!fromData.name || !fromData.email  || !fromData.password ||  !fromData.confirmpassword || !fromData.class || !fromData.faculty) {
    setError('Please fill in all fields.');
    return;
  } 

  }

}