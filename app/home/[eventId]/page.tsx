import { GetDepartId } from "@/app/components/GetDepartId";
import Selection from "@/app/components/Selection";
import SelectionMobile from "@/app/components/SelectionMobile";

export default async function page({ params }: { params: { eventId: string } }) {
  const departmentsData = await GetDepartId();

  return (
    <div>
      <div className={"flex flex-col items-center justify-center my-10"}>
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Searching Projects
        </h1>
        <p className="mx-5 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          Please select one of each options for searching.
        </p>
      </div>
      {/* Mobile View */}
      <div className={"lg:hidden"}>
        <SelectionMobile eventId={params.eventId} departments={departmentsData} />
      </div>
      {/* Computer View */}
      <div className={"hidden lg:block"}>
        <Selection eventId={params.eventId} departments={departmentsData} />
      </div>
    </div>
  );
}
