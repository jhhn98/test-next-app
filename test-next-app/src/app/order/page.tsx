'use client';

import { use, useEffect, useState } from "react";
import axios from "axios";

interface Order {
    id: number;
    item: string;
    price: number;
}

export default function OrderPage() {
    const [oders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        
    }
}