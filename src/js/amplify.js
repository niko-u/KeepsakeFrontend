import Amplify from '@aws-amplify/core';


Amplify.configure({
        aws_cognito_region: import.meta.env.VITE_REGION, // (required) - Region where Amazon Cognito project was created
        aws_user_pools_id: import.meta.env.VITE_USER_POOL_ID , // (optional) -  Amazon Cognito User Pool ID
        aws_user_pools_web_client_id: import.meta.env.VITE_WEB_CLIENT_ID, // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
        aws_cognito_identity_pool_id: import.meta.env.VITE_IDENTITY_POOL_ID, // (optional) - Amazon Cognito Identity Pool ID
        aws_mandatory_sign_in: 'enable' // (optional) - Users are not allowed to get the aws credentials unless they are signed in
  });