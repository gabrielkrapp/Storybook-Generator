import React, { useState } from 'react';
import axios from 'axios';
import StoryInput from './StoryInput';
import CreateButton from './CreateButton';

const StoryCreator: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [story, setStory] = useState<string | null>(null);

  const handleCreateStory = async () => {
    setIsLoading(true);
    setError(null);
    setStory(null);

    try {
      const response = await axios.post('http://localhost:3001/generate-story', { theme });
      setStory(response.data.story);
    } catch (error: any) {
      setError(error.response?.data?.error || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <StoryInput theme={theme} setTheme={setTheme} />
      <CreateButton isLoading={isLoading} onClick={handleCreateStory} />

      {isLoading && <p className="text-center p-4 text-white">Carregando...</p>}
      {error && <p className="text-center p-4 text-red-500">Erro: {error}</p>}
      {story && <p className="mt-4 p-4 border border-gray-300 rounded shadow text-white">{story}</p>}
    </div>
  );
};

export default StoryCreator;