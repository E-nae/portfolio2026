// 네비게이션 바 높이(약 80px~100px)만큼 여유를 두고 스크롤
export const scrollToSection = (id: string, headerOffset = 100) => {
  const section = document.getElementById(id);
  if (!section) return;

  const elementPosition = section.getBoundingClientRect().top; // 현재 화면 기준 요소 위치
  const offsetPosition = elementPosition + window.scrollY - headerOffset; // 스크롤한 만큼 더해 절대 위치 계산

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};
