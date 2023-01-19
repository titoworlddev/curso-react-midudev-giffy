import { useState, useEffect, useRef } from 'react';

export default function useNearScreen({
  distance = '100px',
  externalRef
} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        // Para que se ejecute el callback cuando el elemento se vea
        // en pantalla pero un poco antes
        rootMargin: distance
      });

      element && observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
