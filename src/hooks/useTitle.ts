import { useEffect } from 'react';

const useTitle = (title: string | undefined) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | WykopX` : 'WykopX';
    return () => {
      document.title = prevTitle;
    };
  });
};

export default useTitle;
