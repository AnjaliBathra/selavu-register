import { writable } from 'svelte/store'

export const TransactionStore = writable([
    {
        "id": 0,
        "date": "01/01/2023",
        "memo": "New Years Gifts",
        "amount": 200.00,
        "category": "gift"
    },
    {
        "id": 1,
        "date": "01/01/2023",
        "memo": "Groceries from H-E-B",
        "amount": 40.22,
        "category": "grocery"
    },
    {
        "id": 2,
        "date": "01/02/2023",
        "memo": "Clothes from SHEIN",
        "amount": 200.00,
        "category": "clothing"
    },
    {
        "id": 3,
        "date": "01/02/2023",
        "memo": "Phone Bill",
        "amount": 40.00,
        "category": "phone"
    }
])