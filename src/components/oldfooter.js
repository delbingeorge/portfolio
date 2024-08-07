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
