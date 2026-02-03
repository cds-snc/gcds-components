# Using @gcds-core/components-react with Next.js SSR

This guide explains how to set up and use the `@gcds-core/components-react` library in a Next.js project with server-side rendering (SSR).

> [!WARNING]
> This guide is a work in progress and has not been fully tested by our team. It is provided as a starting point for integrating `@gcds-core/components-react` with Next.js SSR. We are still actively testing this integration and will update these instructions as we learn more.

## 1. Install dependencies

Install the GCDS React package and its peer dependency:

```bash
npm install @gcds-core/components-react @gcds-core/components
```

## 2. Next.js Configuration for Web Components

Stencil-based web components need some extra configuration for SSR and hydration in Next.js projects.

### a. Client-side Hydration

Since custom elements are not defined on the server, you must register them on the client. Add the GCDS loader to your custom `_app.js` or `_app.tsx`:

```js
// pages/_app.js or _app.tsx
import { useEffect } from 'react';
import { defineCustomElements } from '@gcds-core/components/loader';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    defineCustomElements(window);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
```

### b. Custom Document for SSR

To ensure styles and scripts are loaded correctly, extend the Next.js `_document.js`:

```js
// pages/_document.js or _document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* You can add custom fonts or meta tags here if needed */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

## 3. Using GCDS React Components

You can now use GCDS React components in your application:

```jsx
import { GcdsButton } from '@gcds-core/components-react';

export default function Home() {
  return <GcdsButton>Click me</GcdsButton>;
}
```

## 4. Tips and Best Practices

- Always call `defineCustomElements` on the client to enable hydration of web components.
- Use the React wrappers from `@gcds-core/components-react` for best compatibility with React and Next.js.
- If you use dynamic imports or lazy loading, ensure the loader is called before rendering GCDS components.
- For accessibility and SEO, make sure your SSR output includes all required ARIA and semantic attributes.

## 5. Troubleshooting

- If you see hydration warnings, make sure the loader runs only on the client (inside `useEffect`).
- If styles are missing, check that the GCDS package is up to date and that your custom `_document.js` is not overriding styles.

---

For more information on using Stencil web components with SSR, see the [Stencil documentation on SSR](https://stenciljs.com/docs/ssr/).
