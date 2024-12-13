function openModal(type) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    // Inhalte basierend auf Typ hinzufügen
    const modalContent = {
        login: {
            title: "Login",
            content: `
                <h3>Login</h3>
                <form>
                    <label for="username">Benutzername:</label>
                    <input type="text" id="username" name="username" placeholder="Geben Sie Ihren Benutzernamen ein" required>
                    
                    <label for="password">Passwort:</label>
                    <input type="password" id="password" name="password" placeholder="Geben Sie Ihr Passwort ein" required>
                    
                    <button type="submit">Anmelden</button>
                </form>`
        },
        terms: {
            title: "Geschäftsbedingungen",
            content: `
                <h3>Geschäftsbedingungen</h3>
                <p>Hier stehen die vollständigen Geschäftsbedingungen. Bitte lesen Sie sie sorgfältig durch.</p>`
        },
        privacy: {
            title: "Datenschutz",
            content: `
                <h3>Datenschutz</h3>
                <p>Ihre Privatsphäre ist uns wichtig. Erfahren Sie hier mehr darüber, wie wir Ihre Daten schützen.</p>`
        }
    };

    // Modal-Inhalt dynamisch aktualisieren
    if (modalContent[type]) {
        modalBody.innerHTML = modalContent[type].content;
    } else {
        modalBody.innerHTML = `<h3>Unbekannter Inhalt</h3><p>Der angeforderte Inhalt ist nicht verfügbar.</p>`;
    }

    // Modal sichtbar machen
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

