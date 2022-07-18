import {Fragment, useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFormAuth} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = event => {
        const {name, value} = event.target;

        setFormFields((state) => {
            return {...state, [name]: value};
        })
    };

    const onSubmitHandler = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFormAuth(user, {displayName})
            resetFormFields();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Fragment>
            <h1>Sign Up with your email and password</h1>

            <form onSubmit={onSubmitHandler}>
                <label>Display Name</label>
                <input name="displayName" type="text" value={displayName} required onChange={handleChange}/>

                <label>Email</label>
                <input name="email" type="email" value={email} required onChange={handleChange}/>

                <label>Password</label>
                <input name="password" type="password" value={password} required onChange={handleChange}/>

                <label>Confirm Password</label>
                <input name="confirmPassword" type="password" value={confirmPassword} required onChange={handleChange}/>

                <button type="submit">Submit</button>
            </form>
        </Fragment>
    );
}

export default SignUpForm;
