import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abhinav - Amazon SDE Portfolio',
  description: 'Portfolio: 'Portfolio of Abhinav, Amazon SDE applicant showcasing skills in Python, Java, AWS, and React',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Abhinav - Amazon SDE Portfolio',
    description: 'Portfolio of Abhinav, Amazon SDE applicant showcasing skills in Python, Java, AWS, and React',
    url: 'https://abhinav-amazon-sde-portfolio-2024.vercel.app',
    siteName: 'Abhinav Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhinav - Amazon SDE Portfolio',
    description: 'Portfolio of Abhinav, Amazon SDE applicant showcasing skills in Python, Java, AWS, and React',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gray-900 text-gray-100 antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}