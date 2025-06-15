// app/api/submit-order/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  // In a real app, you'd save this to a database
  console.log('Received order:', data);

  return NextResponse.json({ message: 'Order received successfully' }, { status: 200 });
}
