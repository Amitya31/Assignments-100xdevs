export function Sidebar(){

    return(
        <>
        <div className="flex h-screen w-screen">
            <div className="bg-red-200 w-0 md:w-1/6 transition-all ease-in-out duration-500">
                Sidebar
            </div>
            <div className="bg-green-800 w-full md:w-5/6 ">
                Content
            </div>
        </div>
        </>
    )
}