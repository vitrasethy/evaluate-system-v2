'use client'
import React, { useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import Image from "next/image";

function HtmlToImageToPdf() {
  const htmlRef = useRef(null);

  // const handleDownload = () => {
  //   // Check if the ref is currently pointing to an HTMLElement
  //   if (htmlRef.current) {
  //     // convert the html to a png image
  //     html2canvas(htmlRef.current).then((canvas:HTMLCanvasElement) => {
  //       // create a pdf document
  //       const pdf = new jsPDF("l", "mm", "a4");
  
  //       // get the image data
  //       const imgData = canvas.toDataURL("image/png");
  
  //       // get the image width and height
  //       const imgWidth = 210;
  //       const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  //       // add the image as a page
  //       pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  
  //       // download the pdf
  //       pdf.save("download.pdf");
  //     });
  //   }
  // };
  
  const handleDownload = () => {
    // Check if the ref is currently pointing to an HTMLElement
    if (htmlRef.current) {
      // convert the html to a png image
      html2canvas(htmlRef.current).then((canvas:HTMLCanvasElement) => {
        // create a pdf document
        const pdf = new jsPDF("l", "mm", "a4");
  
        // get the image data
        const imgData = canvas.toDataURL("image/png");
  
        // get the width and height of the PDF document
        // const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfWidth = window.innerWidth * 0.2645833333;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
        // add the image as a page
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  
        // download the pdf
        pdf.save("download.pdf");
      });
    }
  };
  
  return (
    <div>
      <div ref={htmlRef}>
      <section className="bg-[url('/ctf.png')] bg-contain w-[1132px] h-[803px] bg-no-repeat">
        <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-2xl font-semibold">6th ENGINEERING DAY</p>
                    <p>AWARDS 2023</p>
                    <p>CERTIFICATE OF APPRECIATION</p>
                    <p>is hereby awarded to</p>
                    <p>MR. SOKHA RITHY</p>
                    <p className="w-[50%]">in recognition for winning the 1st Award for top project entitled <span>"Aleo Vera: Production & Processing"</span></p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p>ទិវាវិស្វកម្មលើកទី៦</p>
                    <p>ជ័យលាភីឆ្នាំ២០២៣</p>
                    <p>ប័ណ្ណសរសើរ</p>
                    <p>ជូនចំពោះ</p>
                    <p>លោក សុខា រិទ្ធី</p>
                    <p className="w-[50%]">ដែលទទួលបានជ័យលាភីគម្រោងឆ្នើមលេខ ១ ក្រោមប្រធាមបទ<span>"Aleo Vera: Production & Processing"</span></p>
                </div>
            </div>
        </div>
        </section>
      </div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}

export default HtmlToImageToPdf;
