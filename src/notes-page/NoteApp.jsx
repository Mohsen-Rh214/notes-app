import React from 'react';
import Form from './form/Form';

// style
import styles from './notes.module.scss';

const NoteApp = () => {
    return (
        <div className={styles.ntoes_page}>

            <p className={`${styles.header} block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4`}>
                note app
            </p >


            <Form />
        </div >
    )
}

export default NoteApp