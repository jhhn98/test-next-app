'use client';

import { useEffect, useState } from "react";
import axios from "axios";

interface Order {
    id: number;
    item: string;
    price: number;
}

export default function OrderPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('/mock/orders.json')
            .then((response) => {
                setOrders(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch orders");
                setLoading(false);
            });
    }, []);

    if(loading) return <p>loading...</p>;
    if(error) return <p>{error}</p>;

    return (
        <div>
            <h1>Order List</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.item} - {order.price.toLocaleString()}원
                    </li>
                ))}
            </ul>
        </div>
    );
};