import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Poster from "./Poster";
import Presentation from "./Presentation";
export default function ProjectsForm() {
  return (
    <div>
      <div className="flex justify-center w-full items-center relative">
        <Tabs
          defaultValue="account"
          className=" w-[90%] md:w-auto shadow-2xl border-2 mx-20  rounded-xl bg-white"
        >
          <TabsList className="flex justify-around  rounded-xl border-none h-10 mt-5 bg-white py-6">
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
          <div className=" flex justify-end mx-10">
                <div className="flex items-center justify-between w-full  p-2 rounded-md">
                  <div className="flex items-center">
                    <h1 className=" bg-green-400 w-4 h-4 text-green-400 border-2 border-black">
                      
                    </h1>
                    <p className="px-5">Complete</p>
                  </div>
                  <div className="flex py-1 items-center">
                    <h1 className=" bg-yellow-400 w-4 h-4 text-yellow-400 border-2 border-black">
                      
                    </h1>
                    <p className="px-5">Some teacher complete</p>
                  </div>
                  <div className="flex items-center">
                    <h1 className=" bg-white w-4 h-4 text-white border-2 border-black">
                      
                    </h1>
                    <p className="px-5">Not yet Evaluate</p>
                  </div>
                </div>
              </div>

          <TabsContent value="account" className=" w-[90%] mt-0 md:w-auto">
            <Presentation />
          </TabsContent>

          <TabsContent value="password" className=" w-[90%] mt-0 md:w-auto">
            <Poster />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
