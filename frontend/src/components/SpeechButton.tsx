import React from 'react';
import { FaVolumeUp } from 'react-icons/fa';
import { SpeechButtonProps } from '../types';
import { speak } from './SpeakFunction';

const SpeechButton: React.FC<SpeechButtonProps> = ({ text }) => {

  return (
    <FaVolumeUp
      data-testid="speech-button"
      className="text-2xl cursor-pointer hover:text-orange-400"
      title="Pressione para falar"
      onClick={() => speak(text)}
    />
  );
};

export default SpeechButton;