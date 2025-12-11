import { NextRequest, NextResponse } from 'next/server';
import { addSubmission, getSubmissions, markAsRead, deleteSubmission } from '@/lib/submissions';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const { name, email, phone, message } = data;
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const submission = await addSubmission({
      name,
      email,
      phone,
      company: data.company || '',
      service: data.service || '',
      message,
    });

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error('Failed to process submission:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Check for auth token in cookies
  const authToken = request.cookies.get('admin_auth')?.value;
  if (authToken !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const submissions = await getSubmissions();
    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Failed to fetch submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  const authToken = request.cookies.get('admin_auth')?.value;
  if (authToken !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, action } = await request.json();

    if (action === 'markRead') {
      await markAsRead(id);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Failed to update submission:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const authToken = request.cookies.get('admin_auth')?.value;
  if (authToken !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await request.json();
    const deleted = await deleteSubmission(id);

    if (deleted) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
  } catch (error) {
    console.error('Failed to delete submission:', error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
