export interface StoryInputProps {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}
  
export interface CreateButtonProps {
    isLoading: boolean;
    onClick: () => void;
}
  
export interface MessageProps {
    message: string;
    isError?: boolean;
}

export interface SpeechButtonProps {
    text: string;
}
  