export default async ({ url, method, data, cookies }) => {
  try {
    let reqOptions = { method, credentials: "include" };

    reqOptions.headers = {
      "Content-Type": "application/json",
      ...(cookies ? { Cookie: cookies } : {}),
    };
    reqOptions.body = JSON.stringify(data);

    const result = await fetch(
      process.env.NEXT_PUBLIC_API_URL + url,
      reqOptions
    );

    const response = await result.json();
    return response;
  } catch (error) {
    return { success: false, message: "Internal Server Error" };
  }
};
