import Roles from '../../components/Roles'
import { RolesProps } from '../../components/Roles/types';
import Carousel from 'react-material-ui-carousel';
import styles from './styles.scss';

const RolesContainer = () => {
    const roles:RolesProps[] = [
        {
            color:"#ffa64d",
            title:"Buy a Home",
            discription:"Fine your place with an immersive photo experience and the most listings, including things you wouldn't find anywhere else.",
            linkLabel:'Search Homes'
        },
        {
            color:"#ff6600",
            title:'Sell a Home',
            discription:"Whether you sell with new Zillow offers or take another approach. We'll help you navigate the path to successfull sale.",
            linkLabel:'See options'
        },{
            color:'#ffd11a',
            title:"Rent a home",
            discription:"We're creating a seamless online business experience from shopping on the largest rental network, to applying, to paying rent.",
            linkLabel:'See options'
        },{
            color:"#e6e600",
            title:'Be our agent',
            discription:"We are one of the main home sale marketing company in xyz. You can get a top agent top experience by our agent.",
            linkLabel:'See our agent List'
        }
    ]
  return (
    <div className={styles.rolesContainerContainer}> 
    <p className={styles.rolesContainerContainerTitle}>Here is a little about what we do</p>
        <div className={styles.rolesContainerWrapper} >
            {
                roles.map((role:any)=> {
                    return(
                        <Roles color={role.color} title={role.title} discription={role.discription} linkLabel={role.linkLabel} />
                    )
                })
            }
        </div>
        {
            <Carousel className={styles.rolesContainerCaroselContainer} 
            indicators={true}
            >
                {
                    roles.map((role:RolesProps)=>{
                        return(
                            <Roles color={role.color} title={role.title} discription={role.discription} linkLabel={role.linkLabel} />
                        )
                    })
                }
            </Carousel>
        }
    </div>
  )
}

export default RolesContainer