import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import ReportPage from './Pages/report-page/ReportPage';
import ContentManagement from './Pages/content-management/excutive-msg/ExcutiveMessage';
import ContactManagement from './components/ContactManagement/ContactManagement';
import ExecutiveMessage from './Pages/content-management/excutive-msg/ExcutiveMessage';
import OurStory from './Pages/content-management/our-story/OurStory';
import AboutUs from './Pages/content-management/about-us/AboutUs';
import CustomsAndAuthorities from './Pages/content-management/customs-and-authorities/CustomsAndAuthorities';

function App() {
  return (
    <Router>
      <div className={styles.layout}>
        <Header />
        <div className={styles.mainContent}>
          <Sidebar />
          <div className={styles.content}>
            <Routes>
              <Route path='/report' element={<ReportPage />} />
              <Route path='/contact' element={<ContactManagement />} />

              <Route
                path='/content-management/about-us'
                element={<AboutUs />}
              />
              <Route
                path='/content-management/our-story'
                element={<OurStory />}
              />
              <Route
                path='/content-management/executive-message'
                element={<ExecutiveMessage />}
              />
              <Route
                path='/content-management/customs-authorities'
                element={<CustomsAndAuthorities />}
              />
              {/* <Route path='/content-management/laws-guidelines' element={<LawsAndGuidelines />} />
                <Route path='/content-management/social-links' element={<SocialLinks />} />
                <Route path='/content-management/privacy-policy' element={<PrivacyPolicy />} /> */}
              {/* </Route> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
