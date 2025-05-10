import Navbar from './Navbar';
import Footer from './Footer';
import Moon from './Moon';
import StarryBackground from './StarryBackground';
import '../styles/Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <StarryBackground />
      <Moon />
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout; 