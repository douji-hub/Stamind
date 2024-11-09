import { useState, useEffect } from 'react';
import { validatePassword, validateUsername, validateEmail } from '@/utils/auth/validateForm';

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

// Customized Hook, used to manage form status and validation logic
export const useForm = () => {
    // input value state
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Control the password display/hidden status
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Whether the user has entered is used to control the display of error information.
    const [hasTyped, setHasTyped] = useState({
        email: false,
        firstName: false,
        password: false,
        confirmPassword: false,
    });

    // error state
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

    // Monitor user name changes for verification
    useEffect(() => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            emptyEmail: !validateEmail(email),
        }));
    }, [email]);

    // Monitor user name changes for verification
    useEffect(() => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            emptyUsername: !validateUsername(firstName),
        }));
    }, [firstName]);

    // Monitor password and confirmation password changes for verification
    useEffect(() => {
        const passwordErrors = validatePassword(password);
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...passwordErrors,
            match: password === confirmPassword,
        }));
    }, [password, confirmPassword]);

    const isFormValid = () => {
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

    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

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
        passwordVisibility: {
            showPassword,
            toggleShowPassword,
            showConfirmPassword,
            toggleShowConfirmPassword,
        },
        typingStatus: {
            hasTyped,
            setHasTyped,
        },
        errors,
        isFormValid,
    };
};