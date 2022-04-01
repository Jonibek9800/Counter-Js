import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь' },
        { id: 1, value: 5, name: 'Ложка' },
        { id: 2, value: 7, name: 'Вилка' },
        { id: 3, value: 5, name: 'Тарелка' },
        { id: 4, value: 10, name: 'Набор минималиста' },
    ]
    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounter = counters.filter(count => count.id !== id)
        setCounters(newCounter)
    }
    const handleReset = () => {
        setCounters(initialState)
    }
    
    const newCounters = [...counters]
    const handleIncrement = (id) => {
        const counter = counters.findIndex(count => count.id === id)
        newCounters[counter].value++
        setCounters(newCounters)
    }
    const handleDecrement = (id) => {
        const counter = counters.findIndex(count => count.id === id)
        newCounters[counter].value--
        setCounters(newCounters)
    }

    return (<>
        {counters.map(count => <Counter
            key={count.id}
            {...count}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
        />)}
        <button className="btn btn-primary m-2 p-1" onClick={handleReset}>Сброс</button>
    </>)
}

export default CountersList