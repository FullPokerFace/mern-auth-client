export async function login(email: string, password: string) {
    const rawResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
     method: "POST",
     headers: {
       'Accept': 'application/json',
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
        email,
        password,
     }),
   });
   const result = await rawResponse.json();
   return result?.token;
 }