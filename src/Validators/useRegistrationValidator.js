import { useState } from 'react'
import { emailValidation, maxValidation, minValidation, requiredValidation } from '../Helpers/utils';

const touchErrors = (errors) => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
        acc[field] = {
            ...fieldError,
            dirty: true,
        };
        return acc;
    }, {});
};

export const useRegistrationValidator = (form) => {
    const initialState = Object.keys(form).reduce((acc, key) => {
        acc[key] = {
            dirty: false,
            error: false,
            message: "",
        };
        return acc;
    }, {});

    const [errors, setErrors] = useState(initialState)

    const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
        const { email, password, repeat_password, last_name, first_name } = form
        let isValid = true;

        // Create a deep copy of the errors
        let nextErrors = JSON.parse(JSON.stringify(errors));
        // Force validate all the fields
        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }

        // Email validation
        if (nextErrors.email.dirty && (field ? field === "email" : true)) {
            let errorMessage
            if (!errorMessage) {
                errorMessage = requiredValidation("Email Address", email) ||
                    emailValidation("Email Address", email)
            }
            nextErrors.email.error = !!errorMessage;
            nextErrors.email.message = errorMessage;
            if (!!errorMessage) isValid = false;
        }

        // Password validation
        if (nextErrors.password.dirty && (field ? field === "password" : true)) {
            let errorMessage
            if (!errorMessage) {
                errorMessage = requiredValidation("Password", password) ||
                    minValidation("Password", password) ||
                    maxValidation("Password", password);
            }
            nextErrors.password.error = !!errorMessage;
            nextErrors.password.message = errorMessage;
            if (!!errorMessage) isValid = false;
        }

        // First Name validation
        if (nextErrors.first_name.dirty && (field ? field === "first_name" : true)) {
            let errorMessage
            if (!errorMessage) {
                errorMessage = requiredValidation("First Name", first_name) ||
                    minValidation("First Name", first_name) ||
                    maxValidation("First Name", first_name);
            }
            nextErrors.first_name.error = !!errorMessage;
            nextErrors.first_name.message = errorMessage;
            if (!!errorMessage) isValid = false;
        }

        // Last Name validation
        if (nextErrors.last_name.dirty && (field ? field === "last_name" : true)) {
            let errorMessage
            if (!errorMessage) {
                errorMessage = requiredValidation("Last Name", last_name) ||
                    minValidation("Last Name", last_name) ||
                    maxValidation("Last Name", last_name);
            }
            nextErrors.last_name.error = !!errorMessage;
            nextErrors.last_name.message = errorMessage;
            if (!!errorMessage) isValid = false;
        }

        // Confirm Password validation
        if (nextErrors.repeat_password.dirty && (field ? field === "repeat_password" : true)) {
            let errorMessage = ""
            if (!repeat_password) {
                errorMessage = "Confirm Password is required."
            } else if (password !== repeat_password) {
                errorMessage = "Password & Confirm Password should match."
            }
            nextErrors.repeat_password.error = !!errorMessage;
            nextErrors.repeat_password.message = errorMessage;
            if (!!errorMessage) isValid = false;
        }

        if (field) {
            nextErrors[field] = {
                ...nextErrors[field],
                dirty: true,
            };
        }

        setErrors(nextErrors);

        return {
            isValid,
            errors: nextErrors,
        };
    };

    const onBlurField = (e) => {
        const field = e.target.name;
        const fieldValue = e.target.value;
        const fieldError = errors[field];

        if (fieldValue === undefined || fieldValue === null || fieldValue === "") return;

        const updatedErrors = {
            ...errors,
            [field]: {
                ...errors[field],
                dirty: true,
            },
        };
        validateForm({ form, field, errors: updatedErrors });
    };


    return {
        validateForm,
        onBlurField,
        errors,
    };
};