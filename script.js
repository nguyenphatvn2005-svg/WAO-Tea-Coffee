const CARDS_DATA = [
  {
    id: 'the-love',
    name: 'Tình Yêu',
    icon: '♡',
    meaning: 'Như Nữ thần trà gieo những hạt mầm tình cảm tỏa sáng xuống đồi chè sương sớm. Lá bài này tượng trưng cho sự kết nối cảm xúc sâu sắc và một tình yêu thuần khiết đang nở rộ trong cuộc sống của bạn.',
    action: 'Hãy gửi một lời nhắn yêu thương chân thành đến người mà bạn luôn giữ vị trí đặc biệt trong tim.',
    stats: { motivation: 85, focus: 70, creativity: 88, peace: 90, hope: 95 }
  },
  {
    id: 'the-family',
    name: 'Gia Đình',
    icon: '👥',
    meaning: 'Chiếc áo choàng ngọc lục bảo che chở những mầm trà non dưới ánh sương mai. Đây là lúc bạn quay về với cội nguồn, trân trọng sự gắn kết, bảo vệ và tình yêu thương vô điều kiện từ những người thân yêu.',
    action: 'Dành thời gian ăn một bữa cơm ấm cúng hoặc gọi điện hỏi thăm người thân yêu của bạn tối nay.',
    stats: { motivation: 80, focus: 75, creativity: 65, peace: 98, hope: 90 }
  },
  {
    id: 'the-friendship',
    name: 'Tình Bạn',
    icon: '∞',
    meaning: 'Hai lá trà đan vào nhau tạo thành biểu tượng vô cực rực sáng. Một tình bạn chân thành và sự đồng hành đáng tin cậy đang ở bên bạn. Vũ trụ nhắc nhở bạn hãy trân trọng những người luôn kề vai sát cánh.',
    action: 'Hãy rủ một người bạn thân cùng thưởng thức một ly trà WAO và ôn lại những kỷ niệm đẹp.',
    stats: { motivation: 88, focus: 70, creativity: 85, peace: 85, hope: 92 }
  },
  {
    id: 'the-healing',
    name: 'Chữa Lành',
    icon: '☕',
    meaning: 'Giữa biển mây và đồi chè, mọi tổn thương đang dần được xoa dịu. Làn khói trà hòa quyện thành dải ngân hà mang đi những muộn phiền, để lại trong bạn một không gian bình yên và tĩnh tại tuyệt đối.',
    action: 'Nhắm mắt lại, hít thở sâu 3 lần và nhấp một ngụm trà nóng để tâm trí được hoàn toàn thư giãn.',
    stats: { motivation: 65, focus: 80, creativity: 90, peace: 100, hope: 88 }
  },
  {
    id: 'the-guidance',
    name: 'Dẫn Lối',
    icon: '⌖',
    meaning: 'Cây trà Shan Tuyết cổ thụ chói lọi dưới ánh nắng vàng như một chiếc la bàn từ vũ trụ. Trực giác và trí tuệ bản thể đang thức tỉnh, chỉ cho bạn con đường đúng đắn nhất giữa vách đá sương mù.',
    action: 'Viết ra câu hỏi lớn nhất của bạn lúc này ra giấy và tĩnh tâm lắng nghe câu trả lời từ trực giác.',
    stats: { motivation: 92, focus: 95, creativity: 80, peace: 85, hope: 90 }
  },
  {
    id: 'the-peace',
    name: 'Bình Yên',
    icon: '〰',
    meaning: 'Dù gió bão miền núi cao có vần vũ, mầm trà trắng muốt vẫn đứng vững. Sự bình yên thực sự không đến từ ngoại cảnh, mà nằm ở sự kiên định và vững chãi từ sâu thẳm bên trong tâm hồn bạn.',
    action: 'Dành 10 phút tĩnh lặng hoàn toàn, tách biệt khỏi điện thoại, chỉ hiện diện với chính mình.',
    stats: { motivation: 75, focus: 85, creativity: 70, peace: 95, hope: 85 }
  },
  {
    id: 'the-prosperity',
    name: 'Thịnh Vượng',
    icon: '☀',
    meaning: 'Gùi trà đầy ắp những búp non vàng rực rỡ dưới ánh nắng vùng cao. Mọi nỗ lực không ngừng nghỉ của bạn đang bắt đầu đơm hoa kết trái, mang lại sự trù phú, thành công và một tương lai rạng rỡ.',
    action: 'Tự thưởng cho bản thân một món quà nhỏ để ăn mừng những thành tựu dù là nhỏ nhất bạn đã đạt được.',
    stats: { motivation: 95, focus: 88, creativity: 85, peace: 75, hope: 98 }
  },
  {
    id: 'the-career',
    name: 'Sự Nghiệp',
    icon: '△',
    meaning: 'Hướng mắt về phía mặt trời mọc trên đồi chè bao la, bạn mang theo sức nặng của những hoài bão. Tham vọng và sự chăm chỉ của bạn đang mở ra một chương mới đầy hứa hẹn trên con đường sự nghiệp.',
    action: 'Liệt kê 3 mục tiêu công việc quan trọng nhất trong tuần này và bắt tay ngay vào hành động đầu tiên.',
    stats: { motivation: 98, focus: 95, creativity: 82, peace: 60, hope: 90 }
  },
  {
    id: 'the-courage',
    name: 'Dũng Khí',
    icon: '🌱',
    meaning: 'Vươn tay tới mầm trà phát sáng mọc lên từ vách đá cheo leo. Sức mạnh để đối mặt với bóng tối, vượt qua mọi nghịch cảnh và nỗi sợ hãi đang bùng cháy vô cùng mãnh liệt bên trong bạn.',
    action: 'Dám đưa ra quyết định hoặc làm một việc mà trước nay bạn luôn trăn trở, e ngại.',
    stats: { motivation: 96, focus: 85, creativity: 75, peace: 65, hope: 88 }
  },
  {
    id: 'the-passion',
    name: 'Đam Mê',
    icon: '🔥',
    meaning: 'Ngọn lửa rực hồng đan xen cùng búp trà xanh ngọc bên bếp củi lửa. Nhiệt huyết, đam mê và sự tận hiến của bạn chính là nguồn năng lượng tối thượng tạo nên những tác phẩm và giá trị tuyệt vời nhất.',
    action: 'Dành ít nhất 30 phút hôm nay để đắm chìm vào công việc hoặc sở thích mà bạn thực sự say mê.',
    stats: { motivation: 100, focus: 90, creativity: 95, peace: 60, hope: 85 }
  }
];

