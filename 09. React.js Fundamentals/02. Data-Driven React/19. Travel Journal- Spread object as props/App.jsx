import Header from "./components/Header"
import Entry from "./components/Entry"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */
import data from "./data"



export default function App() {

    const entryElements = data.map((entry) => {
        return (
            <Entry 
                key={entry.id}  
                {...entry}  // this is the simplest way
            />
        )
    }) 

    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}