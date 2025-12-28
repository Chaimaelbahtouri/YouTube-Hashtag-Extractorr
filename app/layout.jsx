import "./globals.css";

export const metadata = {
  title: "TubeTags - YouTube Hashtag Extractor",
  description: "Free tool to extract and copy YouTube hashtags instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-8286057084197279" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8286057084197279"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
