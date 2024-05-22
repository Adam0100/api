document
  .getElementById("sendMessageForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;
    const chatId = document.getElementById("chatId").value;
    const message = document.getElementById("message").value;

    const apiUrl = `https://7103.api.greenapi.com`; // Замените на ваш URL
    const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

    const payload = {
      chatId: chatId + "@c.us",
      message: message,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(url, payload, { headers });
      console.log(response.data);
      document.querySelector(".response").textContent = JSON.stringify(
        response.data
      );
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
        alert("Error sending message: " + error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response received from server.");
      } else {
        console.error("Error setting up request:", error.message);
        alert("Error setting up request: " + error.message);
      }
      console.error("Error config:", error.config);
    }
  });
