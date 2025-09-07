import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

export interface User {
  id: string;
  name: string;
  email: string;
  class: '11' | '12';
  faculty: 'Science' | 'Management' | 'Humanities' | 'Law' | 'Education';
  avatar?: string;
  points: number;
  joinDate: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<User | null>;
  register: (userData: Omit<User, 'id' | 'points' | 'joinDate'> & { password: string }) => Promise<User>;
  logout: () => Promise<void>;
  loading: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const buildUserFromDoc = (id: string, data: any): User => {
    return {
      id,
      name: data.name || '',
      email: data.email || '',
      class: data.class,
      faculty: data.faculty,
      avatar: data.avatar || '',
      points: typeof data.points === 'number' ? data.points : 0,
      joinDate: data.joinDate || new Date().toISOString()
    };
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser: FirebaseUser | null) => {
      if (fbUser) {
        try {
          const uid = fbUser.uid;
          const userDocRef = doc(db, 'users', uid);
          const userSnap = await getDoc(userDocRef);
          if (userSnap.exists()) {
            const u = buildUserFromDoc(uid, userSnap.data());
            setUser(u);
          } else {
            // If there is no profile doc, create a basic 
            const fallback: User = {
              id: uid,
              name: fbUser.displayName || '',
              email: fbUser.email || '',
              class: '11',
              faculty: 'Science',
              avatar: fbUser.photoURL || '',
              points: 0,
              joinDate: new Date().toISOString()
            };
            await setDoc(userDocRef, fallback);
            setUser(fallback);
          }
        } catch (err) {

          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();}, []);

    const register = async (userData: Omit<User, 'id' | 'points' | 'joinDate'> & { password: string }): Promise<User> => {
        
    const cred = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    const uid = cred.user.uid;
    const profile = {
      id: uid,
      name: userData.name,
      email: userData.email,
      class: userData.class,
      faculty: userData.faculty,
      avatar: userData.avatar || '',
      points: 0,
      joinDate: new Date().toISOString()
    };
    await setDoc(doc(db, 'users', uid), profile);
    setUser(profile);
    return profile;
  };

  const login = async (email: string, password: string): Promise<User | null> => {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const uid = cred.user.uid;
    const userDocRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userDocRef);
    if (!userSnap.exists()) {
      const fallback: User = {
        id: uid,
        name: cred.user.displayName || '',
        email: cred.user.email || email,
        class: '11',
        faculty: 'Science',
        avatar: cred.user.photoURL || '',
        points: 0,
        joinDate: new Date().toISOString()
      };
      await setDoc(userDocRef, fallback);
      setUser(fallback);
      return fallback;
    } else {
      const u = buildUserFromDoc(uid, userSnap.data());
      setUser(u);
      return u;
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}