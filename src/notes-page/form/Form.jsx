import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { set, z } from "zod"

import styles from './form.module.scss'

const Form = () => {

    const [noteObject, setNoteObject] = useState()
    const [notesList, setNotesList] = useState([])

    const validationSchema = z.object({
        title: z.string(),
        note: z.string().min(1, { message: 'Please add a note!' }),
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: zodResolver(validationSchema) })

    const onSave = (formValues) => {
        console.log('title: ', formValues?.title || formValues.note.slice(0, 15))
        console.log('note: ', formValues.note)

        const newNote = {
            title: formValues?.title || formValues.note.slice(0, 15),
            note: formValues.note
        }

        setNotesList([...notesList, newNote])

        console.log('note list: ', notesList)

        reset()
    }

    return (
        <>

            {notesList?.length > 0 ?

                <div className={`${styles.notesList} w-full max-w-sm`}>
                    {/* <p>some note</p> */}

                    {notesList.map(item => {
                        return (

                            <div className={styles.note_card}>
                                <p>
                                    {item.title}
                                </p>
                            </div>
                        )
                    })}

                </div>
                : <>{console.log('here is what is: ', notesList.length)}</>

            }
            <form className={`w-full max-w-sm ${styles.form} p-10`}>

                <div className="md:flex md:items-center mb-6">

                    <input
                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        placeholder='New Note!'

                        {...register('title')}
                        required
                    />
                </div >
                <div className="md:flex md:items-center mb-6 flex-col" >

                    <textarea
                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type='text'
                        placeholder='Write your note here...'
                        rows={4}

                        {...register('note')}
                    />

                    <p className='mt-2 font-thin float-left'>{errors.note?.message}</p>
                </div >

                <div className="md:flex md:items-center" >
                    {/* <div className="md:w-1/3" ></div > */}

                    {/* <div className="md:w-2/3" > */}
                    <button className="shadow md:w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                        onClick={handleSubmit(onSave)}
                    >
                        Save
                    </button >
                    {/* </div > */}
                </div >
            </form >
        </>
    )
}

export default Form