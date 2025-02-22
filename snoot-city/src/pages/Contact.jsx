import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

export default function Contact() {

    const [formData, setFormData] = useState({
        'name' : "",
        'email' : "",
        'message' : ""
    })

    const [nameError, setNameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [messageError, setMessageError] = useState(null)

    const [messageCharCount, setMessageCharCount] = useState(0)


    function handleFormInput(e){
        setFormData(prevState => (
            {
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    function handleErrorMessage(){
        if (formData.name.length >= 4){
            setNameError(false)
        } 
        if(formData.message.length >= 50){
            setMessageError(false)
        }
    }

    useEffect(handleErrorMessage, [formData])

    function handleFormSubmit(e){
        e.preventDefault();
        if(formData['name'].length < 4){
            setNameError(true);
        } 
        if(formData['email'] == "" || !formData.includes('@')){
            setEmailError(true);
        }
        if (formData.message.length < 50){
            setMessageError(true);
        }
    }

    function handleMessageCharCount(e){
        if(e.target.value.length <= 50){
        setMessageCharCount(e.target.value.length)
        }
        if(e.target.value.length >= 50){
            
        }
    }

    console.log(formData)

    return (
        <>
            <div className="min-h-[88vh]">
                <div className="max-w-[768px] mx-auto">
                    <h1 className="text-5xl p-2 text-logo-font-color text-center">Contact Us</h1>
                    <p className="p-4">If you have any questions or need assistance, please don’t hesitate to reach out to us.
                        Our team is always happy to help and will get back to you as soon as possible.
                        You can contact us via phone, email, or through our website—we look forward to hearing from you!
                    </p>
                    <div className="grid grid-cols-1 px-4">
                        <p className="py-1">
                            <FontAwesomeIcon icon={faPhone} className="pr-2" /> 012345 567890
                        </p>
                        <p className="py-1">
                            <FontAwesomeIcon icon={faEnvelope} className="pr-2" /> fake@email.com
                        </p>
                    </div>
                    <form onChange={handleFormInput} onSubmit={handleFormSubmit} className="flex flex-col p-4 gap-2">
                        <label htmlFor="name">Name:</label>
                        <input className="border-1 rounded bg-slate-700/10 p-2" placeholder="John Doe" type="text" id="name" name="name" />
                        {nameError && <p className="text-red-500">Name must be atleast 4 characters</p>}
                        <label htmlFor="name">Email:</label>
                        <input className="border-1 rounded bg-slate-700/10 p-2" placeholder="email@example.com" type="email" id="email" name="email" />
                        {emailError && <p className="text-red-500">Must be a valid email address</p>}
                        <label htmlFor="name">Message:</label>
                        <textarea className="border-1 rounded bg-slate-700/10 p-2 h-50" onChange={handleMessageCharCount} placeholder="Your message..." type="text" id="message" name="message" />
                        <div className="grid grid-cols-[5fr_1fr]">
                            {messageError && <p className="text-red-500">Message must be atleast 50 characters</p>}
                            <p className="col-start-2 text-right">{messageCharCount}/50</p>
                        </div>
                        <input className="border-1 rounded bg-slate-700/10 p-2 cursor-pointer" type="submit" value="Submit" name="submitted" />
                    </form>
                </div>
            </div>
        </>
    )
}