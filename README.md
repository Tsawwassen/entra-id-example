Use 'npm run dev' to start the app

For the env.local files
- AZURE_AD_CLIENT_ID= /**  Client ID from EntraID. This is on the main resource screen  **/
- AZURE_AD_CLIENT_SECRET=/**  When you register an app on EntraID, it will eventually give you a Secret ID Value. Use the VALUE here, not the ID  **/
- AZURE_AD_TENANT_ID=/**  Tenant ID from EntraID. This is on the main resource screen  **/
- NEXTAUTH_URL=/**  I think this is the redirect url if the sign-in is successful **/
- NEXTAUTH_SECRET=/**  random numbeR? not sure what this is for. I just used a random number generator  ( https://generate-secret.vercel.app/32 ) **/

When I first started testing the authentication, it wasn't loggin in correctly. I added a debug to route.js looked at the error, and it said 'the client secret was getting rejected. Use the Value not the ID'. 
- - Debug code is commented out in the route.js file