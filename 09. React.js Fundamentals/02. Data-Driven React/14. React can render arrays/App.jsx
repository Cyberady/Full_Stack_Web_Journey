
export default function App() {
    
    /**
     * Challenge: manually turn this string array into an array of
     * JSX elements by surrounding each ninja turtle with an <h2> element
     */
    
    const ninjaTurtles = [
        <h2>Donatello</h2>,
        <h2>Michaelangelo</h2>,
        <h2>Rafael</h2>,
        <h2>Leonardo</h2>
    ]
    return (
        <main>
            {ninjaTurtles}
        </main>
    )
}
