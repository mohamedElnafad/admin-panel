import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

// Importing Material UI Icons
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LaptopIcon from '@mui/icons-material/Laptop';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupsIcon from '@mui/icons-material/Groups';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import MessageIcon from '@mui/icons-material/Message';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LinkIcon from '@mui/icons-material/Link';
import PolicyIcon from '@mui/icons-material/Policy';

import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [openContent, setOpenContent] = useState(
    location.pathname.startsWith('/content-management')
  );

  const toggleContentMenu = () => {
    setOpenContent(!openContent);
  };

  return (
    <nav className={styles.sidebar}>
      <List>
        <ListItem component={NavLink} to='/report'>
          <ListItemIcon>
            <ContentPasteIcon />
          </ListItemIcon>
          <ListItemText primary='التقارير' />
        </ListItem>

        <ListItem component={NavLink} to='/contact'>
          <ListItemIcon>
            <ContentPasteIcon />
          </ListItemIcon>
          <ListItemText primary='إدارة التواصل' />
        </ListItem>

        <ListItem component={NavLink} to='/services'>
          <ListItemIcon>
            <LaptopIcon />
          </ListItemIcon>
          <ListItemText primary='الخدمات الإلكترونية' />
        </ListItem>

        <ListItem component={NavLink} to='/inquiries'>
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary='الاستفسارات' />
        </ListItem>

        <ListItem component={NavLink} to='/jobs'>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary='الوظائف' />
        </ListItem>

        {/* Collapsible Content Management Section */}
        <ListItem onClick={toggleContentMenu}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary='إدارة المحتوى' />
          {openContent ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={openContent}>
          <List component='div' disablePadding className={styles.scrollList}>
            <ListItem
              component={NavLink}
              to='/content-management/about-us'
              className={styles.nested}
            >
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary='عن الهيئة' />
            </ListItem>
            <ListItem
              component={NavLink}
              to='/content-management/our-story'
              className={styles.nested}
            >
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText primary='قصتنا' />
            </ListItem>
            <ListItem
              component={NavLink}
              to='/content-management/executive-message'
              className={styles.nested}
            >
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText primary='كلمة المدير التنفيذي' />
            </ListItem>
            <ListItem
              component={NavLink}
              to='/content-management/customs-authorities'
              className={styles.nested}
            >
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary='الجمارك والهيئات الإدارية' />
            </ListItem>
            <ListItem
              component={NavLink}
              to='/content-management/laws-guidelines'
              className={styles.nested}
            >
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary='القوانين والأدلة' />
            </ListItem>
            <ListItem
              component={NavLink}
              to='/content-management/social-links'
              className={styles.nested}
            >
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary='روابط التواصل الاجتماعي' />
            </ListItem>
            <ListItem
              component={NavLink}
              to='/content-management/privacy-policy'
              className={styles.nested}
            >
              <ListItemIcon>
                <PolicyIcon />
              </ListItemIcon>
              <ListItemText primary='سياسة الخصوصية' />
            </ListItem>
          </List>
        </Collapse>

        <ListItem component={NavLink} to='/tenders'>
          <ListItemIcon>
            <GavelIcon />
          </ListItemIcon>
          <ListItemText primary='المناقصات و العطاءات' />
        </ListItem>

        <ListItem component={NavLink} to='/teams'>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary='اللجان و فرق العمل' />
        </ListItem>

        <ListItem component={NavLink} to='/media'>
          <ListItemIcon>
            <PhotoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary='الوسائط المتعددة' />
        </ListItem>
      </List>
    </nav>
  );
};

export default Sidebar;
