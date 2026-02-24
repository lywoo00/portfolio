"use client";

import { useEffect, useState } from "react";

export default function Hero5() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 40;
      const y = (e.clientY - window.innerHeight / 2) / 40;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-white">
      {/* 감성 배경 그라데이션 */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.05),_transparent_60%)] transition-transform duration-300"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      />

      <div className="max-w-2xl flex flex-col items-center">
        {/* 구직 pill */}
        <div className="mb-10 opacity-0 animate-fadeUp">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-black/10 rounded-full backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs tracking-wide text-black/50">
              Currently Open to Work
            </span>
          </div>
        </div>

        {/* 인사 */}
        <p className="text-xl text-black/40 mb-3 opacity-0 animate-fadeUp delay-100">
          안녕하세요,
        </p>

        {/* 이름 (그라데이션 + 살짝 떠있는 느낌) */}
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-black via-black/80 to-black/40 bg-clip-text text-transparent opacity-0 animate-fadeUp delay-200 hover:tracking-wide transition-all duration-500">
          이영우입니다.
        </h1>

        {/* 설명 */}
        <p className="text-lg text-black/50 leading-relaxed mt-8 opacity-0 animate-fadeUp delay-300">
          퍼블리셔로 시작해 프론트엔드까지,
          <br />
          화면의 처음과 끝을 설계하는 개발자입니다.
        </p>

        {/* 버튼 */}
        <div className="flex items-center gap-8 mt-12 opacity-0 animate-fadeUp delay-500">
          <a
            href="#projects"
            className="text-sm text-black hover:-translate-y-1 hover:opacity-70 transition-all duration-300"
          >
            프로젝트 보기
          </a>

          <a
            href="#contact"
            className="text-sm text-black/50 hover:text-black hover:-translate-y-1 transition-all duration-300"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}
