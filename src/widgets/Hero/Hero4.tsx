export default function Hero4() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl flex flex-col items-center">
        {/* 구직 상태 */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-black/10 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs tracking-wide text-black/50">
              Currently Open to Work
            </span>
          </div>
        </div>

        {/* 타이틀 */}
        <div className="mb-6">
          <p className="text-xl text-black/40 mb-3">안녕하세요,</p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-black">
            이영우입니다.
          </h1>
        </div>

        {/* 설명 */}
        <p className="text-base md:text-lg text-black/50 leading-relaxed mb-10">
          퍼블리셔로 시작해 프론트엔드까지,
          <br />
          화면의 처음과 끝을 설계하는 개발자입니다.
        </p>

        {/* 버튼 그룹 */}
        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm text-black hover:opacity-60 transition-opacity"
          >
            프로젝트 보기
          </a>

          <a
            href="#contact"
            className="text-sm text-black/50 hover:text-black transition-colors"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}
