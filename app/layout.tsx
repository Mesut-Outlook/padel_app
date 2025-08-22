import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'PadelMaster',
  description: 'Padel turnuva yönetimi uygulaması',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
