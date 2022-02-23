import Header from "Containers/Header";

const NotFound: React.FC = () => {
    return (
        <>
            <Header />
            <div className="flex items-center justify-center w-screen h-screen bg-body">
                <div className="px-40 py-20 rounded-md shadow-sm">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-theme text-9xl">404</h1>

                        <h6 className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
                            <span className="text-red-500">Oops!</span> Page not found
                        </h6>

                        <a href="/" className="px-6 py-2 bg-theme font-bold text-2xl">
                            Go home
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound;