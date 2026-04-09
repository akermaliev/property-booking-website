document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const booking = {
    id: document.getElementById("id").value,
    property: document.getElementById("property").value,
    location: document.getElementById("location").value,
    price: document.getElementById("price").value,
    date: document.getElementById("date").value,
    status: document.getElementById("status").value
  };

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);

  localStorage.setItem("bookings", JSON.stringify(bookings));

  document.getElementById("successMessage").innerText = "Booking added successfully!";
  this.reset();
});
