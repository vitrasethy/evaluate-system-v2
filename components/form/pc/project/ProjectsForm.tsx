import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Poster from "./Poster";
import Presentation from "./Presentation";
export default function ProjectsForm() {
  return (
    <div>
      <div className=" translate-y-[-140px] translate-x-[62vw]  absolute flex justify-end p-5">
        <div className=" border-2 w-[300px] h-[20%] p-2 rounded-md">
          <div className="flex">
          <h1 className=" bg-green-400 w-7 text-green-400 border-2 border-black">.</h1>
          <p className="px-5">Complete</p>
          </div>
          <div className="flex py-1">
          <h1 className=" bg-yellow-400 w-7 text-yellow-400 border-2 border-black">.</h1>
          <p className="px-5">Some teacher complete</p>
          </div>
          <div className="flex">
          <h1 className=" bg-white w-7 text-white border-2 border-black">.</h1>
          <p className="px-5">Not yet Evaluate</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full items-center relative">
        <Tabs
          defaultValue="account"
          className=" w-[90%] md:w-auto shadow-2xl border-2 mx-20  rounded-xl bg-white"
        >
          <TabsList className="flex justify-around mb-5 rounded-xl border-none h-10 my-4 bg-white py-6">
            <TabsTrigger
              value="account"
              className="h-14 w-2/5 ml-5 rounded-xl border-[#014164] text-black border-2 text-md "
            >
              Presentation
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="h-14 w-2/5 mr-5 rounded-xl border-[#014164] text-black border-2 text-md "
            >
              Poster
            </TabsTrigger>
          </TabsList>
          <div className="present ">
            <TabsContent value="account" className=" w-[90%] md:w-auto">
              <Presentation />
            </TabsContent>
          </div>
          <TabsContent value="password" className=" w-[90%] md:w-auto">
            <Poster />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
