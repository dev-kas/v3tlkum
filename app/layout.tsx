import './globals.css'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'
import ToasterContext from './context/ToasterContext'
import Head from 'next/head'

// export const metadata = {
//   title: 'Talkium // Your instant messaging solution',
//   description: 'Talkium // Your instant messaging solution // By GlitchieTheDev',
//   og:type: "website"
// }

export const metadata = {
  "title": "Talkium // Your instant messaging solution",
  "description": "Talkium, by KAS, is a free instant messaging service offering secure, cross-platform communication for private and group text-based chats, connecting people worldwide with ease.",
  "generator": "Talkium // Your instant messaging solution",
  "applicationName": "Talkium",
  "keywords": "Talkium, KAS, Talkium Instant Messenger, Free Messaging Service, Online Chat Platform, Real-time Communication, Connect with Friends, Group Conversations, Secure Messaging App, Text, Chat, Global Chat Community, Cross-platform Messaging",
  "authors": [
      {
          "name": "KAS"
      },
      {
          "name": "KAS",
          "url": "https://v3.talkium.in"
      }
  ],
  "creator": "KAS",
  "publisher": "KAS",
  // "metadataBase": "https://v3.talkium.in/",
  "alternates": {
      "canonical": "https://v3.talkium.in/",
      "languages": {
          "en": "/"
      }
  },
  "openGraph": {
      "title": "Talkium // Your instant messaging solution",
      "description": "Talkium, by KAS, is a free instant messaging service offering secure, cross-platform communication for private and group text-based chats, connecting people worldwide with ease.",
      "url": "https://v3.talkium.in",
      "siteName": "Talkium",
      "images": [
          {
              "url": "/images/talkium@512x512-regular.png",
              "width": 800,
              "height": 600
          }
      ],
      "locale": "en-US",
      "type": "website"
  },
  "twitter": {
      // "card": "Talkium",
      "title": "Talkium // Your instant messaging solution",
      "description": "Talkium, by KAS, is a free instant messaging service offering secure, cross-platform communication for private and group text-based chats, connecting people worldwide with ease.",
      "creator": "@___KA5___",
      "images": [
          "/images/talkium@512x512-regular.png"
      ]
  },
  "robots": {
      "index": true,
      "follow": true,
      "googleBot": {
          "index": true,
          "follow": false,
          "noimageindex": true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1
      }
  },
  "icons": {
      "icon": "/images/talkium@512x512-regular.png",
      "shortcut": "/images/talkium@512x512-regular.png",
      "apple": "/images/talkium@512x512-regular.png",
      "other": {
          "rel": "/images/talkium@512x512-regular.png",
          "url": "/images/talkium@512x512-regular.png"
      }
  },
  "manifest": "/favicons/manifest.json"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="title" content="Talkium // Your instant messaging solution" />
        <meta name="description" content="Talkium // Your instant messaging solution" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Talkium // Your instant messaging solution" />
        <meta property="og:description" content="Talkium // Your instant messaging solution" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Talkium // Your instant messaging solution" />
        <meta property="twitter:description" content="Talkium // Your instant messaging solution" />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" /> */}
      </Head>
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
