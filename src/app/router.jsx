import { Router } from '@reach/router';
import Footer from '../components/Footer/Index';
import Navigation from '../components/Navigation';
import AboutPage from '../pages/About';
import BlogPage from '../pages/Blog';
import ContactPage from '../pages/Contact';
import HomePage from '../pages/Home';
import ProductPage from '../pages/Product';

const AppRouter = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <HomePage path='/' />
        <AboutPage path='/about' />
        <ProductPage path='/product' />
        <BlogPage path='/blog' />
        <ContactPage path='/contact' />
      </Router>
      <Footer/>
    </div>
  );
};

export default AppRouter;