const token = localStorage?.getItem("token");

export async function addActivity(name: string, time: string) {
     const rawResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/activity`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        time,
      }),
    });
    const result = await rawResponse.json();
    return result;
  }