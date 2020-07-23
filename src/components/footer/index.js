import React from 'react'
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'

const Footer = () => {
    const links = getNavigation()

    return (
        <footer>
            <div className={styles.footer}>
                {
                    links.map(navElement => {
                        return (
                            <Link key={navElement.title} href={navElement.link} title={navElement.title} type="header" />
                        )
                    })
                }
            </div>
            <p className={styles.university}>Software University @ 2020</p>

        </footer>
    )
}

export default Footer