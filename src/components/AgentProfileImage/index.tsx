import { FacebookOutlined, Instagram, LinkedIn,  } from '@mui/icons-material';
import profile from '../../../asset/images/profile.jpg';
import styles from './styles.scss';
import { ProfileProps } from './types';

const AgentProfileImage = ({name}:ProfileProps) => {
    return (
        <div className={styles.agentProfile}>
            <div className={styles.agentProfileImageContainer}><img src={profile} alt="profile picture" className={styles.agentProfileImage} /></div>
            <div className={styles.agentProfileNameContainer}>
                    <div className={styles.agentProfileDetailsContainer}>
                        <p className={styles.agentProfileName}>{name}</p>
                        <div className={styles.agentProfileSubTitleContainer}>
                            <p className={styles.agentProfileSubTitle}>Company Agent</p>
                            <div className={styles.agentProfileSubTitleIconContainer}>
                            <FacebookOutlined className={styles.agentProfileSubTitleIcon} color="inherit"/>
                            <LinkedIn className={styles.agentProfileSubTitleIcon} color="inherit" />
                            <Instagram className={styles.agentProfileSubTitleIcon} color="inherit" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default AgentProfileImage