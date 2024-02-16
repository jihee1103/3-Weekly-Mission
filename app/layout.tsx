import "../styles/pretendard.css";
import "../styles/global.css";

export const metadata = {
  title: "Linkbrary",
  description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
