import { createRoot } from "react-dom/client"
// import {Fragments } from "react"      the fragments have <Fragment></Fragment> but we can remove the import and keep th <></> only empty it works same

const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <>
            <header>
                <img src="react-logo.png" width="40px" alt="React logo" />
            </header>
            <main>
                <h1>Reason I am excited to learn React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </main>
            <footer>
                <small>© 2024 Aditya development. All rights reserved.</small>
            </footer>
        </>
    )
}

root.render(
    <Page />
)