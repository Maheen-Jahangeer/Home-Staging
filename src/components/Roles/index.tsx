import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { Link } from 'react-router-dom';
// import { Link } from '@mui/material';
import styles from './styles.scss';
import { RolesProps } from './types';

const Roles = ({color, discription, title, linkLabel}:RolesProps) => {
  return (
    <div className={styles.rolesContainer}>
        <CircleRoundedIcon style={{color:`${color}`, fontSize:'100px', opacity:"70%"}} color="inherit" fontSize='inherit'/>
        <p className={styles.rolesTitle}>{title}</p>
        <p className={styles.rolesSubTitle}>{discription}</p>
        <Link to='/' className={styles.rolesLink}>{linkLabel}</Link>
    </div>
  )
}

const TestContainer = () => {
  return <div>Hai</div>
}

export default Roles;