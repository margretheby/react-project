import { useState } from 'react';
import { useForm } from 'react-hook-form'

function ContactForm() {
    const [ fullName, setFullName ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ body, setBody ] = useState('')

    // Not finished
    function SubmitMessage() {
        if (onFormSubmit) {
            return <div>Success!</div> 
        } else {
            return <div>Ooobs, something went wrong!</div>
        }
    }

    function onFormSubmit(event) {
        event.preventDefault();
        if(onFormSubmit) {
            return <SubmitMessage/>
        }
    }

    function onTextInputChange(event) {
        const value = event.target.value;
        if (event.target.name === 'first-name') {
            setFullName(event.target.value);
        }
        if (event.target.name === 'subject') {
            setSubject(event.target.value);
        }
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        }
        if (event.target.name === 'subject') {
            setBody(event.target.value); 
        }
    }

    return (
        <div className='bg-pink max-w-fit mt-10 mb-16'>
            <form onSubmit={onFormSubmit} className='flex flex-col py-3 px-5'>
                <label htmlFor="full-name">Full name</label>
                <input value={fullName} type="text" name="full-name" placeholder="Your full name" className='mb-4 p-1' required
                onChange={onTextInputChange} />
                <label htmlFor="subject">Subject</label>
                <input value={subject} type="text" name="subject" placeholder="Subject" className='mb-4 p-1' required
                onChange={onTextInputChange} />
                <label htmlFor="email">Email</label>
                <input value={email} type="email" name="email" placeholder="Your email" className='mb-4 p-1' required
                onChange={onTextInputChange} />
                <label htmlFor="body">Body</label>
                <input value={body} type="text" name="body" placeholder="Your message" className='mb-2 p-1' required
                onChange={onTextInputChange} />
                <div className='flex justify-center'>
                    <button className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-6 font-semibold'>Submit form</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;