import react from 'react';

export default function Ref() {
    const [counnt, setCount] = react.useState(0);
    const countRef = react.useRef(0);
    const handleInc = () => {
        setCount(counnt + 1);
        countRef.current = countRef.current + 1;
        console.log('State:', counnt);
        console.log('Ref:', countRef.current);
    }
    return (
        <div>
            <h1>Count: {counnt}</h1>
            <h2>Ref Count: {countRef.current}</h2>
            <button onClick={handleInc}>Increment</button>
        </div>
    );
}