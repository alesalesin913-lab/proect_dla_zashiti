function initMap() {
  const location = { lat: 59.9343, lng: 30.3351 }; // координаты ул. Большая Конюшенная, 19/8, СПб
  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 16,
    mapTypeId: "roadmap",
  });

  // Добавим маркер
  new google.maps.Marker({
    position: location,
    map: map,
    title: "Cat Energy — офис в Санкт-Петербурге",
  });
}