import Link from 'next/link';

export default function PageNavigator() {
  return (
    <div className='bg-background/60 sticky top-10 z-20 mb-2 inline-flex w-fit! items-center gap-2 rounded-full border px-2 py-3 backdrop-blur-sm'>
      <nav className='text-muted-foreground text-sm'>
        <Link
          href='/'
          className='hover:text-foreground px-4 py-2 transition-colors'
        >
          메인페이지로 돌아가기
        </Link>
      </nav>
    </div>
  );
}
