import ReactDOM from 'react-dom/client';

function App() {
  const firstName = "Adi"
  const lastName = "Babar"
  const hours =  new Date().getHours() % 12 
  let timeOfDay

  if ( hours < 12 ) {
    timeOfDay = "morning"
  } else if ( hours >= 12 && hours < 17 ) {
    timeOfDay = "afternoon"
  } else if ( hours < 21 ) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }
  
  /**
   * Challenge: finish off the h1 below so it says "Hello Joe Schmoe"
   */
  
  return (
    <>
        <h1>Hello { firstName } { lastName }</h1>
        <h1>It is currently { hours }</h1>
        <h1>Good {timeOfDay}</h1>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);