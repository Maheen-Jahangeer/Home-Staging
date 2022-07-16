import React from 'react'
import { Link } from 'react-router-dom'
import { FooterOptionProps, LinkItemProps } from './types'
import styles from './styles.scss'
import Button from '../Button'

const LinkList = ({LinkItems}:FooterOptionProps) => {
    return(
    <div className={styles.linkItemWrapper}>
        {
            LinkItems?.map((singleLink:LinkItemProps)=> {
                return( 
                <Link to={singleLink.linkUrl} className={styles.linkItemLabels}>
                    {singleLink.title}
                </Link>)
            })
        }
    </div>)
}

const FooterList = ({heading, LinkItems}:FooterOptionProps) => {
  return (
    <div className={styles.footerListWrapper}>
        <p className={styles.footerListTitle}>{heading}</p>
        <div className={styles.footerListSeperator}></div>
        {
            heading !== "Subscriber" ? 
            <LinkList LinkItems={LinkItems} heading={undefined} /> 
            :
            <div className={styles.footerListInputContainer}>
                <input type="text" placeholder='Email address' className={styles.footerListInput} />
                <Button buttonLabel='Subscribe' />
            </div>
            }
    </div>
  )
}

export default FooterList