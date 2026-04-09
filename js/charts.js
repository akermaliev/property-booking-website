const months = [
  "Apr 2025", "May", "Jun", "Jul", "Aug", "Sep",
  "Oct", "Nov", "Dec", "Jan 2026", "Feb", "Mar", "Apr 2026"
];

const revenueData = [4200, 5100, 4800, 6200, 7000, 6800, 7500, 8200, 7900, 8800, 9400, 9900, 10500];

const propertyData = {
  labels: ["Apartment", "House", "Villa", "Cabin", "Condo"],
  values: [12, 8, 5, 6, 9]
};

const statusData = {
  labels: ["Confirmed", "Pending", "Cancelled", "Completed"],
  values: [10, 3, 2, 4]
};

const revenueChart = new Chart(document.getElementById("revenueChart"), {
  type: "line",
  data: {
    labels: months,
    datasets: [{
      label: "Monthly Revenue ($)",
      data: revenueData,
      borderColor: "#0ea5e9",
      backgroundColor: "rgba(14, 165, 233, 0.2)",
      tension: 0.3,
      fill: true
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.5
  }
});

const propertyChart = new Chart(document.getElementById("propertyChart"), {
  type: "bar",
  data: {
    labels: propertyData.labels,
    datasets: [{
      label: "Bookings by Property Type",
      data: propertyData.values,
      backgroundColor: ["#38bdf8", "#60a5fa", "#818cf8", "#34d399", "#fbbf24"]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true
  }
});

const statusChart = new Chart(document.getElementById("statusChart"), {
  type: "pie",
  data: {
    labels: statusData.labels,
    datasets: [{
      label: "Booking Status",
      data: statusData.values,
      backgroundColor: ["#22c55e", "#eab308", "#ef4444", "#0ea5e9"]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true
  }
});

function updateCharts() {
  const selectedRange = document.getElementById("timeFilter").value;
  let labels = months;
  let revenue = revenueData;
  let scaleFactor = 1;

  if (selectedRange === "6") {
    labels = months.slice(-6);
    revenue = revenueData.slice(-6);
    scaleFactor = 0.6;
  }

  revenueChart.data.labels = labels;
  revenueChart.data.datasets[0].data = revenue;

  propertyChart.data.datasets[0].data = propertyData.values.map((value) =>
    Math.round(value * scaleFactor * 10) / 10
  );

  statusChart.data.datasets[0].data = statusData.values.map((value) =>
    Math.round(value * scaleFactor * 10) / 10
  );

  revenueChart.update();
  propertyChart.update();
  statusChart.update();
}

document.getElementById("timeFilter").addEventListener("change", updateCharts);
