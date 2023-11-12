import * as React from "react";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import SelectionMobileClient from "./SelectMobileClient";
import { cookies } from "next/headers";

interface SelectionProps {
  eventId: any;
  departments: any;
}

export default function SelectionMobile({
  eventId,
  departments,
}: SelectionProps) {
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
    <Card className={"mx-5"}>
      <form className={"mt-5"} action={action}>
        <SelectionMobileClient departments={departments} />
      </form>
    </Card>
  );
}
