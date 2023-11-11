import React from "react";
import fetchData from "@/app/home/[eventId]/projects/evaluate/fetchData";
import EvaluateForm from "@/app/home/[eventId]/projects/evaluate/EvaluateForm";

export default async function Page() {
  const data = await fetchData();

  return (
    <main className="md:mx-[3%] my-[5%]">
      <div className="h-auto flex justify-center">
        <div className="w-screen xl:w-[70%] p-6 bg-white border-2 border-gray-300 rounded-lg shadow sm:p-6 md:p-16">
          <EvaluateForm data={data} />
        </div>
      </div>
    </main>
  );
}
