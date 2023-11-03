import {Button} from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import * as https from "https";

export default function MobileProjForm() {
    return (
        <Tabs defaultValue="presentation" className="w-11/12 mt-4 m-auto">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="presentation">Presentation</TabsTrigger>
                <TabsTrigger value="poster">Poster</TabsTrigger>
            </TabsList>
            <TabsContent value="presentation">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Smart Attendance Tracker</CardTitle>
                        <CardDescription>ID: IG8-1</CardDescription>
                        <CardDescription>Leader: Bruno Fernandez</CardDescription>
                        <CardDescription>Judge: 4 teachers</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                        <a href="/events/e-day/1/evaluate"
                           className="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Evaluate
                        </a>
                        <a href="/events/e-day/1/evaluate"
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit
                            Evaluated
                        </a>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="poster">
                <Card className="w-full bg-green-200">
                    <CardHeader>
                        <CardTitle>Smart Attendance Tracker</CardTitle>
                        <CardDescription>ID: IG8-1</CardDescription>
                        <CardDescription>Leader: Bruno Fernandez</CardDescription>
                        <CardDescription>Judge: 4 teachers</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                        <a href="/events/e-day/1/evaluate"
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Evaluate
                        </a>
                        <a href="/events/e-day/1/evaluate"
                           className="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit
                            Evaluated
                        </a>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
