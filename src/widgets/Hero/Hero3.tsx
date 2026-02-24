export default function Hero3() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-8 text-center gap-5">
      {/* 구직중 pill */}
      <div className="inline-flex items-center gap-1.5 bg-black/[0.04] rounded-full px-4 py-1.5">
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-sm text-black/40">구직 중</span>
      </div>

      {/* 타이틀 */}
      <div className="flex flex-col gap-1">
        <p className="text-2xl text-[#6E6E73]">안녕하세요,</p>
        <h1 className="text-6xl font-semibold text-[#1D1D1F] tracking-tight">
          이영우입니다.
        </h1>
      </div>

      {/* 설명 */}
      <p className="text-lg text-[#6E6E73] leading-relaxed mt-4">
        퍼블리셔로 시작해 프론트엔드까지,
        <br />
        화면의 처음과 끝을 아는 개발자입니다.
      </p>

      {/* 버튼 pill 그룹 */}
      <div className="inline-flex items-center gap-1 bg-black/[0.04] rounded-full p-1 mt-1">
        <a
          href="#projects"
          className="bg-[#1D1D1F] text-white text-sm px-5 py-2 rounded-full hover:bg-black/80 transition-colors"
        >
          프로젝트 보기
        </a>
        <a
          href="#contact"
          className="text-[#6E6E73] text-sm px-5 py-2 rounded-full hover:text-[#1D1D1F] transition-colors"
        >
          연락하기
        </a>
      </div>
    </section>
  );
}
