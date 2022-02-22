import React from 'react';
import ReactDOM from 'react-dom';
import { Portafolio } from './Portafolio';
import '../src/styles/styles.scss'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://2e621e1fc6e14162be44ada47ec22b20@o1150127.ingest.sentry.io/6222704",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});


ReactDOM.render(


    <Portafolio/>,

   
  document.getElementById('root')
);
