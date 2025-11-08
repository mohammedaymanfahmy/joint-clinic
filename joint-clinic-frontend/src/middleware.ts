import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware() {
  // منطق الكود هنا
  return NextResponse.next();
}