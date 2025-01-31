// plugins/service-worker.ts

import { Workbox } from 'workbox-window';

export default defineNuxtPlugin(nuxtApp => {
  if (process.client && 'serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js');

    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        console.log('New content is available, please refresh.');
      } else {
        console.log('Service worker is installed for the first time.');
      }
    });

    wb.register();
  }
});

