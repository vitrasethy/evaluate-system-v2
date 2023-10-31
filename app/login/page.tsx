import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Home() {
  return (
    <main className="bg-[url('/stem.jpeg')] bg-cover h-screen">
      <div className="flex max-[1200px]:flex-col justify-evenly max-sm:pb-[15%] max-sm:justify-center items-center bg-sky-950/30 backdrop-brightness-75 h-full">
        <div className="flex justify-center items-center">
          <div className="mr-2">
            <Image
              className="sm:w-[120px] sm:h-[120px] min-[300px]:w-[80px] min-[300px]:h-[80px]"
              src="/logo-rupp.svg"
              width={120}
              height={120}
              alt="Picture of the author"
            />
            <Image
              className="ml-2 mt-4 sm:w-[100px] sm:h-[100px] min-[300px]:w-[60px] min-[300px]:h-[60px]"
              src="/logo-fe.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div>
            <Image
              className="sm:w-[500px] sm:h-[150px] min-[300px]:w-[250px] min-[300px]:h-[100px]"
              src="/title-rupp.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <Image
              className="sm:w-[400px] sm:h-[100px] min-[300px]:w-[200px] min-[300px]:h-[80px]"
              src="/title-fe.svg"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="w-[350px] sm:w-[500px] max-[768px]:mx-[5%] max-sm:mt-[10%] bg-[#fff] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] p-10 rounded-xl">
          <h1 className="text-black text-center min-[300px]:text-2xl sm:text-4xl font-medium">
            Login
          </h1>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
