import AgentProfilesContainer from './Wrapper';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import styles from "./styles.scss";
import { IconButton } from '@mui/material';
import { useState } from 'react';

const UserIcon = () => {
    return (
        <div className={styles.agentsIconContainer}>
            <PeopleAltOutlinedIcon className={styles.agentsIcon} fontSize="large" color='inherit' />
        </div>
    )
}

const AgentProfileContainer = () => {
    const agents = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    const agentsData = [
        {
            name:'Maheen1'
        },{
            name:'Maheen2'
        },{
            name:'Maheen3'
        },{
            name:'Maheen4'
        },{
            name:'Maheen5'
        },{
            name:'Maheen6'
        },{
            name:'Maheen7'
        },{
            name:'Maheen8'
        },{
            name:'Maheen9'
        },{
            name:'Maheen10'
        },{
            name:'Maheen11'
        }
    ]
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [dataIndex, setDataIndex] = useState(3);

    const nextKeyHandler = () => {
        setSelectedIndex(prevIndex => prevIndex + 3);
        setDataIndex(prevIndex => prevIndex + 3);
    }
    const previousHandler = () => {
        setSelectedIndex(prevIndex => prevIndex -3);
        setDataIndex(prevIndex => prevIndex -3)
    }
    return (
        <div className={styles.agentsWrapper}>
            <div className={styles.agentsContainer}>
                <div className={styles.agentsTitleContainer}>
                    <UserIcon />
                    <p className={styles.agentsTitle}>Our Dedicated real estate agents</p>
                    <p className={styles.agentsSubTitle}>Ellise partners has invested in over 60 projects throughout Northerm California. Select sample of projects.</p>
                    <div className={styles.agentsButtonIconContainerWrapper}>
                        <div className={styles.agentsButtonIconContainer}>
                            {
                                selectedIndex != 0 && selectedIndex > 0 &&
                                <IconButton onClick={previousHandler} >
                                    <ArrowCircleLeftOutlinedIcon fontSize='inherit' className={styles.agentsButtonIcon} />
                                </IconButton>
                            }
                           { selectedIndex < agentsData.length-3 &&
                            <IconButton onClick={nextKeyHandler}>
                                <ArrowCircleRightOutlinedIcon fontSize='inherit' className={styles.agentsButtonIcon} />
                            </IconButton>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <AgentProfilesContainer data={agentsData.slice(selectedIndex, dataIndex)} />
        </div>
    )
}

// const MobileAgentProfiles = () => {
//     return (
//         <div>
//             <section className={styles.agentsMobilesTitleContainer}>
//             <UserIcon />
//                     <p className={styles.agentsTitle}>Our Dedicated real estate agents</p>
//                     <p className={styles.agentsSubTitle}>Ellise partners has invested in over 60 projects throughout Northerm California. Select sample of projects.</p>
//                     <div className={styles.agentsButtonIconContainer}>
//                         {
//                             selectedIndex != 0 && selectedIndex > 0 &&
//                             <IconButton onClick={previousHandler} >
//                                 <ArrowCircleLeftOutlinedIcon fontSize='inherit' className={styles.agentsButtonIcon} />
//                             </IconButton>
//                         }
//                        { selectedIndex < agentsData.length-3 &&
//                         <IconButton onClick={nextKeyHandler}>
//                             <ArrowCircleRightOutlinedIcon fontSize='inherit' className={styles.agentsButtonIcon} />
//                         </IconButton>
//                         }
//                         </div>
//             </section>
//         </div>
//     )
// }

export default AgentProfileContainer