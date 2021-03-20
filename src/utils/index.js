import { Suspense } from 'react';

export function LazyComponents(Component) {
  return (
    <Suspense fallback="loading">
      <Component />
    </Suspense>
  );
}
