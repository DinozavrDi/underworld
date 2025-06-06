import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fio, phone, email, programId, locationId, dateTime } = data;

    if (!programId || !locationId || !dateTime) {
      return NextResponse.json({ success: false, error: 'Обязательные поля не заполнены' }, { status: 400 });
    }

    const order = await prisma.order.create({
      data: {
        fio,
        phone,
        email,
        programId,
        locationId,
        dateTime: new Date(dateTime),
        // userId — можешь добавить, если передаёшь
        userId: data.userId || null,
      },
    });

    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error('Ошибка при создании заказа:', error);
    return NextResponse.json({ success: false, error: 'Ошибка при создании заказа' }, { status: 500 });
  }
}