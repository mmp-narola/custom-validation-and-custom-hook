import React, { useRef, useState } from 'react'
import InputBox from './InputBox'
import { useRegistrationValidator } from '../Validators/useRegistrationValidator'

const RegistrationForm = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        repeat_password: "",
        first_name: "",
        last_name: "",
        phone: "",
        company: "",
    })
    const { validateForm, onBlurField, errors } = useRegistrationValidator(formData)

    const submitHandler = (e) => {
        e.preventDefault()
        const { isValid } = validateForm({ form: formData, errors, forceTouchErrors: true })

        if (isValid) {
            console.log('formData', formData)
        }
    }

    const changeHandler = (e) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div>
            <div className='text-2xl text-center mb-10'>Registration Form</div>
            <form ref={formRef} className="max-w-md mx-auto" onSubmit={submitHandler}>
                <InputBox
                    name="email"
                    id="floating_email"
                    label="Email address"
                    onChange={changeHandler}
                    onBlur={onBlurField}
                    value={formData.email}
                    errorMessage={errors.email.message}
                />
                <InputBox
                    name="password"
                    id="floating_password"
                    label="Password"
                    onChange={changeHandler}
                    onBlur={onBlurField}
                    value={formData.password}
                    type="password"
                    errorMessage={errors.password.message}
                />
                <InputBox
                    name="repeat_password"
                    id="floating_repeat_password"
                    label="Confirm password"
                    onChange={changeHandler}
                    onBlur={onBlurField}
                    value={formData.repeat_password}
                    type="password"
                    errorMessage={errors.repeat_password.message}
                />
                <div className="grid md:grid-cols-2 md:gap-6">
                    <InputBox
                        name="first_name"
                        id="floating_first_name"
                        label="First name"
                        onChange={changeHandler}
                        onBlur={onBlurField}
                        value={formData.first_name}
                        errorMessage={errors.first_name.message}
                    />
                    <InputBox
                        name="last_name"
                        id="floating_last_name"
                        label="Last name"
                        onChange={changeHandler}
                        onBlur={onBlurField}
                        value={formData.last_name}
                        errorMessage={errors.last_name.message}
                    />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <InputBox
                        name="phone"
                        id="floating_phone"
                        label="Phone number (123-456-7890)"
                        onChange={changeHandler}
                        value={formData.phone}
                    />
                    <InputBox
                        name="company"
                        id="floating_company"
                        label="Company (Ex. Google)"
                        onChange={changeHandler}
                        value={formData.company}
                    />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm