import InputBox from "./InputBox";

export default function Form() {
  return (
    <div className="">
      <div className="h-full grid grid-cols-2 gap-2 mt-5 mb-5 p-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter name of the site or entity"
          className="mb-5 p-3 border-4 border-pink-800 rounded-xl col-span-2"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Username or Name of the secret"
          className="mb-5 p-3 border-4 border-pink-800 rounded-xl col-span-1"
        />

        <input
          type="password"
          name=""
          id=""
          placeholder="Enter the secret"
          className="mb-5 p-3 border-4 border-pink-800 rounded-xl col-span-1"
        />


      </div>

      <div className="mx-auto flex items-center justify-center">
        <button className="flex items-center text-lg border-2 border-pink-800 rounded-full p-4 px-9 bg-red-400 hover:bg-pink-400 font-bold">
          Save
        </button>
      </div>
    </div>
  );
}