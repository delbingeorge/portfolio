import React, { useState } from 'react'
import { useMode } from '../ModeProvider'

// function Footer() {
//      const { mode } = useMode()
//      const [formData, setFormData] = useState({
//           firstName: '',
//           lastName: '',
//           emailAddress: '',
//           query: '',
//      });

//      const handleSubmit = (event) => {
//           event.preventDefault();

//           // Prepare the form data for submission
//           const { firstName, lastName, emailAddress, query } = formData;
//           const formDataToSubmit = new FormData();
//           formDataToSubmit.append('entry.1647486576', firstName);
//           formDataToSubmit.append('entry.2102846817', lastName);
//           formDataToSubmit.append('entry.1414332647', emailAddress);
//           formDataToSubmit.append('entry.476994948', query);

//           // Send the form data to Google Forms via Fetch
//           fetch('https://docs.google.com/forms/d/e/1FAIpQLSdjWmy1ztqRfHvxM8OmH92RXrIgDsAGHE6VNQXuA76QUvx5oA/formResponse', {
//                method: 'POST',
//                body: formDataToSubmit,
//           })
//                .then((response) => {
//                     if (response.ok) {
//                          // Form submission was successful; you can handle this as needed
//                          console.log('Form submitted successfully');
//                     } else {
//                          // Handle submission error
//                          console.error('Form submission error');
//                     }
//                })
//                .catch((error) => {
//                     // Handle any network errors
//                     console.error('Network error:', error);
//                });
//      };

//      const handleChange = (event) => {
//           const { name, value } = event.target;
//           setFormData({
//                ...formData,
//                [name]: value,
//           });
//      };
//      return (
//           // <footer className='flex justify-center items-center py-8'>
//           //      <h1 className='font-mono-space text-xl md:text-2xl text-center font-bold'>
//           //           <span className={`${mode == "light" ? "'text-[#535353]" : "'text-[#535353]"}`}>
//           //                Connect me via mail
//           //           </span>
//           //           {" "}
//           //           <a className={`${mode == "light" ? "'text-[#535353]" : "'text-[#535353]"}`} href='mailto:imdelbingeorge@gmail.com'>
//           //                @imdelbingeorge@gmail.com
//           //           </a>
//           //      </h1>
//           // </footer>
//           <>
//                <footer className='flex justify-center items-center pt-16 pb-12 font-mono-space'>
//                     <form action="https://docs.google.com/forms/d/e/1FAIpQLSdjWmy1ztqRfHvxM8OmH92RXrIgDsAGHE6VNQXuA76QUvx5oA/formResponse" className='grid grid-cols-2 gap-3 w-3/4 place-items-end'>
//                          <div className='col-span-2'>
//                               <h1 className='text-2xl font-bold'>
//                                    Contact Me
//                               </h1>
//                          </div>

//                          <input className='input ' placeholder='First Name' required type="text" name="entry.1647486576" value={formData.firstName}
//                               onChange={handleChange} id="" />
//                          <input className='input' placeholder='Last Name' required type="text" name="entry.2102846817" value={formData.lastName}
//                               onChange={handleChange} id="" />

//                          <input className='input col-span-2' placeholder='Email Address' required type="text" name="entry.1414332647" value={formData.emailAddress} onChange={handleChange} id="" />
//                          <textarea name="entry.476994948" className='input col-span-2' id="" cols="5" rows="3" placeholder='Add your query here!' value={formData.query} onChange={handleChange} ></textarea>
//                          <input className='bg-light-mode-primary border-[3px] w-2/4 border-dark-mode-secondary text-dark-mode-primary text-xl py-3 rounded-xl cursor-pointer' type="reset" value="Clear" />
//                          <input className='bg-dark-mode-primary w-full border-[3px] border-dark-mode-secondary text-light-mode-primary text-xl py-3 rounded-xl cursor-pointer col-start-2' type="submit" value="Submit" />
//                     </form>
//                </footer>
//           </>
//      )
// }

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
                         setToast(true);
                    } else {
                         setToast(false);
                    }
               })
               .catch((error) => {
                    console.error('Network error:', error);
               });
     };

     const handleChange = (event) => {
          const { name, value } = event.target;
          setFormData({
               ...formData,
               [name]: value,
          });
     };

     return (
          <div className='relative'>
               <footer className='flex flex-col justify-center items-start pt-16 pb-12 font-mono-space relative'>
                    <div className='pb-5'>
                         <h1 className='text-2xl font-bold'>
                              Submit your query!
                         </h1>
                    </div>
                    <form className='grid grid-cols-1 lg:grid-cols-2 gap-3 w-full lg:place-items-end' onSubmit={handleSubmit}>
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
                    </form>
               </footer>
          </div>
     );
}

export default Footer