const STAT_LABELS = {
  motivation: 'Động Lực',
  focus: 'Tập Trung',
  creativity: 'Sáng Tạo',
  peace: 'Bình An',
  hope: 'Hy Vọng'
};

const LOADING_TEXTS = [
  'Đang đọc năng lượng của bạn...',
  'Đang kết nối chòm sao của bạn...',
  'Đang chuẩn bị thẻ bài cá nhân...'
];

const app = document.querySelector('#app');
const footer = document.querySelector('#footer');
const restartBtn = document.querySelector('#restart-btn');
const logoBtn = document.querySelector('#logo-btn');

let appState = 'landing';
let userData = null;
let drawnCard = null;
let loadingIntervalId = null;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isSmallScreen = window.matchMedia('(max-width: 560px)').matches;
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
const lowPerformanceMode = prefersReducedMotion || isSmallScreen || isTouchDevice;

if (lowPerformanceMode) {
  document.documentElement.classList.add('low-performance');
}

document.addEventListener('visibilitychange', () => {
  document.documentElement.classList.toggle('page-hidden', document.hidden);
});

function clearLoadingTimer() {
  if (loadingIntervalId) {
    window.clearInterval(loadingIntervalId);
    loadingIntervalId = null;
  }
}


function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function firstSentence(text) {
  const index = text.indexOf('.');
  return index === -1 ? text : text.slice(0, index + 1);
}

function setState(nextState) {
  if (nextState !== 'loading') {
    clearLoadingTimer();
  }

  appState = nextState;
  renderApp();
}

function renderApp() {
  footer.classList.toggle('hidden', appState !== 'landing');
  restartBtn.classList.toggle('hidden', appState !== 'result');

  if (appState === 'landing') {
    renderLanding();
  }

  if (appState === 'form') {
    renderForm();
  }

  if (appState === 'loading') {
    renderLoading();
  }

  if (appState === 'result' && drawnCard) {
    renderResult();
  }
}

