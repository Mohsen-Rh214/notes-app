import React from 'react';

// style
import styles from './notes.module.scss';

const NoteApp = () => {
    return (
        <div className={styles.ntoes_page}>

            <p className={`${styles.header} block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4`}>
                note app
            </p >

            <div className={`w-full max-w-sm`}>
                <div className={styles.note_card}>
                    <p>
                        im a new note.
                    </p>
                </div>

                <div className={styles.note_card}>
                    <p>
                        im another note.
                    </p>
                </div>
            </div>

            <form className={`w-full max-w-sm ${styles.form} p-10`}>

                <div className="md:flex md:items-center mb-6">

                    <input
                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        placeholder='New Note!'
                    />
                </div >
                <div className="md:flex md:items-center mb-6" >

                    <textarea
                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type='text'
                        placeholder='Write your note here...'
                        rows={4}
                    />
                </div >

                <div className="md:flex md:items-center" >
                    {/* <div className="md:w-1/3" ></div > */}

                    {/* <div className="md:w-2/3" > */}
                    <button className="shadow md:w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded" type="button" >
                        Save
                    </button >
                    {/* </div > */}
                </div >
            </form >
        </div >
    )
}

export default NoteApp