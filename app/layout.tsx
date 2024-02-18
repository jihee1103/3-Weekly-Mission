import Footer from "../components/Footer";
import "./global.css";

export const metadata = {
  title: "Linkbrary",
  description: "Linkbrary는 링크를 저장하고 공유하는 서비스입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
