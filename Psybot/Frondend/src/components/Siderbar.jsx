import React, { useState } from 'react';
import Catatan from '../assets/catatan.png';
import Orang from '../assets/orang.png';
import Ambulan from '../assets/ambulan.png';
import Group15 from '../assets/Group 15.png'; 
import MessageInput from './MessageInput';

const Sidebar = () => {
  const [showFirstDescription, setShowFirstDescription] = useState(false);
  const [showSecondDescription, setShowSecondDescription] = useState(false);

  const handleFirstButtonClick = () => {
    setShowFirstDescription(!showFirstDescription);
    setShowSecondDescription(false); // Set tombol kedua menjadi tidak aktif
  };

  const handleSecondButtonClick = () => {
    setShowSecondDescription(!showSecondDescription);
    setShowFirstDescription(false); // Set tombol pertama menjadi tidak aktif
  };

  return (
    <div className='w-380 bg-customGreen fixed h-full'>
      <div>
        <img src={Group15} alt="Group 15" className='w-30 h-51 p-5 object-contain' />
      </div>
      <div className='p-5 pt-10'>
        {/* Tombol pertama */}
        <button 
          onClick={handleFirstButtonClick} 
          className={`w-full p-4 bg-white text-customGreen text-center flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 ${showFirstDescription ? 'h-auto' : 'h-16'}`}
          style={{ borderRadius: '30px' }}>
          <span className='text-3xl font-bold'>Tentang Kami</span>
          <div className={`mt-3 w-full overflow-hidden transition-all duration-300 ease-in-out ${showFirstDescription ? 'max-h-[500px]' : 'max-h-0'}`}>
            <p className='text-center text-[13px]'>PsyBot merupakan salah satu chatbot kesehatan <br /> mental yang berguna untuk membantu para <br />pengguna untuk mengatasi depresi dan gangguan <br />kecemasan. Dengan memberikan beberapa arahan <br />sesuai dengan kondisi kesehatan mental pengguna,<br /> chatbot ini juga bisa di gunakan untuk memberitahu <br />cara-cara yang tepat ketika mengalami depresi dan <br />gangguan kecemasan.</p>
          </div>
        </button>
        
        {/* Tombol kedua */}
        <button 
          onClick={handleSecondButtonClick} 
          className={`w-full p-4 bg-white text-customGreen text-center flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 ${showSecondDescription ? 'h-auto' : 'h-16'} mt-5`}
          style={{ borderRadius: '30px' }}>
          <span className='text-3xl font-bold'>Bantuan</span>
          <div className={`mt-3 w-full overflow-hidden transition-all duration-300 ease-in-out ${showSecondDescription ? 'max-h-[500px]' : 'max-h-0'}`}>
            <p className='text-left text-[13px] font-bold mb-5'>Kami menyediakan berbagai layanan yang membantu <br /> dalam mengelola kesehatan mental Anda.</p>
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <img src={Catatan} alt="Catatan" className='w-8 h-8 object-contain' />
                <span className="ml-2 mr-4">Hubungi Medis</span>
              </div>
              <div className="flex items-center mb-2">
                <img src={Orang} alt="Orang" className='w-8 h-8 object-contain' />
                <span className="ml-2 mr-4">Hubungi Polisi</span>
              </div>
              <div className="flex items-center">
                <img src={Ambulan} alt="Ambulan" className='w-8 h-8 object-contain' />
                <span className="ml-2">Hubungi Ambulance</span>
              </div>
            </div>
          </div>
        </button>
      </div>
      <MessageInput />
    </div>
  );
}

export default Sidebar;
