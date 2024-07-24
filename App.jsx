import image from "./assets/image.jpg"
function App() {
  return (
    <>
      <div className=" flex justify-center items-center h-[100vh] bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
        <div className="w-[600px] h-[400px] bg-white rounded-2xl relative">
          <div className="  text-left w-[50%] h-[100%] flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl font-bold font-mono">Welcome</h1>
            <div className="text-left">
              <p className="text-xl">Username</p>

              <input
                type="text"
                className="w-30 h-6 rounded-sm outline-none border 4 border-gray-600 focus:bg-lime-400"
              />
            </div>
            <div>
              <p className="text-xl">Password</p>
              <input
                type="text"
                className=" w-30 h-6 rounded-sm outline-none border 4 border-gray-600 focus:bg-lime-400"
              />
            <span><br />
              <input type="checkbox" />
              Remember Password
            </span>
            </div>
            <button className="text-white font-bold text-xl px-5 py-1 border-2 bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100% rounded-md ">
              Login
            </button>
            <p className="font-bold">
              Don`t have an account <a className='text-blue-600 hover:underline'href="#">Register</a>
            </p>
          </div>
          <img src={image} alt="" className="w-[50%] absolute right-0 top-0 h-[100%] object-cover rounded-tr-2xl rounded-br-2xl md:block hidden" />
        </div>
      </div>
    </>
  );
}

export default App;
