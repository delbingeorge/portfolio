import React from 'react'
import { useMode } from '../ModeProvider';
import { Link } from 'react-router-dom';
function Article() {
  const { data } = useMode();

  if (data) {
    return (
      <div className='bg-dark-mode-primary bg-read-more bg-cover text-light-mode-primary min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-mono-space'>No article found!</h1>
        <Link to='/' className='text-xl font-mono-space'>Go Back</Link>
      </div>
    )
  }

  return (
    <div className='font-mono-space'>
      <div className="min-h-screen overflow-y-scroll">
        <div className="mx-8 lg:mx-40">
          <div className='pt-4 md:pt-8 flex items-center justify-between'>
            <Link to='/' className='text-xl font-bold'>Go Back</Link>
          </div>
          <div className="">
            <div className='pt-8 pb-4 space-y-4'>
              <h1 className="text-[3.5rem] font-bold tracking-tighter leading-[3.3rem]">

              </h1>

            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-[1.35rem] font-semibold">Introduction </h2>
                <p className="text-[1.20rem] text-justify">

                </p>
              </div>
              <div>
                <h2 className="text-[1.35rem] font-semibold">My Role</h2>
                <p className="text-[1.20rem] text-justify">

                </p>
              </div>
              <div>
                <h2 className="text-[1.35rem] font-semibold">Problem Statement</h2>
                <p className="text-[1.20rem] text-justify">

                </p>
              </div>
              <div>
                <h2 className="text-[1.35rem] font-semibold">Problem Solution</h2>
                <p className="text-[1.20rem] text-justify">

                </p>
              </div>
              <div>
                <h2 className="text-[1.35rem] font-semibold">Objectives & Goals</h2>
                <p className="text-[1.20rem] text-justify">

                </p>
              </div>
              <div>
                <h2 className="text-[1.35rem] font-semibold">Business challenges</h2>
                <ul className="text-[1.20rem] list-disc list-inside">
                  <ul>

                  </ul>
                </ul>
              </div>
              <div>
                <h2 className="text-[1.35rem] font-semibold">Competitor analysis</h2>
                <p className="text-[1.20rem] text-justify">

                </p>
                <div>
                  <h2 className="text-[1.35rem] font-semibold">Product Users</h2>
                  <ul className="text-[1.20rem] list-disc list-inside">

                  </ul>
                </div>
                <div>
                  <h2 className="text-[1.35rem] font-semibold">User Needs</h2>
                  <ul className="text-[1.20rem] list-disc list-inside">

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Article;