function initCosmicBackground() {
  const starLayer = document.querySelector('#star-layer');
  const leafLayer = document.querySelector('#leaf-layer');

  if (!starLayer || !leafLayer) return;

  const starCount = lowPerformanceMode ? 36 : 80;
  const leafCount = lowPerformanceMode ? 0 : 6;

  const starFragment = document.createDocumentFragment();
  const leafFragment = document.createDocumentFragment();

  for (let index = 0; index < starCount; index += 1) {
    const star = document.createElement('span');
    const size = Math.random() * 1.6 + 0.8;

    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${Math.random() * 4 + 4}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starFragment.appendChild(star);
  }

  for (let index = 0; index < leafCount; index += 1) {
    const leaf = document.createElement('span');

    leaf.className = 'tea-leaf';
    leaf.textContent = '🍃';
    leaf.style.left = `${Math.random() * 100}%`;
    leaf.style.fontSize = `${Math.random() * 14 + 10}px`;
    leaf.style.animationDuration = `${Math.random() * 18 + 24}s`;
    leaf.style.animationDelay = `${Math.random() * -20}s`;
    leafFragment.appendChild(leaf);
  }

  starLayer.replaceChildren(starFragment);
  leafLayer.replaceChildren(leafFragment);
}
function renderLanding() {
  app.innerHTML = `
    <div class="fade-screen">
      <section class="hero-section">
        <div class="hero-card glass-panel">
          <div class="brand-medal">🍃</div>
          <p class="eyebrow">WAO Tea Coffee Trân Trọng Giới Thiệu</p>
          <h1 class="hero-title text-gradient-gold">VŨ TRỤ WAO</h1>
          <p class="hero-quote">&quot;Mỗi tách trà hé mở một thông điệp dành riêng cho bạn.&quot;</p>
          <p class="hero-desc">
            Mở khóa thẻ bài vũ trụ của riêng bạn qua trải nghiệm cùng WAO Tea Coffee.
            Khám phá năng lượng và những chỉ dẫn đang chờ đón.
          </p>
          <button id="start-btn" class="primary-btn" type="button">
            <span>Khám Phá Thẻ Của Tôi</span>
            <span class="arrow-icon">→</span>
          </button>
        </div>
        <div class="scroll-indicator"></div>
      </section>

      <section class="steps-section">
        <h3 class="section-title text-gradient-gold">Hành Trình Đến Với Thông Điệp</h3>
        <div class="steps-grid">
          ${renderStepCards()}
        </div>
      </section>
    </div>
  `;

  document.querySelector('#start-btn').addEventListener('click', startJourney);
}

function renderStepCards() {
  const steps = [
    { icon: '○', title: 'Bước 1', desc: 'Thưởng thức WAO Tea Coffee' },
    { icon: '✦', title: 'Bước 2', desc: 'Tìm Mã Số Vũ Trụ bí mật bên trong' },
    { icon: '★', title: 'Bước 3', desc: 'Nhập thông tin bên dưới' },
    { icon: '☀', title: 'Bước 4', desc: 'Nhận thẻ bài định mệnh của bạn' }
  ];

  return steps.map(step => `
    <article class="step-card glass-panel">
      <div class="step-icon">${step.icon}</div>
      <h4>${step.title}</h4>
      <p>${step.desc}</p>
    </article>
  `).join('');
}

function startJourney() {
  window.scrollTo({ top: 0, behavior: lowPerformanceMode ? 'auto' : 'smooth' });
  setState('form');
}

