import { useState, useEffect, useRef } from 'react';

export default function useNearScreen({ distance = '100px' } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;
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

      observer.observe(fromRef.current);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
