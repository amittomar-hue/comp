import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const secret = process.env.REVALIDATE_SECRET;

  if (secret && body.secret !== secret) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  // Revalidate all key paths when WordPress publishes content
  const paths = ['/', '/about', '/services/talent', '/services/cybersecurity', '/services/digital', '/insights', '/insights/blogs', '/insights/case-studies', '/insights/press-releases'];

  for (const path of paths) {
    revalidatePath(path);
  }

  return NextResponse.json({ revalidated: true, paths });
}
