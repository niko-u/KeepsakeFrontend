import userStore from "../store/userStore";
import authStore from "../store/authStore";
import { Auth } from '@aws-amplify/auth';
import router from "../router";


async function signIn(email, password) {
    try {
      // Sign in the user using the Amplify Auth.signIn() method
      const user = await Auth.signIn(email, password);
      // Dispatch the checkAuth action to the auth store
      await authStore.dispatch('checkAuth')
      // Check if the user has requested a specific page
      if (userStore.state.requestedPage != '') {
        // If a specific page has been requested, navigate to that page
        router.push(userStore.state.requestedPage)
      } else {
        // If no specific page has been requested, navigate to the feed page
        router.push('/feed')
      }
    } catch (error) {
      // Log any errors that occur
      console.log('error signing in', error);
    }
}

  async function signUp(email, password, name) {
    // Try block to catch any errors that may occur during the sign up process
    try {
      // Sign up the user using the Amplify Auth.signUp() method
      // Pass the email and password as the username and password arguments
      // Also pass the name as an attribute
      // Enable auto sign-in after sign up is successful
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          name: name
        },
        autoSignIn: {
          enabled: true,
        }
      });
  
      // Commit the setEmail and setUser mutations to the user store
      // Pass the email and user object as arguments
      userStore.commit("setEmail", this.email)
      userStore.commit("setUser", user)
  
      // Navigate to the verify page
      router.push("/verify")
    } catch (error) {
      // If an error occurs, log the error to the console
      console.error(error);
    }
  }

// Async function to confirm the user's sign up using a confirmation code
async function confirmSignup(code) {
    // Try block to catch any errors that may occur during the confirmation process
    try {
      // Confirm the user's sign up using the Amplify Auth.confirmSignUp() method
      // Pass the email and confirmation code as arguments
      await Auth.confirmSignUp(this.email, code);
  
      // Navigate to the account page
      router.push('/account')
    } catch (error) {
      // If an error occurs, log the error to the console
      console.error(error);
    }
  }
  
  // Async function to resend the confirmation code to the user's email address
  async function resendConfirmationCode(email) {
    // Try block to catch any errors that may occur during the resend process
    try {
      // Resend the confirmation code using the Amplify Auth.resendSignUp() method
      // Pass the email as an argument
      await Auth.resendSignUp(email);
  
      // Return true if the resend process is successful
      return true;
    } catch (error) {
      // If an error occurs, log the error to the console and return false
      console.error(error);
      return false;
    }
  }

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
  
  

export default {
    signIn, signUp, confirmSignup, resendConfirmationCode, signOut
}
  