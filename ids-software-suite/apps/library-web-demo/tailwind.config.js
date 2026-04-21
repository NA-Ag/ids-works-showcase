import sharedConfig from '../../packages/ui-components/tailwind.config.js';

export default {
  ...sharedConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui-components/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/library-frontend/src/**/*.{js,ts,jsx,tsx}",
  ]
}