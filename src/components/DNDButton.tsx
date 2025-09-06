import React, {useState} from 'react';
import {Bell,BellOff } from 'lucide-react';
export default function DNDButton() 
{
  const [isOn, setIsOn] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setIsOn((prev) => !prev);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  return (
    <div className="relative inline-block">
      <button
        className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shadow-sm hover:bg-blue-200 transition-all duration-200"
        onClick={handleClick}
        type="button">
        {isOn ? <BellOff className="h-4 w-4" /> : <Bell className="h-4 w-4" />}
      </button>
      {showPopup && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-blue-100 rounded text-blue-900 text-xs font-medium z-10 whitespace-nowrap">
          {isOn ? 'DND ON' : 'DND OFF'}
        </div>
      )}    </div>);}
