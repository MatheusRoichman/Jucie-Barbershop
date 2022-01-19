// BUTTON REDIRECT

document.getElementById("services").addEventListener("click", () => {
        location.href = "servicos.html"
})

document.getElementById("products").addEventListener("click", () => {
        location.href = "produtos.html"
})

function showLocation() {
  Swal.fire({
    title: `Localização de Juciê Barbershop`,
    html: `
    <p>Avenida Dr. Osvaldo Martins, 970, Timbaúba</p>
    <p>Nova Russas, Ceará</p>
    <br />
    <a href="https://goo.gl/maps/hwqnLmPNz67PDwgn9">Visualizar no Google Maps</a>
    `
  })
}

document.getElementById("wpp").addEventListener("click", () => {
      location.href = "https://wa.me/5588996766772?text=Ol%C3%A1%2C+gostaria+de+realizar+um+corte"
})

document.getElementById("ig").addEventListener("click", () => {
      location.href = "https://instagram.com/junior_barbeiro1119?utm_medium=copy_link"
})

document.getElementById("yt").addEventListener("click", () => {
      location.href = "https://youtube.com/channel/UCu1DADllZ8a0rGaav2hR_9g"
})

document.getElementById("fb").addEventListener("click", () => {
      location.href = "https://m.facebook.com/profile.php?id=100005257186380"
})