import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const englishcontent = () => {
    return ( 
        <div className={styles.container}>
            <p className={styles.h1}> Most of the content here will be in English in PDF or Text format.  </p>
        </div>
     );
}
 
export default englishcontent