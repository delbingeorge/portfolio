import React, { useState } from 'react'
import { useMode } from '../ModeProvider'

function Footer() {
     const { mode } = useMode()
     const [formData, setFormData] = useState({
          firstName: '',
          lastName: '',
          emailAddress: '',
          query: '',
     });

     const [toast, setToast] = useState(false)

     const handleSubmit = (event) => {
          event.preventDefault();

          const { firstName, lastName, emailAddress, query } = formData;
          const formDataToSubmit = new FormData();
          formDataToSubmit.append('entry.1647486576', firstName);
          formDataToSubmit.append('entry.2102846817', lastName);
          formDataToSubmit.append('entry.1414332647', emailAddress);
          formDataToSubmit.append('entry.476994948', query);

          fetch('https://docs.google.com/forms/d/e/1FAIpQLSdjWmy1ztqRfHvxM8OmH92RXrIgDsAGHE6VNQXuA76QUvx5oA/formResponse', {
               method: 'POST',
               body: formDataToSubmit,
          })
               .then((response) => {
                    if (response.ok) {
                    } else {
                         setToast(false);
                    }
               })
               .catch(() => {
                    setFormData({
                         firstName: '',
                         lastName: '',
                         emailAddress: '',
                         query: '',
                    });
                    setToast(true);
               });
     };

     const handleChange = (event) => {
          const { name, value } = event.target;
          setFormData({
               ...formData,
               [name]: value,
          });
     };

     if (toast == true) {
          setTimeout(() => {
               setToast(false)
          }, 5000)
     }

     return (
          <footer className='flex flex-col justify-center items-start pt-16 pb-12 font-mono-space relative'>
               <div className='pb-5'>
                    <h1 className='text-2xl font-bold'>
                         Submit your query!
                    </h1>
               </div>
               <form className='grid grid-cols-1 lg:grid-cols-2 gap-y-2 lg:gap-2  w-full lg:place-items-end' onSubmit={handleSubmit}>
                    <input
                         className={`${mode == "dark" ? "input-dark" : "input"}`}
                         placeholder='First Name'
                         required
                         type='text'
                         name='firstName'
                         value={formData.firstName}
                         onChange={handleChange}
                    />
                    <input
                         className={`${mode == "dark" ? "input-dark" : "input"}`}
                         placeholder='Last Name'
                         required
                         type='text'
                         name='lastName'
                         value={formData.lastName}
                         onChange={handleChange}
                    />
                    <input
                         className={`col-span-2 ${mode == "dark" ? "input-dark" : "input"}`}
                         placeholder='Email Address'
                         required
                         type='email'
                         name='emailAddress'
                         value={formData.emailAddress}
                         onChange={handleChange}
                    />
                    <textarea
                         required
                         name='query'
                         className={`col-span-2 ${mode == "dark" ? "input-dark" : "input"}`}
                         cols='5'
                         rows='3'
                         placeholder='Add your query here!'
                         value={formData.query}
                         onChange={handleChange}
                    />
                    <input
                         className={`w-full lg:w-2/4 border-[3px] text-xl py-3 rounded-xl cursor-pointer lg:col-start-2 ${mode == "dark" ? "bg-dark-mode-secondary  border-light-mode-secondary/20 text-light-mode-primary/80 " : "bg-dark-mode-primary border-dark-mode-secondary text-light-mode-primary"}`}
                         type='submit'
                         value='Submit'
                    />
                    {
                         (toast == true) ? (
                              <div className='flex items-center justify-center col-span-2 py-3'>
                                   <div className="pl-4 text-xl font-normal">Query sent successfully.</div>
                              </div>
                         ) : ("")
                    }
               </form>
               <div><h1>Last update: 07.30.2024</h1></div>
          </footer>
     );
}

export default Footer
