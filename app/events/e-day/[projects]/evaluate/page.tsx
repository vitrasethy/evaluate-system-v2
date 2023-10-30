import React from 'react'
import Image from 'next/image'

export default function evaluate() {

    return (
        <main className='md:mx-[3%] mt-[3%]'>
            <div className='h-auto flex justify-center'>
                <div
                    className="w-screen xl:w-[70%] p-6 bg-white border-2 border-gray-300 rounded-lg shadow sm:p-6 md:p-16">
                    <form className="space-y-6" action="#">

                        <div className='flex flex-wrap justify-around items-center '>
                            <div>
                                <Image alt='' src="/bgcol.png" width={400} height={400}/>
                            </div>
                            <div>
                                <h2 className="my-4 text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#024164] to-[#025886] text-center drop-shadow-[3px_1px_rgba(2,65,100,0.3)] ">EVALUATION
                                    FORM</h2>
                                <div className='font-semibold md:text-xl'>
                                    <p>Project Code: </p>
                                    <p>Project Name: A NEW MODEL FOR</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className='flex justify-around max-md:flex-wrap items-center bg-[#f7f9f9] border-2 border-gray-300 my-10 sm:p-4 md:px-6'>
                            <div className='md:w-1/2'>
                                <h2 className="text-2xl sm:text-3xl p-2.5 font-bold text-gray-900">JUDGING CRITERIA</h2>
                            </div>
                            <div className='md:w-1/2 w-full block'>
                                <p className='text-2xl font-semibold max-md:text-center md:p-2.5'>Evaluation</p>
                                <div
                                    className='flex justify-around gap-2 text-sm sm:text-md text-white text-center p-2.5'>
                                    <p className='bg-[#014164] py-2 flex flex-col w-[25%] rounded-sm'>Superior <span>10-9</span>
                                    </p>
                                    <p className='bg-[#014164] py-2 flex flex-col w-[25%] rounded-sm'>Excellent <span>8-7</span>
                                    </p>
                                    <p className='bg-[#014164] py-2 flex flex-col w-[25%] rounded-sm'>Good <span>6-5</span>
                                    </p>
                                    <p className='bg-[#014164] py-2 flex flex-col w-[25%] rounded-sm'>Fair <span>4-3</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className='flex justify-around items-center border-2 border-sky-700 py-4 px-6 bg-[#014164] text-white rounded-md'>
                            <h4 className='text-lg font-bold w-1/2 p-2.5'>Technical Quality</h4>
                            <h4 className='text-lg font-bold text-center w-1/2'>70%(Point)</h4>
                        </div>
                        <div
                            className='md:flex md:justify-around my-10 p-4 sm:px-6 rounded-lg bg-[#f7f9f9] border-2 border-gray-300 '>
                            <div className='md:w-1/2'>
                                <h2 className="text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5">Introduction/
                                    Background/ literature
                                    (clear)</h2>
                            </div>
                            <ul className="flex items-center gap-1 md:gap-2 justify-center mt-4 md:mt-0 mb-4 md:mb-0">
                                <li>
                                    <input type="radio" id="number10" name="hosting" value="10" className="hidden peer"
                                           required/>
                                    <label htmlFor="number10"
                                           className=" p-2 sm:p-4 md:p-3 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        10
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number9" name="hosting" value="9" className="hidden peer"
                                           required/>
                                    <label htmlFor="number9"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        9
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number8" name="hosting" value="8" className="hidden peer"
                                           required/>
                                    <label htmlFor="number8"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        8
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number7" name="hosting" value="7" className="hidden peer"
                                           required/>
                                    <label htmlFor="number7"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        7
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number6" name="hosting" value="6" className="hidden peer"
                                           required/>
                                    <label htmlFor="number6"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        6
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number5" name="hosting" value="5" className="hidden peer"
                                           required/>
                                    <label htmlFor="number5"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        5
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number4" name="hosting" value="4" className="hidden peer"
                                           required/>
                                    <label htmlFor="number4"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        4
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number3" name="hosting" value="3" className="hidden peer"
                                           required/>
                                    <label htmlFor="number3"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        3
                                    </label>
                                </li>
                            </ul>

                        </div>
                        <div
                            className='md:flex md:justify-around my-10 p-4 sm:px-6 rounded-lg bg-[#f7f9f9] border-2 border-gray-300'>
                            <div className='md:w-1/2'>
                                <h2 className="text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5">Objective
                                    clearly stated & concise</h2>
                            </div>
                            <ul className="flex items-center gap-1 md:gap-2 justify-center mt-4 md:mt-0 mb-4 md:mb-0">
                                <li>
                                    <input type="radio" id="number20" name="hosting2" value="10" className="hidden peer"
                                           required/>
                                    <label htmlFor="number20"
                                           className="p-2 sm:p-4 md:p-3 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        10
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number19" name="hosting2" value="9" className="hidden peer"
                                           required/>
                                    <label htmlFor="number19"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        9
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number18" name="hosting2" value="8" className="hidden peer"
                                           required/>
                                    <label htmlFor="number18"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        8
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number17" name="hosting2" value="7" className="hidden peer"
                                           required/>
                                    <label htmlFor="number17"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        7
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number16" name="hosting2" value="6" className="hidden peer"
                                           required/>
                                    <label htmlFor="number16"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        6
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number15" name="hosting2" value="5" className="hidden peer"
                                           required/>
                                    <label htmlFor="number15"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        5
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number14" name="hosting2" value="4" className="hidden peer"
                                           required/>
                                    <label htmlFor="number14"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        4
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number13" name="hosting2" value="3" className="hidden peer"
                                           required/>
                                    <label htmlFor="number13"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        3
                                    </label>
                                </li>


                            </ul>
                        </div>
                        <div
                            className='md:flex md:justify-around my-10 p-4 sm:px-6 rounded-lg bg-[#f7f9f9] border-2 border-gray-300'>
                            <div className='md:w-1/2'>
                                <h2 className="text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5">Approach/method/study
                                    design/Materials
                                    (new, clear & concise)</h2>
                            </div>
                            <ul className="flex items-center gap-1 md:gap-2 justify-center mt-4 md:mt-0 mb-4 md:mb-0">
                                <li>
                                    <input type="radio" id="number30" name="hosting3" value="10" className="hidden peer"
                                           required/>
                                    <label htmlFor="number30"
                                           className="p-2 sm:p-4 md:p-3 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        10
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number29" name="hosting3" value="9" className="hidden peer"
                                           required/>
                                    <label htmlFor="number29"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        9
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number28" name="hosting3" value="8" className="hidden peer"
                                           required/>
                                    <label htmlFor="number28"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        8
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number27" name="hosting3" value="7" className="hidden peer"
                                           required/>
                                    <label htmlFor="number27"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        7
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number26" name="hosting3" value="6" className="hidden peer"
                                           required/>
                                    <label htmlFor="number26"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        6
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number25" name="hosting3" value="5" className="hidden peer"
                                           required/>
                                    <label htmlFor="number25"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        5
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number24" name="hosting3" value="4" className="hidden peer"
                                           required/>
                                    <label htmlFor="number24"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        4
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number23" name="hosting3" value="3" className="hidden peer"
                                           required/>
                                    <label htmlFor="number23"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        3
                                    </label>
                                </li>


                            </ul>
                        </div>
                        <div
                            className='md:flex md:justify-around my-10 p-4 sm:px-6 rounded-lg bg-[#f7f9f9] border-2 border-gray-300'>
                            <div className='md:w-1/2'>
                                <h2 className="text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5">Novel
                                    approach/method/study
                                    design/Materials</h2>
                            </div>
                            <ul className="flex items-center gap-1 md:gap-2 justify-center mt-4 md:mt-0 mb-4 md:mb-0">
                                <li>
                                    <input type="radio" id="40" name="hosting4" value="10" className="hidden peer"
                                           required/>
                                    <label htmlFor="40"
                                           className="p-2 sm:p-4 md:p-3 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        10
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number39" name="hosting4" value="9" className="hidden peer"
                                           required/>
                                    <label htmlFor="number39"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        9
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number38" name="hosting4" value="8" className="hidden peer"
                                           required/>
                                    <label htmlFor="number38"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        8
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number37" name="hosting4" value="7" className="hidden peer"
                                           required/>
                                    <label htmlFor="number37"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        7
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number36" name="hosting4" value="6" className="hidden peer"
                                           required/>
                                    <label htmlFor="number36"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        6
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number35" name="hosting4" value="5" className="hidden peer"
                                           required/>
                                    <label htmlFor="number35"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        5
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number34" name="hosting4" value="4" className="hidden peer"
                                           required/>
                                    <label htmlFor="number34"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        4
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number33" name="hosting4" value="3" className="hidden peer"
                                           required/>
                                    <label htmlFor="number33"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        3
                                    </label>
                                </li>


                            </ul>

                        </div>
                        <div
                            className='md:flex md:justify-around my-10 p-4 sm:px-6 rounded-lg bg-[#f7f9f9] border-2 border-gray-300'>
                            <div className='md:w-1/2'>
                                <h2 className="text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5">Analysis
                                    and Interpretation</h2>
                            </div>
                            <ul className="flex items-center gap-1 md:gap-2 justify-center mt-4 md:mt-0 mb-4 md:mb-0">
                                <li>
                                    <input type="radio" id="number50" name="hosting5" value="10" className="hidden peer"
                                           required/>
                                    <label htmlFor="number50"
                                           className="p-2 sm:p-4 md:p-3 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        10
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number49" name="hosting5" value="9" className="hidden peer"
                                           required/>
                                    <label htmlFor="number49"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        9
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number48" name="hosting5" value="8" className="hidden peer"
                                           required/>
                                    <label htmlFor="number48"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        8
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number47" name="hosting5" value="7" className="hidden peer"
                                           required/>
                                    <label htmlFor="number47"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        7
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number46" name="hosting5" value="6" className="hidden peer"
                                           required/>
                                    <label htmlFor="number46"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        6
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number45" name="hosting5" value="5" className="hidden peer"
                                           required/>
                                    <label htmlFor="number45"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        5
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number44" name="hosting5" value="4" className="hidden peer"
                                           required/>
                                    <label htmlFor="number44"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        4
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number43" name="hosting5" value="3" className="hidden peer"
                                           required/>
                                    <label htmlFor="number43"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        3
                                    </label>
                                </li>


                            </ul>
                        </div>
                        <div
                            className='md:flex md:justify-around my-10 p-4 sm:px-6 rounded-lg bg-[#f7f9f9] border-2 border-gray-300'>
                            <div className='md:w-1/2'>
                                <h2 className="text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5">Demonstrate
                                    significance of topic in
                                    Science/Engineering and draws conclusions
                                    (clear, concise, & accurate)</h2>
                            </div>
                            <ul className="flex items-center gap-1 md:gap-2 justify-center mt-4 md:mt-0 mb-4 md:mb-0">
                                <li>
                                    <input type="radio" id="number60" name="hosting6" value="10" className="hidden peer"
                                           required/>
                                    <label htmlFor="number60"
                                           className="p-2 sm:p-4 md:p-3 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        10
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number59" name="hosting6" value="9" className="hidden peer"
                                           required/>
                                    <label htmlFor="number59"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        9
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number58" name="hosting6" value="8" className="hidden peer"
                                           required/>
                                    <label htmlFor="number58"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        8
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number57" name="hosting6" value="7" className="hidden peer"
                                           required/>
                                    <label htmlFor="number57"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        7
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number56" name="hosting6" value="6" className="hidden peer"
                                           required/>
                                    <label htmlFor="number56"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        6
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number55" name="hosting6" value="5" className="hidden peer"
                                           required/>
                                    <label htmlFor="number55"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        5
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number54" name="hosting6" value="4" className="hidden peer"
                                           required/>
                                    <label htmlFor="number54"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        4
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number53" name="hosting6" value="3" className="hidden peer"
                                           required/>
                                    <label htmlFor="number53"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        3
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div
                            className='flex justify-around items-center border-2 py-4 px-6 bg-[#014164] border-sky-700 text-white rounded-md'>
                            <h4 className='text-lg font-bold w-1/2 p-2.5'> Clarity of Presentation </h4>
                            <h4 className='text-lg font-bold text-center w-1/2'>30%(Point)</h4>
                        </div>
                        <div
                            className='md:flex md:justify-around my-10 p-4 sm:px-6 rounded-lg bg-[#f7f9f9] border-2 border-gray-300'>
                            <div className='md:w-1/2'>
                                <h2 className="text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5">Presentation
                                    and written materials are
                                    clear, appropriate, and organized</h2>
                            </div>
                            <ul className="flex items-center gap-1 md:gap-2 justify-center mt-4 md:mt-0 mb-4 md:mb-0">
                                <li>
                                    <input type="radio" id="number70" name="hosting7" value="10" className="hidden peer"
                                           required/>
                                    <label htmlFor="number70"
                                           className="p-2 sm:p-4 md:p-3 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        10
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number69" name="hosting7" value="9" className="hidden peer"
                                           required/>
                                    <label htmlFor="number69"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        9
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number68" name="hosting7" value="8" className="hidden peer"
                                           required/>
                                    <label htmlFor="number68"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        8
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number67" name="hosting7" value="7" className="hidden peer"
                                           required/>
                                    <label htmlFor="number67"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        7
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number66" name="hosting7" value="6" className="hidden peer"
                                           required/>
                                    <label htmlFor="number66"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        6
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number65" name="hosting7" value="5" className="hidden peer"
                                           required/>
                                    <label htmlFor="number65"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        5
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number64" name="hosting7" value="4" className="hidden peer"
                                           required/>
                                    <label htmlFor="number64"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        4
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number63" name="hosting7" value="3" className="hidden peer"
                                           required/>
                                    <label htmlFor="number63"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        3
                                    </label>
                                </li>


                            </ul>

                        </div>
                        <div
                            className='md:flex md:justify-around my-10 p-4 sm:px-6 rounded-lg bg-[#f7f9f9] border-2 border-gray-300'>
                            <div className='md:w-1/2'>
                                <h2 className="text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5">Presentation
                                    is creative and original, and
                                    has visual impact (effective use of figure,
                                    table, diagram, video, animation)</h2>
                            </div>
                            <ul className="flex items-center gap-1 md:gap-2 justify-center mt-4 md:mt-0 mb-4 md:mb-0">
                                <li>
                                    <input type="radio" id="number80" name="hosting8" value="10" className="hidden peer"
                                           required/>
                                    <label htmlFor="number80"
                                           className="p-2 sm:p-4 md:p-3 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        10
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number79" name="hosting8" value="9" className="hidden peer"
                                           required/>
                                    <label htmlFor="number79"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        9
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number78" name="hosting8" value="8" className="hidden peer"
                                           required/>
                                    <label htmlFor="number78"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        8
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number77" name="hosting8" value="7" className="hidden peer"
                                           required/>
                                    <label htmlFor="number77"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        7
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number76" name="hosting8" value="6" className="hidden peer"
                                           required/>
                                    <label htmlFor="number76"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        6
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number75" name="hosting8" value="5" className="hidden peer"
                                           required/>
                                    <label htmlFor="number75"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        5
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number74" name="hosting8" value="4" className="hidden peer"
                                           required/>
                                    <label htmlFor="number74"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        4
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number73" name="hosting8" value="3" className="hidden peer"
                                           required/>
                                    <label htmlFor="number73"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        3
                                    </label>
                                </li>


                            </ul>
                        </div>
                        <div
                            className='md:flex md:justify-around my-10 p-4 sm:px-6 rounded-lg bg-[#f7f9f9] border-2 border-gray-300'>
                            <div className='md:w-1/2'>
                                <h2 className="text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5">Answer/explanation
                                    to audience questions
                                    (short & clear) (* skip it htmlFor poster
                                    evaluation)</h2>
                            </div>
                            <ul className="flex items-center gap-1 md:gap-2 justify-center mt-4 md:mt-0 mb-4 md:mb-0">
                                <li>
                                    <input type="radio" id="number90" name="hosting9" value="10" className="hidden peer"
                                           required/>
                                    <label htmlFor="number90"
                                           className="p-2 sm:p-4 md:p-3 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        10
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number89" name="hosting9" value="9" className="hidden peer"
                                           required/>
                                    <label htmlFor="number89"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        9
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number88" name="hosting9" value="8" className="hidden peer"
                                           required/>
                                    <label htmlFor="number88"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        8
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number87" name="hosting9" value="7" className="hidden peer"
                                           required/>
                                    <label htmlFor="number87"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        7
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number86" name="hosting9" value="6" className="hidden peer"
                                           required/>
                                    <label htmlFor="number86"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        6
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number85" name="hosting9" value="5" className="hidden peer"
                                           required/>
                                    <label htmlFor="number85"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        5
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number84" name="hosting9" value="4" className="hidden peer"
                                           required/>
                                    <label htmlFor="number84"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        4
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="number83" name="hosting9" value="3" className="hidden peer"
                                           required/>
                                    <label htmlFor="number83"
                                           className="py-2 px-3 sm:py-4 sm:px-5 md:py-3 md:px-4 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-full cursor-pointer">
                                        3
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <label
                            className='flex max-md:flex-wrap justify-around items-center border-2 p-4 bg-[#f7f9f9] border-gray-300 rounded-lg '>
                            <div className='md:w-2/5 p-2.5 md:text-lg'>
                                <p>COMMENTS:</p>
                            </div>
                            <div className='md:w-1/2'>
                                <textarea name="comment" rows={4} cols={60}
                                          className='border-2 border-gray-400 p-4 w-full'
                                          placeholder='write your comments...'/>
                            </div>
                        </label>
                        <div className='flex justify-end'>
                            <button
                                className='bg-[#024164] hover:bg-[#03679d] px-4 py-4 text-sm md:text-lg leading-5 rounded-md font-semibold text-white'
                                type="submit">Submit Form
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </main>
    )
}
