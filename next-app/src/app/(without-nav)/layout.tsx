import { Footer } from "@/components/layout/footer";

export default function WithoutNavLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>
    {children}
    <Footer/>
    </>;
  }