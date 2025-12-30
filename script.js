// ナビゲーションの開閉
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.site-nav');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // メニューリンククリックで自動クローズ
  navMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('a')) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    }
  });
}

// 接触フォームの疑似送信処理
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (form && formMessage) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const alias = form.elements['alias'].value.trim();

    let msg = '';
    if (alias) {
      msg = `「${alias}」としての痕跡は、静かに記録された。`;
    } else {
      msg = '名もなき痕跡が、円のどこかに吸い込まれていった。';
    }

    formMessage.textContent = msg;
    formMessage.style.color = 'rgba(215, 180, 106, 0.9)';

    form.reset();

    setTimeout(() => {
      formMessage.textContent = '';
    }, 4000);
  });
}