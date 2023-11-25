import React from 'react';
import { MessageProps } from '../types';

const Message: React.FC<MessageProps> = ({ message, isError = false }) => {
  return (
    <div className={`text-center p-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
      {message}
    </div>
  );
};

export default Message;
