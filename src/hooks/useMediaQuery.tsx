import { useEffect, useState } from 'react';

/**
 * Modified from link below
 * @see https://observablehq.com/@werehamster/avoiding-hydration-mismatch-when-using-react-hooks
 * @param mediaQueryString
 * @returns {unknown}
 */

export default function useMediaQuery(mediaQueryString) {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = () => setMatches(!!mediaQueryList.matches);
    listener();
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [mediaQueryString]);

  return [matches as boolean];
}
