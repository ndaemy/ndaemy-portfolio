import Link from 'next/link';

export default function PageNavigator() {
  return (
    <div className='sm:bg-background/60 fixed top-2 z-20 inline-flex w-fit! items-center gap-2 sm:top-10 sm:mb-10 sm:rounded-full sm:border sm:px-2 sm:py-3 sm:backdrop-blur-sm'>
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