function renderForm() {
  app.innerHTML = `
    <section class="form-section fade-screen">
      <div class="form-card glass-panel">
        <div class="form-header">
          <span class="form-star">★</span>
          <h3>Kết Nối Các Vì Sao</h3>
          <p>Nhập thông tin của bạn để khám phá thông điệp dành riêng cho bạn.</p>
        </div>

        <form id="wao-form" class="wao-form" novalidate>
          <div class="form-group">
            <label for="name">Tên Của Bạn</label>
            <input id="name" class="wao-input" type="text" placeholder="VD: Nhật Linh" autocomplete="name" />
          </div>

          <div class="form-group">
            <label for="dob">Ngày Sinh</label>
            <input id="dob" class="wao-input" type="date" />
          </div>

          <div class="form-group">
            <label for="code">Mã Số Vũ Trụ Bí Mật</label>
            <input id="code" class="wao-input uppercase-input" type="text" placeholder="Tìm trong bao bì WAO" />
          </div>

          <p id="form-error" class="error-message"></p>
          <button class="submit-btn" type="submit">Khám Phá Định Mệnh</button>
        </form>
      </div>
    </section>
  `;

  const form = document.querySelector('#wao-form');
  const codeInput = document.querySelector('#code');

  codeInput.addEventListener('input', () => {
    codeInput.value = codeInput.value.toUpperCase();
  });

  form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const dob = document.querySelector('#dob').value.trim();
  const code = document.querySelector('#code').value.trim().toUpperCase();
  const errorEl = document.querySelector('#form-error');

  if (!name || !dob || !code) {
    errorEl.textContent = 'Vui lòng điền đầy đủ thông tin để kết nối các vì sao.';
    return;
  }

  if (code.length < 5) {
    errorEl.textContent = 'Mã bí mật của bạn dường như quá ngắn. Vui lòng kiểm tra lại bao bì.';
    return;
  }

  userData = { name, dob, code };
  drawnCard = drawCard();
  setState('loading');
}

function drawCard() {
  const randomCardIndex = Math.floor(Math.random() * CARDS_DATA.length);
  return CARDS_DATA[randomCardIndex];
}

function renderLoading() {
  app.innerHTML = `
    <section class="loading-section fade-screen">
      <div class="loading-box">
        <div class="loader-orbit">
          <div class="loader-center">✦</div>
        </div>
        <p id="loading-text" class="loading-text text-gradient-gold">${LOADING_TEXTS[0]}</p>
      </div>
    </section>
  `;

  let step = 0;
  const loadingText = document.querySelector('#loading-text');

  loadingIntervalId = window.setInterval(() => {
    step += 1;

    if (step < LOADING_TEXTS.length) {
      loadingText.textContent = LOADING_TEXTS[step];

      if (!lowPerformanceMode) {
        loadingText.style.animation = 'none';
        void loadingText.offsetWidth;
        loadingText.style.animation = '';
      }

      return;
    }

    clearLoadingTimer();
    setState('result');
  }, lowPerformanceMode ? 900 : 1500);
}

function renderResult() {
  const safeName = escapeHtml(userData.name);
  const cardIndex = CARDS_DATA.findIndex(card => card.id === drawnCard.id) + 1;

  app.innerHTML = `
    <section class="result-section fade-screen">
      <div class="card-scene">
        <div id="card-container" class="card-container">
          <div class="card-face card-front">
            <div class="card-front-content">
              <span class="card-front-leaf">🍃</span>
              <div class="card-front-title">VŨ TRỤ WAO</div>
            </div>
          </div>

          <div class="card-face card-back">
            <div class="card-inner-border"></div>
            <span class="card-index">Số ${cardIndex}</span>
            <span class="card-brand">WAO</span>
            <div class="card-art">
              <div class="card-icon-circle">
                <span class="card-icon">${drawnCard.icon}</span>
              </div>
              <h2 class="card-name text-gradient-gold">${drawnCard.name}</h2>
              <div class="divider"></div>
              <p class="card-short-text">&quot;${firstSentence(drawnCard.meaning)}&quot;</p>
            </div>
          </div>
        </div>
      </div>

      <div id="result-content" class="result-content">
        <p class="result-eyebrow">Thông Điệp Dành Cho ${safeName}</p>
        <h2 class="result-title">${drawnCard.name}</h2>

        <div class="message-panel glass-panel">
          <span class="panel-bg-icon">${drawnCard.icon}</span>
          <p class="message-text">${drawnCard.meaning}</p>

          <div class="action-box">
            <p class="action-title">⚡ Hành Động Hôm Nay</p>
            <p class="action-text">${drawnCard.action}</p>
          </div>
        </div>

        ${renderEnergyInsight(drawnCard.stats)}

        <div class="share-row">
          <button class="share-btn" data-share="Instagram" type="button">📸 Chia sẻ lên Story</button>
          <button class="share-btn" data-share="Download" type="button">⬇ Lưu Thẻ</button>
        </div>
      </div>
    </section>

    ${renderCollectionDrawer(drawnCard.id)}
  `;

  document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', () => handleShare(button.dataset.share));
  });

  setupDrawerEvents();
  playResultAnimation();
}

