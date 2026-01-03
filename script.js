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

document.addEventListener("DOMContentLoaded", () => {
  const SECRET_KEY = "6709";

  const heroCTA = document.querySelector(".hero-cta");
  const modal = document.getElementById("gate-modal");
  const input = document.getElementById("gate-input");
  const submit = document.getElementById("gate-submit");
  const errorMsg = document.getElementById("gate-error");

  const lockedSections = document.querySelectorAll(
    "#doctrine, #rituals, #contact, .site-footer"
  );

  // 初期非表示
  lockedSections.forEach(sec => sec.style.display = "none");

  // ボタン押したらモーダル表示
  heroCTA.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show");
  });

  // 開門
  submit.addEventListener("click", () => {
    if (input.value === SECRET_KEY) {
      modal.classList.remove("show");

      lockedSections.forEach(sec => {
        sec.style.display = "block";
        sec.style.opacity = 0;
        setTimeout(() => {
          sec.style.transition = "opacity 0.6s ease";
          sec.style.opacity = 1;
        }, 10);
      });
    } else {
      errorMsg.textContent = "あなたを監視しています。";
    }
  });
});