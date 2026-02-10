const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');

if (saved === 'dark') {
  document.body.classList.add('dark');
  toggle.textContent = '☀️ 라이트모드';
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggle.textContent = isDark ? '☀️ 라이트모드' : '🌙 다크모드';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
