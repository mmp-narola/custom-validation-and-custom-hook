import React, { useCallback, useEffect, useState } from 'react'

const PasswordGenerate = () => {
    const [password, setPassword] = useState("")
    const [length, setLength] = useState(8)
    const [allowedCharacters, setAlloweCharacters] = useState(false)
    const [allowedNumbers, setAlloweNumbers] = useState(false)


    const generatePassword = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (allowedCharacters) str += "{}[]()@#$%^&*~!"
        if (allowedNumbers) str += "123457980"

        for (let i = 1; i <= length; i++) {
            const character = Math.floor(Math.random(str) * str.length)
            const randomCharacter = str.charAt(character)
            pass = pass + randomCharacter
        }
        setPassword(pass)

    }, [length, allowedCharacters, allowedNumbers, setPassword])

    useEffect(() => {
        generatePassword()
    }, [length, allowedCharacters, allowedNumbers, generatePassword])

    return (
        <div className='flex justify-center items-center'>
            <div className=' w-3/5 bg-slate-600 rounded-md p-5'>

                <div className="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900" placeholder="Password" value={password} />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <button className='bg-slate-900 text-white p-1 rounded-r-md h-full w-24 hover:bg-slate-700'>Copy</button>
                    </div>
                </div>
                <div className='flex gap-5 mt-3'>
                    <div className='flex gap-2'>
                        <input
                            id='length'
                            type='range'
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                        />
                        <label htmlFor="length" className='text-white'>Length({length})</label>
                    </div>
                    <div className='flex gap-2'>
                        <input
                            type='checkbox'
                            value={allowedNumbers}
                            onChange={(e) => setAlloweNumbers(e.target.checked)}
                        />
                        <label htmlFor="length" className='text-white'>Number</label>
                    </div>
                    <div className='flex gap-2'>
                        <input
                            type='checkbox'
                            value={allowedCharacters}
                            onChange={(e) => setAlloweCharacters(e.target.checked)}
                        />
                        <label htmlFor="length" className='text-white'>Character</label>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default PasswordGenerate