import react from 'react'

const WindowWidth = () => {
    const [width, setWidth] = react.useState(window.innerWidth)
    consr [innerHeight, setHeight]= react.useState(window.innerHeight)
return (
    <div>
        <h1>Window width: {width}</h1>
        <h1>Window height: {innerHeight}</h1>
    </div>
)
}