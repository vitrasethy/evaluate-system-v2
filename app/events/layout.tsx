import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function EventLayout({
                                      children,
                                    }: {
  children: React.ReactNode
}) {
  return <section>
    <Navbar/>
    {children}
  </section>
}