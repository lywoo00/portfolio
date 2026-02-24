export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-sm tracking-[0.3em] text-black/30 uppercase mb-5">
          Frontend Developer
        </p>
        <h1 className="text-6xl font-bold text-black leading-snug">
          안녕하세요,
        </h1>
        <h1 className="text-6xl font-bold text-black leading-snug mb-8">
          이영우입니다.
        </h1>

        <p className="text-lg text-black/40 leading-relaxed">
          퍼블리셔로 시작해 프론트엔드까지,
          <br />
          화면의 처음과 끝을 아는 개발자입니다.
        </p>
      </div>
    </section>
  );
}
