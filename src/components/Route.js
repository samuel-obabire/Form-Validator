import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    const onUrlChange = () => {
      setLocation(window.location.pathname);
    };
    window.addEventListener('popstate', onUrlChange);

    return () => window.removeEventListener('popstate', onUrlChange);
  }, [location]);

  return location === path ? children : null;
};

export default Route;
