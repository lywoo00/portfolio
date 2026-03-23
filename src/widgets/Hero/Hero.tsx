import { cn } from "@/shared/lib/utils";
const Hero = () => {
  const baseBtn =
    "group flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300";
  const styles = {
    section: "min-h-screen flex flex-col justify-center section px-6",
    container: "max-w-2xl mx-auto flex flex-col items-center justify-center",
    title:
      "text-3xl md:text-6xl font-semibold tracking-tight mb-3 transition-all duration-500",
    description:
      "text-center text-base md:text-lg text-neutral-500 leading-relaxed mb-12",

    githubBtn: cn(
      baseBtn,
      "border border-neutral-200 bg-white text-neutral-600 hover:border-slate-900 hover:text-slate-900"
    ),
    contactBtn: cn(
      baseBtn,
      "bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-200"
    ),
  };

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <p className="text-lg text-blue-600 font-bold mb-1">안녕하세요</p>

        <h1 className={styles.title}>이영우입니다.</h1>

        <p className={styles.description}>
          웹 표준과 웹 접근성을 기반으로,
          <br />
          사용자 경험을 구현하는 퍼블리셔입니다.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/lywoo00"
            target="_blank"
            className={styles.githubBtn}
          >
            <img src="/images/github.svg" alt="github" className="w-6 h-6" />
            <span className="font-medium">GitHub</span>
          </a>

          <a href="mailto:xmsxms000@gamil.com" className={styles.contactBtn}>
            <img
              src="/images/mail.svg"
              alt="github"
              className="w-6 h-6 invert"
            />
            <span className="font-medium">Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
