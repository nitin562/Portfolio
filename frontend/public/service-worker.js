

self.addEventListener("push", (event) => {
  console.log("Push received:", event);

  // Extract the payload data
  const data = event.data ? event.data.json() : {};

  // Set default values if no payload is present
  const title = data.title || "Default Title";
  const options = {
    body: data.body || "Default body",
    icon: data.icon || "/portfolioLogo.png",
    badge: data.badge || "",
  };
  if (data?.email && data.email == true) {
    self.addEventListener("notificationclick", (event) => {
      event.notification.close(); // Close the notification when clicked

      event.waitUntil(clients.openWindow("https://mail.google.com"));
    });
  }
  // Display the notification
  event.waitUntil(self.registration.showNotification(title, options));
});
self.addEventListener('sync', (event) => {
  if (event.tag === 'ping-server') {
      event.waitUntil(pingTheServer());
  }
});

const pingTheServer = async () => {
  try {
   
    const url = "https://portfolio-backend-vf2r.onrender.com/api/ping";
    console.log("Starting ping")

    const response = await fetch(url);
    const result = await response.json();
    if (result.success === false) {
      console.log("Server is slow down.");
    }
    else{
      pinged=true

    }
  } catch (error) {
    console.log(error)
    console.log("Your connection is down. Please try later.");
  }
};
