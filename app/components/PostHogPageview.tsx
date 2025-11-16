"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { initPostHog, posthog } from '@/lib/posthog';

export default function PostHogPageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize PostHog
  useEffect(() => {
    initPostHog();
  }, []);

  // Capture pageviews when path or query changes
  useEffect(() => {
    if (!pathname) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');

    posthog.capture('$pageview', {
      $current_url: url
    });
  }, [pathname, searchParams]);

  return null;
}
