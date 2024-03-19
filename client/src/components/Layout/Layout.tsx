import { Footer } from "flowbite-react";
import Header from "../Header";

interface LayoutProps{
    children: React.ReactNode;
}
export const Layout = ({children}: LayoutProps) => {
  return (
    <>
    <Header />
    <main>
        {children}
    </main>
    <Footer/>
    </>
  )
}
