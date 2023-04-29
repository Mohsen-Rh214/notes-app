import React, { createContext, useState, useEffect } from "react";


const ListContext = createContext();

const ListProvider = ({ children }) => {
    const [notesList, setNotesList] = useState([])
    const [selectedNote, setSelectedNote] = useState(null)

    const saveList = (newList) => {
        localStorage.setItem('notesList', JSON.stringify(newList))
        setNotesList(newList)
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('notesList'));
        if (items) {
            setNotesList(items);
        }
    }, []);

    return (
        <ListContext.Provider value={{ notesList, saveList, selectedNote, setSelectedNote }}>
            {children}
        </ListContext.Provider>
    );
};

export { ListProvider, ListContext }