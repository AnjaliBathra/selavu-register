import { writable } from 'svelte/store'

export const TransactionStore = writable([
    {
        "id": 0,
        "date": new Date('2023-01-01T23:05:00.000Z'),
        "memo": "New Years Gifts",
        "amount": 200.00,
        "category": "gift"
    },
    {
        "id": 1,
        "date": new Date('2023-01-01T23:05:00.000Z'),
        "memo": "Groceries from H-E-B",
        "amount": 40.22,
        "category": "grocery"
    },
    {
        "id": 2,
        "date": new Date('2023-01-02T23:05:00.000Z'),
        "memo": "Clothes from SHEIN",
        "amount": 200.00,
        "category": "clothing"
    },
    {
        "id": 3,
        "date": new Date('2023-01-02T23:05:00.000Z'),
        "memo": "Phone Bill",
        "amount": 40.00,
        "category": "phone"
    }
])