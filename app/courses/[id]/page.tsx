'use client';
import {useParams} from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const [show, setShow] = useState(false);

  return <>
    <div className="course-page flex h-screen">
      <aside className="course-sidebar bg-gray-200 w-64 overflow-auto p-4">
      <h2 className="text-xl font-bold mb-4">Advanced React</h2>
        <label htmlFor="course-mat" className="font-bold mb-4">Course Materials:</label>
        <ul className="space-y-2 course-mat mb-4">
          <li className="mb-4 ml-4">
            <button
              className="border border-black rounded-sm p-2 bg-white flex items-center justify-center w-full"
              onClick={() => setShow(!show)}
            >
              <div className="flex items-center space-x-2">
                <div className="course-item">Week 1</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-chevron-down transition-transform duration-200 ${show ? 'rotate-180' : ''}`}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </button>
            {show && (
              <div className="bg-white">
                <div className="course-items p-2">
                  <p>Introduction to course</p>
                </div>
                <div className="course-items p-2">
                  <p>What is React?</p>
                </div>
                <div className="course-items p-2">
                  <p>JavaScript Introduction</p>
                </div>
              </div>
            )}
          </li>
          <li className="font-bold mb-4">
            Grades
          </li>
          <li className="font-bold mb-4">
            Notes
          </li>
          <li className="font-bold mb-4">
            Discussion Forum
          </li>
          <li className="font-bold mb-4">
            Messages
          </li>
          <li className="font-bold mb-4">
            Course Info
          </li>
        </ul>
      </aside>
      <main className="course-content flex-grow px-4 py-8">
        <div className="bg-gray-300 p-4"> <span className="text-blue-500">Advanced React / Week 1 / </span> What is React </div>
        <h1 className="text-2xl font-bold mb-4 flex text-center justify-center">Advance React</h1>
        <div className="bg-black w-full h-[70%]"> </div>
      </main>
      </div>
      </>
}