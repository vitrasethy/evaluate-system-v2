import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import SelectClient from "./SelectClient";

interface SelectionProps {
  departments: any;
  eventId: string;
}

export default function Selection({ departments, eventId }: SelectionProps) {
  
  async function action(formData: FormData) {
    "use server";

    const newDepartment = formData.get("department")?.toString();

    const data = {
      department: formData.get("department")?.toString(),
      year: formData.get("year")?.toString(),
    };

    cookies().set("department", data.department ?? "");
    cookies().set("year", data.year ?? "");
    cookies().set("event", eventId);
    
    redirect("/home/events/projects");
  }

  return (
    <form action={action} className={"mb-10"}>
      <SelectClient departments={departments} />
    </form>
  );
}
