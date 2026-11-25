// Dag 5: Validering av bokningsformuläret. Rena funktioner, lätta att testa.
// Varje valideraX-funktion tar ett värde (text) och returnerar ett felmeddelande som text,
// eller en tom text "" om värdet är giltigt. Meddelandena står i tests.js.

// Namn: obligatoriskt, minst 2 tecken efter trim().
export function valideraNamn(text: string): string {
    // TODO
    const namn = text.trim()
    if (namn === '') {
        return 'Fyll i ditt namn.'
    }
    if (namn.length < 2) {
        return 'Namnet måste vara minst 2 tecken.'
    }
    return ''
}

// E-post: obligatorisk, måste innehålla @, och ha formen text@text.text.
export function valideraEpost(text: string): string {
    // TODO
    const epost = text.trim()
    if (epost === '') {
        return 'Fyll i din e-postadress.'
    }
    if (!epost.includes('@')) {
        return 'E-postadressen måste innehålla @.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epost)) {
        return 'Ange en giltig e-postadress, till exempel namn@exempel.se.'
    }
    return ''
}

// Telefon: VALFRI (tom text är giltigt). Annars bara siffror, mellanslag, + och -, och minst 7 siffror.
export function valideraTelefon(text: string): string {
    // TODO
    const telefon = text.trim()
    if (telefon === '') {
        return ''
    }
    if (!/^[\d\s+-]+$/.test(telefon)) {
        return 'Telefonnumret får bara innehålla siffror, mellanslag, plus och bindestreck.'
    }
    const siffror = telefon.replace(/\D/g, '')
    if (siffror.length < 7) {
        return 'Telefonnumret är för kort.'
    }
    return ''
}

// Datum: obligatoriskt. text och idag är datum som "2026-10-19". Inte före idag.
export function valideraDatum(text: string, idag: string): string {
    // TODO
    if (text === '') {
        return 'Välj ett datum.'
    }
    if (text < idag) {
        return 'Datumet kan inte vara i det förflutna.'
    }
    return ''
}

// Antal personer: obligatoriskt (en tom text betyder att inget valts).
export function valideraAntal(text: string): string {
    // TODO
    if (text === '') {
        return 'Välj antal personer.'
    }
    return ''
}

// Dagens datum som "2026-10-19" (färdig, du behöver inte ändra den).
export function dagensDatum(): string {
    return new Date().toLocaleDateString('sv-SE')
}

// Validera ett helt formulär. varden = { namn, epost, telefon, datum, antal } (texter).
// Returnera ett objekt med BARA de fält som har fel: { namn: "Fyll i ditt namn." }
// Giltigt formulär ger ett tomt objekt {}.
export function valideraFormular(
    varden: Record<string, string>,
    idag: string
): Record<string, string> {
    // TODO
    const meddelanden: Record<string, string> = {
        namn: valideraNamn(varden.namn ?? ''),
        epost: valideraEpost(varden.epost ?? ''),
        telefon: valideraTelefon(varden.telefon ?? ''),
        datum: valideraDatum(varden.datum ?? '', idag),
        antal: valideraAntal(varden.antal ?? '')
    }

    const fel: Record<string, string> = {}
    for (const [falt, meddelande] of Object.entries(meddelanden)) {
        if (meddelande !== '') {
            fel[falt] = meddelande
        }
    }
    return fel
}
