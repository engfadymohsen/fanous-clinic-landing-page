import NavBar from '../components/shared/NavBar/NavBar'
import Footer from '../components/shared/footer/Footer'
import Welcome from '../components/aboutus/welcome/Welcome'
import OurFeatures from '../components/aboutus/ourFeatures/OurFeatures'
import OurHistory from '../components/aboutus/ourhistory/OurHistory'
import OurDoctors from '../components/aboutus/ourDoctors/OurDoctors'
import { useRef, useEffect } from 'react'

const AboutUsPage = () => {
  const scrollToTop = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollElement = scrollToTop.current;
    if (scrollElement) {
      scrollElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, []);

  return (
    <div ref={scrollToTop}>
    <NavBar />
    <Welcome />
    <OurFeatures />
    <OurHistory />
    <OurDoctors />
    <Footer />
    </div>
  )
}

export default AboutUsPage