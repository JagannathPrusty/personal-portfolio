"use client";

import { useEffect, useState } from "react";

const texts = [
  "Turning complex problems into elegant solutions.",
  "Building modern, scalable web applications.",
  "Designing clean and intuitive user experiences.",
];

export default function TypingText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const updatedText = currentText.substring(0, displayText.length + 1);
        setDisplayText(updatedText);

        if (updatedText === currentText) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const updatedText = currentText.substring(0, displayText.length - 1);
        setDisplayText(updatedText);

        if (updatedText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <span className="text-indigo-500">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
