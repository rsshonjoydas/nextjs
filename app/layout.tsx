import '../styles/index.scss';
import Header from './Header';
import Footer from './Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
