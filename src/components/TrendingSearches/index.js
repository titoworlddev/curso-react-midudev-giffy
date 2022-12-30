import React, { useState, useEffect, useRef } from 'react';
import getTrendingTerms from '../../services/getTrendingTermsService';
import Category from '../Category';

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category options={trends} name="Tendencias" />;
}

export default function LazyTrending() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(function () {
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      // Para que se ejecute el callback cuando el elemento se vea en pantalla pero un poco antes
      rootMargin: '100px'
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });

  return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
}
