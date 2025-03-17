import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import styles from './App.module.scss';
import ReportPage from './Pages/report-page/ReportPage';
import ContactManagement from './Pages/contact-management/ContactManagement';
import ExecutiveMessage from './Pages/content-management/excutive-msg/ExcutiveMessage';
import OurStory from './Pages/content-management/our-story/OurStory';
import AboutUs from './Pages/content-management/about-us/AboutUs';
import CustomsAndAuthorities from './Pages/content-management/customs-and-authorities/CustomsAndAuthorities';
import LawsAndGuidelines from './Pages/content-management/laws-and-guidlines/LawsAndGuidelines';
import SocialLinks from './Pages/content-management/social-links/SocialLinks';
import PrivacyPolicy from './Pages/content-management/privacy-policy/PrivacyPolicy';
import CommitteeAndTeams from './Pages/committe-and-teams/CommitteeAndTeams';
import AddNewCommittee from './Pages/committe-and-teams/add-comittee-and-teams/AddNewCommittee';

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
              <Route path='/' element={<ContactManagement />} />
              <Route
                path='/comittee-and-teams'
                element={<CommitteeAndTeams />}
              />
              <Route
                path='/comittee-and-teams/add-committee'
                element={<AddNewCommittee />}
              />
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
              <Route
                path='/content-management/laws-guidelines'
                element={<LawsAndGuidelines />}
              />
              <Route
                path='/content-management/social-links'
                element={<SocialLinks />}
              />
              <Route
                path='/content-management/privacy-policy'
                element={<PrivacyPolicy />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
