// Vercel Speed Insights integration
// Import and initialize Speed Insights for tracking web vitals

import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false
});
