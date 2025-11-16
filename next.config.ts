import type { NextConfig } from "next";

import { withPostHogConfig } from "@posthog/nextjs-config";


const nextConfig: NextConfig = {
  /* config options here */
};

export default withPostHogConfig(nextConfig, {
  personalApiKey: process.env.POSTHOG_API_KEY as string, // Personal API Key
  envId: process.env.POSTHOG_ENV_ID as string, // Environment ID
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  sourcemaps: { 
      enabled: true, 
      project: "my-application", 
      version: "1.0.0",
      deleteAfterUpload: true,
  },
});
 