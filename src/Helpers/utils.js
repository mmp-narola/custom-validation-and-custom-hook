export const commonValidator = (fieldName, value) => {
    const field = capitalizedWord(fieldName)
    if (!value) {
        return `${field} is required.`
    } else {
        return ''
    }
}

export const requiredValidation = (fieldName, value) => {
    const field = capitalizedWord(fieldName)
    if (!value) {
        return `${field} is required.`
    } else {
        return ''
    }
}

export const emailValidation = (fieldName, value) => {
    const field = capitalizedWord(fieldName)
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value.toLowerCase().match(emailRegex)) {
        return `Invalid ${field}.`
    } else {
        return ''
    }
}

export const minValidation = (fieldName, value) => {
    const field = capitalizedWord(fieldName)

    if (value.length < 5) {
        return `Minimum 5 characters are required for ${field}.`
    } else {
        return ''
    }
}

export const maxValidation = (fieldName, value) => {
    const field = capitalizedWord(fieldName)
    if (value.length > 12) {
        return `Maximum 12 characters allowed for ${field}.`
    } else {
        return ''
    }
}

export const capitalizedWord = (word) => {
    const stringWord = word.toString()
    const firstLetter = stringWord.charAt(0).toUpperCase()
    const restLetters = stringWord.slice(1)
    return firstLetter + restLetters
}