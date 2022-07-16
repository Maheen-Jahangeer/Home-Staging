import FooterList from '../../components/FooterLink'
import { FooterOptionProps } from '../../components/FooterLink/types'
import { MainIcon } from '../../components/Navbar'
import styles from './styles.scss';

const FooterContainer = () => {
    const footerOptions:FooterOptionProps[] = [
        {
            heading:"Home",
            LinkItems:[
              {
                title:"Buying",
                linkUrl:'#'
              },
              {
                title:"Selling",
                linkUrl:'#'
              },{
                title:"Rental",
                linkUrl:'#'
              },{
                title:"Compare",
                linkUrl:'#'
              }
            ]
        },
        {
          heading:"Pages",
          LinkItems:[
            {
              title:"About us",
              linkUrl:"#"
            },
            {
              title:"What we do",
              linkUrl:"#"
            },{
              title:"Projects",
              linkUrl:"#"
            },{
              title:"Locations",
              linkUrl:"#"
            }
          ]
        },
        {
          heading:"Discover",
          LinkItems:[
            {
              title:"Privacy policy",
              linkUrl:"#"
            },
            {
              title:"Terms and conditions",
              linkUrl:"#"
            },{
              title:"Lander news",
              linkUrl:"#"
            },{
              title:"Houses",
              linkUrl:"#"
            }
          ]
        },
        {
          heading:"Subscriber"
        }
    ]
  return (
    <div className={styles.footerItemsWrapper}>
      <div className={styles.footerItemsContainer}>
        <MainIcon />
        {
          footerOptions.map((footerOption)=> {
            return (
              <FooterList heading={footerOption.heading} LinkItems={footerOption.LinkItems} />
            )
          })
        }
      </div>
    </div>
  )
}

export default FooterContainer