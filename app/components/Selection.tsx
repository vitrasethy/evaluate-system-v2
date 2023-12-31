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

    const data = {
      department: formData.get("department")?.toString(),
      year: formData.get("year")?.toString(),
    };

    cookies().set("department", data.department ?? "");
    cookies().set("year", data.year ?? "");
    cookies().set("event", eventId);
    
    redirect(`/home/${eventId}/projects`);
  }

  return (
    <form action={action} className={"mb-10"}>
      <SelectClient departments={departments} />
    </form>
  );
}
