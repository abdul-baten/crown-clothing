import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { createUserDocumentFormAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import {Fragment} from "react";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFormAuth(user);
    }

    return (
        <Fragment>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>

            <SignUpForm/>
        </Fragment>
    );
}

export default SignIn;
