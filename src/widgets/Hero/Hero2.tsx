"use client";

import { useState } from "react";

export default function Hero2() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl flex flex-col items-center">
        {/* 구직 상태 */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-black/10 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs tracking-wide text-black/50">
              Open to Work
            </span>
          </div>
        </div>

        {/* 인사 */}
        <p className="text-xl text-black/40 mb-3">안녕하세요,</p>

        {/* 이름 */}
        <h1
          className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 transition-all duration-500"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className="text-black">이영우</span>
          <span className="text-blue-600">입니다.</span>
        </h1>

        {/* 설명 */}
        <p className="text-base md:text-lg text-black/50 leading-relaxed mb-12">
          퍼블리셔로 시작해 프론트엔드까지,
          <br />
          사용자 경험과 구조를 함께 설계합니다.
        </p>

        {/* 버튼 */}
        <div className="flex items-center gap-8">
          <a
            href="#projects"
            className="relative text-sm text-black hover:text-blue-600 transition-colors duration-300 group"
          >
            프로젝트 보기
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#contact"
            className="relative text-sm text-black/50 hover:text-blue-600 transition-colors duration-300 group"
          >
            연락하기
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </section>
  );
}
