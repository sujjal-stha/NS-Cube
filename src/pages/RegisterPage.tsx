import React, { useState } from 'react';
import { User, fileText, OpenBook, Search, FileText } from 'lucide-react';
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
    faculty: '' as typeof faculties[number] | ''
  });


}