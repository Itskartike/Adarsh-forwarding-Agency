import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onPageChange={handlePageChange} />;
      case "services":
        return <Services onPageChange={handlePageChange} />;
      case "about":
        return <About onPageChange={handlePageChange} />;
      case "contact":
        return <Contact onPageChange={handlePageChange} />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
