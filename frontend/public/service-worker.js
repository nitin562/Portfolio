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
