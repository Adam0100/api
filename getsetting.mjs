document
  .getElementById("getSettingsBtn")
  .addEventListener("click", async () => {
    const apiUrl = `https://7103.api.greenapi.com`;
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    const url = `${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`;

    try {
      const response = await axios.get(url);
      document.querySelector(
        ".response"
      ).textContent = `Settings: ${JSON.stringify(response.data, null, 2)}`;
    } catch (error) {
      let errorMessage = "";
      if (error.response) {
        errorMessage = `Error response data: ${JSON.stringify(
          error.response.data,
          null,
          2
        )}
                      Error response status: ${error.response.status}
                      Error response headers: ${JSON.stringify(
                        error.response.headers,
                        null,
                        2
                      )}`;
      } else if (error.request) {
        errorMessage = `No response received: ${error.request}`;
      } else {
        errorMessage = `Error setting up request: ${error.message}`;
      }
    }
  });
