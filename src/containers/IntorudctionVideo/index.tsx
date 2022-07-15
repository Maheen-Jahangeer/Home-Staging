import quete from '../../../asset/icon/quete.svg';
import thumpnail from "../../../asset/images/thumpnail.jpg";
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import styles from "./styles.scss";

export const CommentIcon = () => {
    return (
        <div className={styles.videoTitleIcon}>
            <img src={quete} alt="icon" className={styles.videoTitleIconImg} />
        </div>
    )
}


const IntroductionVideo = () => {
    return (
        <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
                <div className={styles.videoTitleContainer}>
                    <CommentIcon />
                    <p className={styles.videoTitle}>We are integrated real estate developer</p>
                    <p className={styles.videoSubtitle}><span className={styles.videoSubtitleSpan}>Since our start in 2011.</span> We are an enterpreneurial real estate film with a deep investment history. The individuals on our team have invested throughout the peaks and troughs of economic and property market cycles over 25+ years in the bussiness. And in that time we've earned our reputation one client at a time. One partner at a time.Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world</p>
                </div>
                <div className={styles.videoThumpnail}>
                    <img src={thumpnail} alt="image" className={styles.videoThumpnailImg} />
                    <div className={styles.videoThumpnailButton}>

                        <div className={styles.videoThumpnailButtonContainer} >
                            <PlayCircleFilledWhiteOutlinedIcon color='inherit' fontSize='inherit' className={styles.videoThumpnailPlayButton} />
                            <p className={styles.videoThumpnailButtonTitle}>Watch Our History</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroductionVideo