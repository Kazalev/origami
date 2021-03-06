import React from 'react'
import styles from './index.module.css'
import image from '../../images/blue-origami-bird.png'

const Origam = ({ description, author, index }) => {
    return (
        <div className={styles.container}>
            <img alt="img" className={styles.image} src={image}></img>
            <div className={styles.description}>
                <span>{index} - </span>
                <div dangerouslySetInnerHTML={{__html: description}} />
            </div>
            <p>
                <span className={styles.user}>
                    <small>Author: </small>
                    {author.username}
                </span>
            </p>
        </div>
    )
}

export default Origam