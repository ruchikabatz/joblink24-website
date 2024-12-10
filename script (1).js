
function openModal(type) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    if (type === "login") {
        modalBody.innerHTML = "<h3>Login</h3><p>Hier können Sie sich anmelden.</p>";
    } else if (type === "terms") {
        modalBody.innerHTML = "<h3>Geschäftsbedingungen</h3><p>Dummy-Geschäftsbedingungen von Airbnb...</p>";
    } else if (type === "privacy") {
        modalBody.innerHTML = "<h3>Datenschutz</h3><p>Ihre Daten sind sicher bei uns.</p>";
    }

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
