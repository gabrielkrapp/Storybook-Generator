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
    <div className="max-w-md mx-auto">
      <StoryInput theme={theme} setTheme={setTheme} />
      <CreateButton isLoading={isLoading} onClick={handleCreateStory} />

      {isLoading && (
        <div className="flex justify-center items-center mt-10">
          <div className="spinner"></div>
        </div>
      )}
      {error && <p className="text-center mt-5 text-red-500">Erro: {error}</p>}
      {story && (
        <div className="mt-4 px-4 pt-2 pb-4 border border-gray-300 rounded shadow-lg text-white bg-black bg-opacity-90">
          <p className="whitespace-pre-wrap m-0 story-text">{story.trim()}</p>
        </div>
      )}
    </div>
  );
};

export default StoryCreator;