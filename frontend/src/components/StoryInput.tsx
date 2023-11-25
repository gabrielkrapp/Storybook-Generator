import React from 'react';

interface StoryInputProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const StoryInput: React.FC<StoryInputProps> = ({ theme, setTheme }) => {
  return (
    <input
      type="text"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      placeholder="Digite o tema da história..."
      className="px-3 py-2 border border-gray-300 rounded shadow w-full"
    />
  );
};

export default StoryInput;
