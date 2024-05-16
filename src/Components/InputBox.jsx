import React from 'react'

const InputBox = ({
    name,
    id,
    placeholder = "",
    label,
    onChange,
    value,
    type = "text",
    errorMessage = "",
    onBlur = () => { },
}) => {
    return (
        <div className={`relative z-0 w-full ${errorMessage ? 'mb-2' : 'mb-5'} group`}>
            <input
                type={type}
                name={name}
                id={id}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${errorMessage ? 'border-red-500' : 'border-gray-300'} appearance-none dark:text-black dark:${errorMessage ? 'border-red-500' : 'border-gray-300'} dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
            <label
                htmlFor={id}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {label}
            </label>
            {errorMessage && <small className='text-red-600'>{errorMessage}</small>}
        </div>
    )
}

export default InputBox