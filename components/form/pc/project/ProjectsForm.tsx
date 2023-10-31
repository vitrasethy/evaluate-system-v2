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
          <TabsList className="flex justify-around  rounded-xl border-none h-10 my-5 bg-white py-6">
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
