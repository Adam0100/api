document
  .getElementById("getStateInstanceBtn")
  .addEventListener("click", async () => {
    const apiUrl = `https://7103.api.greenapi.com`;
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;

    try {
      const response = await axios.get(url);
      console.log(response.data);
      document.querySelector(".response").textContent = JSON.stringify(
        response.data
      );
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
