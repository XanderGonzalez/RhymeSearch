export async function request(data, api) {
  console.log(JSON.stringify(data));
  try {
    const response = await fetch("https://example.com/" + api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    return "";
  }
}
