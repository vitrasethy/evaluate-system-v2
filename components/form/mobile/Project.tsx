import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import CardBlock from "@/components/form/mobile/CardBlock";

export default function Project() {
  const data = {
    name: 'Attendance System',
    id: 'IG8-1',
    leader: 'Bruno Fernandez',
    judge: '4 Evaluators',
    score: 60
  }

  return (
    <Tabs defaultValue="presentation" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="presentation">Presentation</TabsTrigger>
        <TabsTrigger value="poster">Poster</TabsTrigger>
      </TabsList>
      <TabsContent value="presentation">
        <div className={'flex justify-center'}>
          <CardBlock data={data}/>
        </div>
      </TabsContent>
      <TabsContent value="poster">
        <div className={'flex justify-center'}>
          <CardBlock data={data}/>
        </div>
      </TabsContent>
    </Tabs>
  )
}
