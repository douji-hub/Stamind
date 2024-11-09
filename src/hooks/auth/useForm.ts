import { useState, useEffect } from 'react';
import { validatePassword, validateUsername, validateEmail } from 'src/utils/auth/validateForm';
import {
    getPasswordErrorMessages,
    getConfirmPasswordErrorMessages,
    getEmailErrorMessages,
    getUsernameErrorMessages
} from 'src/errors/form/errors';

type Errors = {
    emptyEmail: boolean;
    emptyUsername: boolean;
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    specialChar: boolean;
    match: boolean;
};

type HasTyped = {
    email: boolean;
    firstName: boolean;
    password: boolean;
    confirmPassword: boolean;
};

export const useForm = () => {
    const [email, setEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const [hasTyped, setHasTyped] = useState<HasTyped>({
        email: false,
        firstName: false,
        password: false,
        confirmPassword: false,
    });

    const [errors, setErrors] = useState<Errors>({
        emptyEmail: false,
        emptyUsername: false,
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
        match: false,
    });

    useEffect(() => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            emptyEmail: !validateEmail(email),
        }));
    }, [email]);

    useEffect(() => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            emptyUsername: !validateUsername(firstName),
        }));
    }, [firstName]);

    useEffect(() => {
        const passwordErrors = validatePassword(password);
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...passwordErrors,
            match: password === confirmPassword,
        }));
    }, [password, confirmPassword]);

    const isFormValid = (): boolean => {
        return (
            !errors.emptyEmail &&
            !errors.emptyUsername &&
            errors.length &&
            errors.uppercase &&
            errors.lowercase &&
            errors.number &&
            errors.specialChar &&
            errors.match
        );
    };

    return {
        formValues: {
            email,
            firstName,
            password,
            confirmPassword,
        },
        setFormValues: {
            setEmail,
            setFirstName,
            setPassword,
            setConfirmPassword,
        },
        typingStatus: {
            hasTyped,
            setHasTyped,
        },
        isFormValid,
        getEmailErrorMessages: () =>
            getEmailErrorMessages(errors.emptyEmail, hasTyped.email),
        getUsernameErrorMessages: () =>
            getUsernameErrorMessages(errors.emptyUsername, hasTyped.firstName),
        getPasswordErrorMessages: () =>
            getPasswordErrorMessages(errors, hasTyped.password),
        getConfirmPasswordErrorMessages: () =>
            getConfirmPasswordErrorMessages(errors.match, hasTyped.confirmPassword),
    };
};