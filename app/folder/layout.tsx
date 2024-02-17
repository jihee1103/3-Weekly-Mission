import Footer from "../../components/common/Footer";
import Header from "../../components/folder/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
