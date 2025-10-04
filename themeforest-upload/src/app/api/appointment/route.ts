import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !service) {
      return NextResponse.json(
        { error: 'Name, email, phone, date, time, and service are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Date validation
    const appointmentDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (appointmentDate < today) {
      return NextResponse.json(
        { error: 'Appointment date cannot be in the past' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Check appointment availability
    // 2. Send confirmation email to patient
    // 3. Add to calendar/booking system
    // 4. Send notification to doctor/staff
    
    console.log('Appointment booking:', {
      name,
      email,
      phone,
      date,
      time,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // Simulate email sending (replace with actual email service)
    // Example with Resend:
    /*
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    // Send confirmation to patient
    await resend.emails.send({
      from: 'appointments@yourdomain.com',
      to: [email],
      subject: 'Appointment Confirmation',
      html: `
        <h2>Appointment Confirmed</h2>
        <p>Dear ${name},</p>
        <p>Your appointment has been confirmed with the following details:</p>
        <ul>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Service:</strong> ${service}</li>
        </ul>
        <p>Please arrive 15 minutes early for your appointment.</p>
        <p>Best regards,<br>Medical Practice Team</p>
      `
    })

    // Send notification to doctor
    await resend.emails.send({
      from: 'appointments@yourdomain.com',
      to: ['doctor@yourdomain.com'],
      subject: `New Appointment: ${service}`,
      html: `
        <h2>New Appointment Booking</h2>
        <p><strong>Patient:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || 'No additional message'}</p>
      `
    })
    */

    return NextResponse.json(
      { 
        message: 'Appointment booked successfully',
        appointmentDetails: {
          name,
          email,
          phone,
          date,
          time,
          service,
          confirmationNumber: `APT-${Date.now()}`
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Appointment booking error:', error)
    return NextResponse.json(
      { error: 'Failed to book appointment' },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
