import React from "react"
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'

const Aside = () => {
    const links = getNavigation()
    
    return (
        <aside className={styles.container}>
            {
                links.map(navElement => {
                    return (
                        <Link href={navElement.link} title={navElement.title} type="header" />
                    )
                })
            }
        </aside>
    )
}

export default Aside