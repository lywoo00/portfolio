import { useState } from "react";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="section px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center">
        {/* 인사 */}
        <p className="text-lg text-blue-600 font-bold mb-1">안녕하세요,</p>

        {/* 이름 */}
        <h1
          className="text-3xl md:text-6xl font-semibold tracking-tight mb-3 transition-all duration-500"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span>이영우</span>
          <span>입니다.</span>
        </h1>

        {/* 설명 */}
        <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-12">
          퍼블리셔로 시작해 프론트엔드까지,
          <br />
          사용자 경험과 구조를 함께 설계합니다.
        </p>
      </div>
    </section>
  );
};

export default Hero;
