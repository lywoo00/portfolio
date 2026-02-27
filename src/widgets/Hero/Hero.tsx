import { useState } from "react";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center section px-6"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center">
        <p className="text-lg text-blue-600 font-bold mb-1">안녕하세요</p>

        <h1
          className="text-3xl md:text-6xl font-semibold tracking-tight mb-3 transition-all duration-500"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span>이영우</span>
          <span>입니다.</span>
        </h1>

        <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-12">
          퍼블리셔로 시작해 프론트엔드까지,
          <br />
          사용자 경험과 구조를 함께 설계합니다.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/lywoo00"
            target="_blank"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 text-neutral-600 hover:border-slate-900 hover:text-slate-900 transition-all duration-300 bg-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href="mailto:xmsxms000@gamil.com"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span className="font-medium">Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
