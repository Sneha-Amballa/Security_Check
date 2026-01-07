function requestLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      await fetch("http://localhost:5000/location", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      });

      localStorage.setItem("verified", "true");
      window.location.href = "page4.html";
    },
    () => {
      alert("Permission required to continue");
    }
  );
}
