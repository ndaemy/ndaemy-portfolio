import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg p-4 sm:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-6">
          <div>
            <h1 className="text-3xl font-bold leading-normal">
              만드는 것과 공유하는 것을 좋아하는 개발자
              <br />
              <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                유예빈
              </span>
              입니다 👋
            </h1>
            <p className="mt-4 text-xl leading-9">
              서비스를 기획하고 만드는 것에 재미를 느껴, 직접 처음부터 끝까지
              만들 수 있는 기술을 가지기 위해 노력하는 개발자입니다. 열정있는
              사람들과 뭔가 하는 것에도 흥미가 있어 이런저런 활동도 많이 하는
              사람입니다.
            </p>
          </div>
          <div className="shrink-0">
            <Image
              className="h-auto w-64 sm:h-80 sm:w-auto"
              src="/images/avatar.png"
              alt="avatar"
              width={420}
              height={420}
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
