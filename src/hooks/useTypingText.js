import { useState, useEffect } from "react";

export function useTypingText(words, typingSpeed = 100, deletingSpeed = 50, pause = 2000) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const current = words[index];
    let timeout;

    if (isTyping) {
      if (text.length < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pause);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsTyping(true);
        setIndex((index + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, index]);

  return { displayText: text, cursor: "|" };
}