'use client';

import { useState } from 'react';

export function useToast() {
  const [message, setMessage] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  const showToast = (msg: string) => {
    setMessage(msg);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  };

  return { message, isVisible, showToast };
}