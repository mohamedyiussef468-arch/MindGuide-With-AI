import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hayat.ai',
  appName: 'حياة AI',
  webDir: 'dist',
  android: {
    allowMixedContent: false
  }
};

export default config;
