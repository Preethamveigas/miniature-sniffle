import { useEffect, useState, useMemo } from 'react';

export function useBasename() {
  const path = document.location.pathname.split('/')[1] || 'home';

  return useMemo(() => path, [path]);
}

export default useBasename;
