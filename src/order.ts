// Dag 5 (fördjupning): Beställningen som data. En order är en array: [{ id: 1, antal: 2 }, ...]
import type { OrderRad } from './typer'
// Alla funktioner ska returnera NYA arrayer och aldrig ändra order de får in.

// Lägg till en rätt. Finns id redan i ordern: öka antal med 1. Annars lägg till { id, antal: 1 }.
export function laggTillIOrder(order: OrderRad[], id: number): OrderRad[] {
    // TODO
    if (order.some((rad) => rad.id === id)) {
        return order.map((rad) =>
            rad.id == id ? { ...rad, antal: rad.antal + 1 } : rad
        )
    }
    return [...order, { id, antal: 1 }]
}

// En tom order.
export function rensaOrder(): OrderRad[] {
    // TODO
    return []
}

// Totala antalet varor i ordern (summan av alla antal).
export function antalIOrder(order: OrderRad[]): number {
    // TODO
    return order.reduce((summa, rad) => summa + rad.antal, 0)
}
