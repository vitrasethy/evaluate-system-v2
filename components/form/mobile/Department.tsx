import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function MobileDepartForm() {
    return (
        <Card className="w-11/12 m-auto mt-4">
            <CardHeader>
                <CardDescription>Generation: 8</CardDescription>
                <CardDescription>Year: 3</CardDescription>
                <CardTitle>Information of Technology Engineering</CardTitle>
            </CardHeader>
        </Card>
    );
}