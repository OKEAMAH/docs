import { useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const url = useBaseUrl('/docs/');
  useEffect(() => {
    window.location.href = url
  }, []);
  return null;
}