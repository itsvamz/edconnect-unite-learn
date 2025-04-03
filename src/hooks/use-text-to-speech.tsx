
import { useEffect, useState } from 'react';

export function useTextToSpeech() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const enableTextToSpeech = () => {
    setIsEnabled(true);
  };

  const disableTextToSpeech = () => {
    setIsEnabled(false);
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const speakText = (text: string) => {
    if (!isEnabled || !text || typeof window === 'undefined') return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const handleTextSelection = () => {
    if (!isEnabled) return;
    
    const selectedText = window.getSelection()?.toString().trim();
    if (selectedText) {
      speakText(selectedText);
    }
  };

  useEffect(() => {
    if (isEnabled) {
      document.addEventListener('mouseup', handleTextSelection);
      return () => {
        document.removeEventListener('mouseup', handleTextSelection);
      };
    }
  }, [isEnabled]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return {
    isEnabled,
    isSpeaking,
    enableTextToSpeech,
    disableTextToSpeech,
    speakText
  };
}
