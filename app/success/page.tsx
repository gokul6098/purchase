import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center text-center p-6">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Order Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. We’ll send you an email with your order
          details shortly.
        </p>
        <Link href="/" className="text-indigo-600 font-semibold hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
