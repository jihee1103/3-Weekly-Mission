import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import StyledComponentsRegistry from '../lib/registry';
import KakaoScript from '../utils/KakaoScript';

export const metadata = {
  title: 'Linkbrary',
  description: 'CodeIt FE Sprint',
};

declare global {
  interface Window {
    // eslint-disable-next-line
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
      <KakaoScript />
    </html>
  );
}
