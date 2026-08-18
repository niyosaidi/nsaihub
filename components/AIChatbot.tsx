
import React, { useState, useRef, useEffect } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { getChatbotResponse } from '../services/geminiService';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon, UserCircleIcon, SparklesIcon } from './IconComponents';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t, language } = useLocalization();
  const chatboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([{ sender: 'ai', text: t('chatbot.greeting') }]);
    } else {
      setMessages([]);
    }
  }, [isOpen, t]);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (userInput.trim() === '' || isLoading) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const aiResponse = await getChatbotResponse(userInput, language);
      setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
    } catch (error) {
      const errorText = language === 'rw' ? 'Byanze. Ongera ugerageze.' : 'Something went wrong. Please try again.';
      setMessages([...newMessages, { sender: 'ai', text: errorText }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
  
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#0A2342] text-white p-4 rounded-full shadow-lg hover:bg-[#1e3a5f] transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2CA58D]"
          aria-label="Toggle AI Chatbot"
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <ChatBubbleLeftRightIcon className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-full max-w-sm h-[60vh] bg-white rounded-lg shadow-2xl flex flex-col z-50 transform transition-all duration-300 ease-out origin-bottom-right scale-100">
          <header className="bg-[#0A2342] text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold text-lg">NS IT AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </header>

          <div ref={chatboxRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'ai' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"><SparklesIcon className="w-5 h-5 text-[#2CA58D]" /></div>}
                <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-[#0A2342] text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
                 {msg.sender === 'user' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"><UserCircleIcon className="w-6 h-6 text-gray-500" /></div>}
              </div>
            ))}
            {isLoading && (
               <div className="flex items-start gap-3 justify-start">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"><SparklesIcon className="w-5 h-5 text-[#2CA58D]" /></div>
                   <div className="p-3 rounded-2xl bg-gray-100">
                       <div className="flex items-center space-x-1">
                           <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-0"></span>
                           <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                           <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                       </div>
                   </div>
               </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center bg-gray-100 rounded-full">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chatbot.placeholder')}
                className="flex-1 w-full bg-transparent p-3 pl-4 border-none focus:ring-0 text-sm"
                disabled={isLoading}
              />
              <button onClick={handleSend} disabled={isLoading} className="p-3 text-gray-500 hover:text-[#0A2342] disabled:text-gray-300 disabled:cursor-not-allowed">
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
