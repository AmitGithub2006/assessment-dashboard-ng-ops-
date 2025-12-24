'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import ComponentDetails from '@/features/components/ComponentDetails';

export default function ComponentDetailsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const componentId = searchParams.get('id');

  return (
    <ComponentDetails 
      componentId={componentId} 
      onBack={() => router.back()} 
    />
  );
}
