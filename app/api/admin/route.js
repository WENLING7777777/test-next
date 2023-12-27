import { NextResponse } from 'next/server'
import React from 'react'

export function GET() {
    return NextResponse.json({
        id: 1
      }
      )
}
