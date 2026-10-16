import HomePage from "../pages/HomePage"
import Header from "./Header"

export const Layout = () => {
    return (
        <>
            <Header />
            <main className="content">
                <HomePage />
            </main>
        </>
    )
}