import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'Ritesh Verma | Data Analyst',
  description: 'Data Analyst Portfolio | Transforming Data into Strategic Insights. Master\'s in Applied Data Science from Syracuse University.',
  keywords: 'Data Analyst, Python, SQL, Tableau, Power BI, Machine Learning, ETL, Syracuse University',
  authors: [{ name: 'Ritesh Verma' }],
  openGraph: {
    title: 'Ritesh Verma | Data Analyst',
    description: 'Data Analyst Portfolio | Transforming Data into Strategic Insights',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
