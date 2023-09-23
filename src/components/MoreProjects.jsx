import React from 'react'
import { useMode } from '../ModeProvider';
function MoreProjects() {
  const { mode, data } = useMode();
  console.log(data);

  return (
    <div className={`px-6 md:px-28 ${(mode == "light") ? ('bg-light-mode-primary text-dark-mode-primary') : ('bg-dark-mode-primary text-light-mode-primary')}`}>
      <div>
        <div>
          <h1 className='font-mono-space text-4xl font-bold py-8'>Case Studies</h1>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default MoreProjects
