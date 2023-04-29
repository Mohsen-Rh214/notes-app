import React, { useContext } from 'react';
import Form from './form/Form';
import { ListContext } from '../context/list_context';

// style
import styles from './notes.module.scss';

const NoteApp = () => {
    const { notesList, selectedNote } = useContext(ListContext)

    console.log('notes list from outside: ', notesList)
    return (
        <div className={styles.notes_page}>

            <p className={`${styles.header} block text-gray-500 font-bold md:text-right mb-1 md:mb-6`}>
                note app
            </p >

            <div className={styles.section_body}>

                <Form />

                {notesList?.length > 0 && selectedNote !== null ?
                    <div className={styles.note}>
                        {selectedNote?.note}
                    </div> :

                    <div className={styles.welcome}>
                        This is just a simple note taking app.
                        <br />
                        Your notes are saved in your browser's cache memory, no data is collected.
                    </div>
                }

            </div>

        </div>
    )
}

export default NoteApp