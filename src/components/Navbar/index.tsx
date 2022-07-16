import Icon from "../Icon";
import homeIcon from '../../../asset/images/home.png';
import styles from "./styles.scss";
import Button from '../Button';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { Backdrop, SvgIcon } from "@mui/material";
import { useState } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const MainIcon = () => {
  return (
    <div className={styles.navbarIcon}>
    <img src={homeIcon} alt="icon" className={styles.navbarIconImg} />
  </div>
  )
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <div className={styles.navbarWrapper}>
        <MainIcon />
        <div className={styles.navbarMenuIcon} onClick={()=> setMenuOpen(true)}>
          <ListOutlinedIcon color="inherit" fontSize="large" />
        </div>
        <div className={styles.navbarItemsWrapper}>
          <div className={styles.navbarItems}>Home</div>
          <div className={styles.navbarItems}>About us</div>
          <div className={styles.navbarItems}>Buy</div>
          <div className={styles.navbarItems}>Articles</div>
          <div className={styles.navbarItems}>Sell</div>
          <Button buttonLabel="Contact us" />
      </div>
      {
        menuOpen && 
        <SideMenu  onClose={()=>setMenuOpen(false)} />
      }
    </div>
  )
}

export default Navbar;

const SideMenu = ({onClose}:any) => {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarCloseIcon} onClick={onClose}>
        <CloseOutlinedIcon fontSize="large"/>
      </div>
      <div className={styles.sidebarItemsWrapper}>
        <div className={styles.sidebarItems}>Home</div>
        <div className={styles.sidebarItems}>About us</div>
        <div className={styles.sidebarItems}>Buy</div>
        <div className={styles.sidebarItems}>Articles</div>
        <div className={styles.sidebarItems}>Sell</div>
        <Button buttonLabel="Contact us" />
      </div>
    </div>
  )
}