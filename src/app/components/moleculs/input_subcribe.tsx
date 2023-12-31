'use client'

import { useState } from "react"


export default function Input_Subcribe() {
    const [input,setInput] = useState('')

    return (
    <>
     <div data-element="fields" data-stacked="false" className="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields ">
                        <div className="relative w-full mr-3 formkit-field  ">
                            <label htmlFor="member_email" className="hidden  mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input id="member_email" className="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " name="email_address" aria-label="Email Address" placeholder="Your email address..." required={true} type="email" onChange={(e) => setInput(e.target.value)} />
                        </div>
                        <button  className="formkit-submit" disabled={!input && true}  onClick={()=> alert('terima kasih telah subscribe kami.')}>
                            <div className="formkit-spinner">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <span className={`px-5 py-3 text-sm font-medium text-center text-white bg-yellowBase rounded-lg hover:opacity-90 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${input ? "cursor-pointer" : "cursor-not-allowed"} `}>Subscribe</span>
                        </button>
                    </div>
                    
    </>
     )
}
