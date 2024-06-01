import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import * as yup from 'yup';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});

// Definice validačního schématu pomocí yup
const courseSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  category: yup.string().required('Category is required'),
  rating: yup.number().required('Rating is required').min(0).max(5),
  duration: yup.number().required('Duration is required').positive().integer(),
  published: yup.boolean().required('Published status is required')
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log('POST1');
    await courseSchema.validate(data, { abortEarly: false });
    console.log('POST2');

    const { name, category, rating, duration, published } = data;
    console.log('POST3');

    const newCourse = await prisma.course.create({
      data: {
        name,
        category,
        rating: parseFloat(rating),
        duration: parseInt(duration, 10),
        published: Boolean(published)
      }
    });
    console.log('POST4');

    return NextResponse.json(newCourse, {
      status: 201
    });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const validationErrors = error.inner.map(err => ({
        path: err.path,
        message: err.message
      }));
      return NextResponse.json(
        {
          errorCode: 'VALIDATION_FAILED',
          error: 'Validation failed',
          details: validationErrors
        },
        { status: 400 }
      );
    }

    console.error('POST5', error);
    return NextResponse.json(
      { errorCode: 'INTERNAL_SERVER_ERROR', error: 'Internal Server Error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
