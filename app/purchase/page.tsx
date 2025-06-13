"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PurchasePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    product: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!form.name || !form.email || !form.address || !form.product) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate order success
    router.push("/success");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Purchase Product 🛍️</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
          />
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            type="text"
            placeholder="Shipping Address"
            className="w-full p-3 border rounded"
          />
          <input
            name="product"
            value={form.product}
            onChange={handleChange}
            type="text"
            placeholder="Product Name"
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
