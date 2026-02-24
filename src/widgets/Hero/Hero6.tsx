"use client";

export default function Hero6() {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center px-6 overflow-hidden">
      {/* 감성 배경 */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_60%)]" />

      <div className="max-w-md w-full p-12 rounded-3xl border border-black/5 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 text-center">
        {/* 아이콘 */}
        <div className="mb-8 flex justify-center">
          <div className="w-14 h-14 rounded-xl border border-black/10 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-blue-600"
            >
              <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            </svg>
          </div>
        </div>

        {/* 타이틀 */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4 opacity-0 animate-fadeUp">
          Build with <span className="text-blue-600">영우</span>
        </h1>

        {/* 설명 */}
        <p className="text-sm md:text-base text-black/50 leading-relaxed mb-10 opacity-0 animate-fadeUp delay-100">
          퍼블리셔로 시작해 프론트엔드까지,
          <br />
          사용자 경험과 구조를 함께 설계합니다.
        </p>

        {/* 버튼 */}
        <div className="flex justify-center gap-4 opacity-0 animate-fadeUp delay-200">
          <a
            href="#projects"
            className="px-6 py-2 text-sm rounded-md bg-black text-white hover:bg-black/80 hover:-translate-y-0.5 transition-all duration-200"
          >
            프로젝트 보기
          </a>

          <a
            href="#contact"
            className="px-6 py-2 text-sm rounded-md border border-black/10 text-black/70 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-200"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}
