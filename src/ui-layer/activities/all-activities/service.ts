const token = localStorage?.getItem("token");

export async function getAllActivities() {
    const rawResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/activities`, {
     method: "GET",
     headers: {
        "Authorization": `Bearer ${token}`,
       'Accept': 'application/json',
       "Content-Type": "application/json",
     },
   });
   const result = await rawResponse.json();
   return result;
 }

export async function deleteActivities(list: unknown[]) {
    const rawResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/activities`, {
     method: "DELETE",
     headers: {
        "Authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        "Content-Type": "application/json",
     },
     body: JSON.stringify({
      list
    }),
   });
   
   const result = await rawResponse.json();
   return result;
 }