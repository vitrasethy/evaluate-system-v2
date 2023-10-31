import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Home() {
  return (
    <main className="bg-[url('/stem.jpeg')] bg-cover h-screen">
      <div className="flex flex-wrap justify-evenly items-center bg-sky-950/30 backdrop-brightness-75 h-full">
        <div className="flex justify-center items-center md:ml-[5%] md:mb-[5%]">
          <div className="mr-2">
            <Image
              className="md:w-[120px] md:h-[120px] min-[300px]:w-[80px] min-[300px]:h-[80px]"
              src="/logo-rupp.svg"
              width={120}
              height={120}
              alt="Picture of the author"
            />
            <Image
              className="ml-2 mt-4 md:w-[100px] md:h-[100px] min-[300px]:w-[60px] min-[300px]:h-[60px]"
              src="/logo-fe.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div>
            <Image
              className="md:w-[500px] md:h-[150px] min-[300px]:w-[250px] min-[300px]:h-[100px]"
              src="/title-rupp.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <Image
              className="md:w-[400px] md:h-[100px] min-[300px]:w-[200px] min-[300px]:h-[80px]"
              src="/title-fe.svg"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="w-full md:w-3/12 md:h-[600px] md:mr-[10%] min-[300px]:w-96 min-[300px]:h-[480px] max-[768px]:mx-[5%] max-[768px]:mb-16 bg-[#fff] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] pt-6 pb-14 px-10 rounded-2xl">
          <h1 className="text-black text-center min-[300px]:text-2xl md:text-4xl md:mt-2  font-medium mb-1 md:6">
            Login
          </h1>
          <LoginForm />
          <div className="flex items-center py-px md:py-3 my-2">
            <div className="flex-grow h-px bg-gray-400"></div>
            <span className="flex-shrink text-sm md:text-lg text-gray-500 px-4 font-light">
              OR
            </span>

            <div className="flex-grow h-px bg-gray-400"></div>
          </div>
          <div className="text-center mt-2">
            <h1 className="text-sm md:text-base">Don&apos;t have an account?</h1>
            <button
              className="mt-4 bg-[#024164] hover:bg-[#03679d] w-full px-3 py-3 text-sm md:text-lg leading-5 rounded-md font-semibold text-white"
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
