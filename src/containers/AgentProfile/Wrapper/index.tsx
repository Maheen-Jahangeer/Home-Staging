import AgentProfileImage from "../../../components/AgentProfileImage";
import styles from "./styles.scss";

const AgentProfilesContainer = ({data}:any) => {
  return (
    <div className={styles.profileContainerWrapper}>
        {
            data.map((singleData:any)=> {
                return (
                    <AgentProfileImage name={singleData.name} />
                )
            })
        }
    </div>
  )
}

export default AgentProfilesContainer