import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen';
import Spinner from 'components/Spinner';
import './styles.css';

const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' });

  return (
    <div className="LazyTrending" ref={fromRef}>
      {isNearScreen && (
        <Suspense fallback={<Spinner />}>
          <TrendingSearches />
        </Suspense>
      )}
    </div>
  );
}
