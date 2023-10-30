"use client";

import {useFormState, useFormStatus} from "react-dom";
import {login} from "./action";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";

const initialState = {
  message: null,
}

export function ButtonForm() {
  return (
    <Button
      className="bg-[#024164] hover:bg-[#03679d] w-full px-3 py-3 text-sm md:text-lg leading-5 rounded-md font-semibold text-white"
      type="submit"
    >
      Sign in
    </Button>
  );
}

export function SubmitButton() {
  const {pending} = useFormStatus();

  return (
    <>
      {pending ? <Loading/> : <ButtonForm/>}
    </>
  );
}

export function Loading() {
  return (
    <Button
      className="bg-[#024164] hover:bg-[#03679d] w-full px-3 py-3 text-sm md:text-lg leading-5 rounded-md font-semibold text-white"
      disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
      Please wait
    </Button>
  )
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, initialState)
  return (
    <div>
      <form action={formAction}>
        <div className="md:mt-4">
          <label htmlFor="username"
                 className="block md:text-lg min-[300px]:text-base font-medium text-slate-700">
            Username
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="username"
              id="username"
              className="text-sm md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mt-4 md:mt-6">
          <label htmlFor="password" className="block md:text-lg text-base font-medium text-slate-700">
            Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="text-sm md:text-base px-3 py-2 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-600 focus:ring-sky-600 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <SubmitButton/>
        </div>
      </form>
      <div>
        <p className="mt-1 md:mt-2 text-sm md:text-base text-red-500">
          {state?.message}
        </p>
      </div>
    </div>
  );
}