

export default function Navbar() {
    return(
        <div className=" w-full flex justify-between px-2">
            <div className="text-3xl font-extrabold flex items-center">
                KeyGuardian 

            </div>

            <div className="flex items-center font-bold">
                One place For All Your Secrets
            </div>

            <div className="flex items-center text-lg border-2 border-pink-800 rounded-full p-4 px-9 hover:bg-pink-400 font-bold">
                Login
            </div>

        </div>
    )
}