function playResultAnimation() {
  const cardContainer = document.querySelector('#card-container');
  const resultContent = document.querySelector('#result-content');

  const flipDelay = lowPerformanceMode ? 150 : 1000;
  const contentDelay = lowPerformanceMode ? 150 : 800;

  window.setTimeout(() => {
    cardContainer.classList.add('is-flipped');

    window.setTimeout(() => {
      resultContent.classList.add('visible');
      animateEnergyBars();
    }, contentDelay);
  }, flipDelay);
}

function renderEnergyInsight(stats) {
  const rows = Object.entries(stats).map(([key, value]) => `
    <div class="energy-item">
      <div class="energy-head">
        <span>${STAT_LABELS[key] || key}</span>
        <span class="energy-value">${value}%</span>
      </div>
      <div class="energy-bar-container">
        <div class="energy-bar-fill" data-width="${value}%"></div>
      </div>
    </div>
  `).join('');

  return `
    <div class="energy-panel glass-panel">
      <h4 class="energy-title">Thấu Hiểu Năng Lượng</h4>
      <div class="energy-list">${rows}</div>
    </div>
  `;
}

function animateEnergyBars() {
  document.querySelectorAll('.energy-bar-fill').forEach(bar => {
    window.setTimeout(() => {
      bar.style.width = bar.dataset.width;
    }, 100);
  });
}

function handleShare(platform) {
  alert(`Hành động này sẽ mở hộp thoại chia sẻ cho ${platform} cùng với hình ảnh thẻ bài của bạn!`);
}

function renderCollectionDrawer(currentCardId) {
  const collectedIds = Array.from(new Set(['the-love', 'the-healing', currentCardId]));
  const progress = Math.round((collectedIds.length / CARDS_DATA.length) * 100);

  const items = CARDS_DATA.map(card => {
    const isCollected = collectedIds.includes(card.id);

    return `
      <article class="collection-item ${isCollected ? 'collected' : ''}">
        <div class="collection-icon">${card.icon}</div>
        <div class="collection-info">
          <h4>${card.name}</h4>
          <span>${isCollected ? '✓ Đã Mở Khoá' : 'Đã Khóa'}</span>
        </div>
      </article>
    `;
  }).join('');

  return `
    <button id="drawer-toggle" class="drawer-toggle" type="button" aria-label="Mở bộ sưu tập">✦</button>
    <div id="drawer-overlay" class="drawer-overlay hidden"></div>

    <aside id="collection-drawer" class="collection-drawer" aria-label="Bộ sưu tập thẻ WAO">
      <div class="drawer-content">
        <div class="drawer-header">
          <h2 class="text-gradient-gold">Bộ Sưu Tập Của Bạn</h2>
          <button id="drawer-close" class="drawer-close" type="button" aria-label="Đóng bộ sưu tập">×</button>
        </div>

        <div class="progress-panel">
          <div class="progress-head">
            <span>Tiến Trình Vũ Trụ</span>
            <span class="progress-value">${collectedIds.length} / ${CARDS_DATA.length}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%;"></div>
          </div>
        </div>

        <div class="collection-list">${items}</div>

        <p class="drawer-note">
          Khám phá thêm nhiều mã số bên trong các sản phẩm WAO Tea Coffee để hoàn thiện chòm sao của bạn.
        </p>
      </div>
    </aside>
  `;
}

function setupDrawerEvents() {
  const drawer = document.querySelector('#collection-drawer');
  const overlay = document.querySelector('#drawer-overlay');
  const openBtn = document.querySelector('#drawer-toggle');
  const closeBtn = document.querySelector('#drawer-close');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.remove('hidden');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.add('hidden');
  }

  openBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
}

restartBtn.addEventListener('click', () => setState('landing'));
logoBtn.addEventListener('click', () => setState('landing'));

initCosmicBackground();
renderApp();
