import { Html, Head, Main, NextScript } from 'next/document'

const themeScript = `
  (function() {
    try {
      const theme = localStorage.getItem('portfolio-theme');
      if (theme === 'dark') document.documentElement.classList.add('dark');
    } catch (e) {}
  })();
`

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
