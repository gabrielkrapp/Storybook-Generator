import React from 'react';
import { CreateButtonProps } from '../types';

const CreateButton: React.FC<CreateButtonProps> = ({ isLoading, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
      disabled={isLoading}
    >
      {isLoading ? 'Criando...' : 'Criar História'}
    </button>
  );
};

export default CreateButton;