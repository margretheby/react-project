import { useState } from 'react';

function ContactForm() {
    const [ fullName, setFullName ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ body, setBody ] = useState('')


    function submitMessage() {
        // alert('Success! Your message was sent')
        // window.location.reload();
        const successMessage = 'SUCCESS! Your message was sent'
        return successMessage;
    }

    function onFormSubmit(event) {
        event.preventDefault();

        const contactMessage = {
            fullName,
            subject,
            email,
            body
        }

        console.log(contactMessage)
        alert('Success! Your message was sent.')
        return submitMessage();
        
    }

    function onTextInputChange(event) {
        if (event.target.name === 'full-name') {
            setFullName(event.target.value);
        }
        if (event.target.name === 'subject') {
            setSubject(event.target.value);
        }
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        }
        if (event.target.name === 'body') {
            setBody(event.target.value); 
        }
    }

    return (
        <div className='bg-pink max-w-fit mt-10 mb-16'>
            <form onSubmit={onFormSubmit} className='flex flex-col py-3 px-5'>
                <label htmlFor="full-name">Full name</label>
                <input 
                    value={fullName} 
                    type="text" 
                    name="full-name" 
                    id="full-name"
                    minLength='3' 
                    placeholder="Your full name" 
                    className='mb-4 p-1' 
                    required
                    onChange={onTextInputChange} />
                <label htmlFor="subject">Subject</label>
                <input 
                    value={subject} 
                    type="text" 
                    name="subject"
                    id="subject"
                    minLength='3' 
                    placeholder="Subject" 
                    className='mb-4 p-1' 
                    required
                    onChange={onTextInputChange} />
                <label htmlFor="email">Email</label>
                <input 
                    value={email} 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="Your email" 
                    className='mb-4 p-1' 
                    required
                    onChange={onTextInputChange} />
                <label htmlFor="body">Body</label>
                <textarea 
                    value={body} 
                    type='text' 
                    name="body" 
                    id="body"
                    minLength='3' 
                    placeholder="Your message" 
                    className='mb-2 p-1 h-16 w-46 flex' 
                    required
                    onChange={onTextInputChange} />
                <div className='flex justify-center'>
                    <button className='bg-black text-rose hover:bg-red hover:text-black px-6 py-2 mt-7 mb-6 font-semibold'>Submit form</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;