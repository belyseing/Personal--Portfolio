import './globals.css';
     import type { Metadata } from 'next';

     export const metadata: Metadata = {
       title: 'Ingabire Belyse - Portfolio',
       description: 'Professional portfolio of Ingabire Belyse, showcasing skills, projects, and achievements.',
     };

     export default function RootLayout({ children }: { children: React.ReactNode }) {
       return (
         <html lang="en">
           <body>{children}</body>
         </html>
       );
     }