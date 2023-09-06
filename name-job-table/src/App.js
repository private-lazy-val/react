import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Table from './components/table/Table'
import Form from './components/form/Form'

const App = () => {
    const [characters, setCharacters] = useState([]);

    const removeCharacter = (id) => {
        setCharacters(characters.filter(character => character.id !== id));
    };

    const handleSubmit = (character) => {
        const newCharacter = {id: uuidv4(), ...character};
        setCharacters([...characters, newCharacter]);
    };

    return (
        <div>
            <Table characterData={characters} removeCharacter={removeCharacter}/>
            <Form handleSubmit={handleSubmit}/>
        </div>
    );
};

export default App;
