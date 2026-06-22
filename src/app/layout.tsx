import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "AJ's Handyman Services Calgary | Trusted Home Repairs",
  description:
    "Professional handyman services in Calgary. Plumbing, electrical, drywall, painting, furniture assembly & more. Call (403) 123-4567 for a free quote.",
  keywords: [
    'handyman Calgary',
    'home repair Calgary',
    'plumbing Calgary',
    'electrical Calgary',
    'drywall Calgary',
    'painting Calgary',
  ],
  openGraph: {
    title: "AJ's Handyman Services Calgary",
    description: 'Professional, reliable handyman services across Calgary. Free quotes available.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
