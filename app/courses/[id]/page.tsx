'use client';
import {useParams} from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return <>
    <div className="course-page flex h-screen">
      <aside className="course-sidebar bg-gray-200 w-64 overflow-auto p-4">
      <h2 className="text-xl font-bold mb-4">Advanced React</h2>
        <label htmlFor="course-mat" className="font-bold p-4">Course Materials:</label>
        <ul className="space-y-2 course-mat mb-4">
          <li className="mb-4 ml-4">
            <div className="p-2">
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
            </div>
            <div className="p-2">
            <button
              className="border border-black rounded-sm p-2 bg-white flex items-center justify-center w-full"
              onClick={() => setShow2(!show2)}
            >
              <div className="flex items-center space-x-2">
                <div className="course-item">Week 2</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-chevron-down transition-transform duration-200 ${show2 ? 'rotate-180' : ''}`}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </button>
            {show2 && (
              <div className="bg-white">
                <div className="course-items p-2">
                  <p>HTML and JSX basics</p>
                </div>
                <div className="course-items p-2">
                  <p>CSS and Tailwind</p>
                </div>
                <div className="course-items p-2">
                  <p>Advance JavaScript with ES7+ concepts</p>
                </div>
              </div>
            )}
            </div>
            <div className="p-2">
            <button
              className="border border-black rounded-sm p-2 bg-white flex items-center justify-center w-full"
              onClick={() => setShow3(!show3)}
            >
              <div className="flex items-center space-x-2">
                <div className="course-item">Week 3</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-chevron-down transition-transform duration-200 ${show3 ? 'rotate-180' : ''}`}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </button>
            {show3 && (
              <div className="bg-white">
                <div className="course-items p-2">
                  <p>Routing in ReactJS</p>
                </div>
                <div className="course-items p-2">
                  <p>Hooks in React JS part-1</p>
                </div>
                <div className="course-items p-2">
                  <p>Hooks in React JS part-2</p>
                </div>
                <div className="course-items p-2">
                  <p>Hooks in React JS part-3</p>
                </div>
              </div>
            )}
            </div>
            <div className="p-2">
            <button
              className="border border-black rounded-sm p-2 bg-white flex items-center justify-center w-full"
              onClick={() => setShow4(!show4)}
            >
              <div className="flex items-center space-x-2">
                <div className="course-item">Week 4</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-chevron-down transition-transform duration-200 ${show4 ? 'rotate-180' : ''}`}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </button>
            {show4 && (
              <div className="bg-white">
              <div className="course-items p-2">
                <p>Final Project Discussion</p>
              </div>
              <div className="course-items p-2">
                <p>Read the dependencies needed for project</p>
              </div>
              <div className="course-items p-2">
                <p>Submit the project</p>
              </div>
            </div>
            )}
            </div>
          </li>
          <li className="font-bold p-4">
            Grades
          </li>
          <li className="font-bold p-4">
            Notes
          </li>
          <li className="font-bold p-4">
            Discussion Forum
          </li>
          <li className="font-bold p-4">
            Messages <span className="inline-flex items-center justify-center ms-2 text-sm font-semibold bg-blue-500 text-white rounded-full w-6 h-6">3</span>
          </li>
          <li className="font-bold p-4">
            Course Info
          </li>
        </ul>
      </aside>
      <main className="course-content flex-grow px-4 py-8">
        <div className="bg-gray-300 p-4"> <span className="text-blue-500">Advanced React / Week 1 / </span> What is React </div>
        <h1 className="text-2xl font-bold mb-4 flex text-center justify-center">Advanced React</h1>
        <div className="bg-black w-full h-[75%]"> </div>
      </main>
      </div>
      </>
}