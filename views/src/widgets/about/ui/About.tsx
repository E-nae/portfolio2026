export function About() {
  return (
    <section id="about" className="py-32 bg-gray-900 text-white">
      <div className="container px-8 mx-auto text-center max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold">About Me</h2>
        <p className="text-xl leading-relaxed text-gray-300">
          막히면 파고들고, 새로우면 일단 써봅니다.<br />
          문제가 풀리는 순간의 짜릿함 때문에 오늘도 코드를 씁니다.
        </p>
        <p className="mt-10 text-2xl font-bold tracking-tight md:text-3xl">
          Enae + Enable ={' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
            Enaeble.
          </span>
        </p>
      </div>
    </section>
  );
}
