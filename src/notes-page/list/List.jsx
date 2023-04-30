import React, { useContext } from 'react'
import { ListContext } from '../../context/list_context'

import styles from './list.module.scss'


const List = () => {

    const { setSelectedNote, notesList, saveList } = useContext(ListContext)

    const handleSelectNote = (note) => setSelectedNote(note)

    const handleDelete = (id) => {
        const newList = notesList.filter((item) => item.id !== id)

        // console.log('newList: ', newList)
        // console.log('item: ', id)
        saveList(newList)
    }


    return (
        <>
            {notesList?.length > 0 &&

                <div className={`${styles.notesList} w-full max-w-sm`}>
                    {/* <p>some note</p> */}

                    {notesList.map(item => {
                        return (

                            <div className={styles.note_card}
                                onClick={() => handleSelectNote(item)}
                            >
                                <p>
                                    {item.title}
                                </p>

                                <span
                                    onClick={() => handleDelete(item.id)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                                    </svg>
                                </span>
                            </div>
                        )
                    })}

                </div>

            }
        </>
    )
}


export default List