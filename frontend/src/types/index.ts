export interface StoryInputProps {
    theme: string;
    setTheme: (theme: string) => void;
}
  
export interface CreateButtonProps {
    handleCreateStory: () => void;
    isLoading: boolean;
}
  
export interface MessageProps {
    message: string;
    isError?: boolean;
}
  