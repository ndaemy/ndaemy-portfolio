'use client';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { copyToClipboard } from '@/utils/clipboard';

interface Props {
  productionOrigin: string;
  email: string;
  githubUsername: string;
  linkedinUsername: string;
}

export default function SocialButtons({
  productionOrigin,
  email,
  githubUsername,
  linkedinUsername,
}: Props) {
  const handleCopyEmail = () => {
    copyToClipboard(email, {
      onCopy: () => toast.success('이메일 주소가 복사되었습니다.'),
      onError: () => toast.error('이메일 주소 복사에 실패했습니다.'),
    });
  };

  return (
    <div className='mt-4 flex items-center gap-2' id='links'>
      <Button
        asChild
        className='hidden print:block'
        size='lg'
        variant='outline'
      >
        <a href={productionOrigin} rel='noopener noreferrer' target='_blank'>
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='cursor-pointer' size='lg' variant='outline'>
            <FontAwesomeIcon icon={faEnvelope} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start' className='p-2'>
          <DropdownMenuItem
            className='cursor-pointer px-3 text-base'
            onClick={handleCopyEmail}
          >
            이메일 주소 복사하기
          </DropdownMenuItem>
          <DropdownMenuItem asChild className='cursor-pointer px-3 text-base'>
            <a href={`mailto:${email}`}>이메일 보내기</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button asChild size='lg' variant='outline'>
        <a
          href={`https://github.com/${githubUsername}`}
          rel='noopener noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Button>
      <Button asChild size='lg' variant='outline'>
        <a
          href={`https://linkedin.com/in/${linkedinUsername}`}
          rel='noopener noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Button>
    </div>
  );
}
