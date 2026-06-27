const { useState, useEffect, useMemo, useRef } = React;
const { motion, AnimatePresence } = window.Motion;

// --- ICONS (Inline SVGs for reliable rendering without bundlers) ---
const Icons = {
  Sparkles: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  Check: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  Share2: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  ),
  Download: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  ),
  Facebook: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Leaf: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  User: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Tree: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.6 15c-1.3-.9-2.3-2.3-2.6-3.9" />
      <path d="M10 18c-1.8 0-3.4-.6-4.7-1.6C4 15.3 3.3 13.7 3.3 12c0-3.3 2.5-6 5.7-6s5.7 2.7 5.7 6c0 .7-.1 1.4-.4 2" />
      <path d="m14 11 3-3" />
      <path d="M14 11v6c0 .6.4 1 1 1h3" />
      <path d="M12 22v-4" />
    </svg>
  ),
  Crown: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  ),
};

// --- DATA SYSTEM (10 BÀI) ---
const GROUPS = {
  FOUNDER: {
    id: "founder",
    name: "Ông Khai Trà",
    icon: Icons.User,
    desc: "Người đặt nền móng cho văn hóa trà.",
  },
  TREE: {
    id: "tree",
    name: "Cây Trà Cổ Thụ",
    icon: Icons.Tree,
    desc: "Biểu tượng của sự vững chãi và nội lực.",
  },
  FARMER: {
    id: "farmer",
    name: "Người Nông Dân",
    icon: Icons.Leaf,
    desc: "Tinh thần hiện đại, kết nối và bứt phá.",
  },
  SPECIAL: {
    id: "special",
    name: "Tổng Hòa",
    icon: Icons.Crown,
    desc: "Sự hội tụ tinh hoa đất trời và con người.",
  },
};

const CARDS_DATA = [
  {
    id: 1,
    name: "Khởi Đầu",
    group: GROUPS.FOUNDER,
    image: "./images/1.png",
    meaning: "Đại diện cho sự bắt đầu, nguồn cảm hứng.",
    message:
      "Mọi hành trình vĩ đại đều bắt đầu từ một bước đi nhỏ. Hôm nay là ngày tuyệt vời để bạn gieo hạt giống cho dự định đang ấp ủ.",
    action:
      "Hãy viết ra 1 mục tiêu nhỏ bạn muốn hoàn thành trong tuần này và bắt tay làm ngay.",
  },
  {
    id: 2,
    name: "Cảm Hứng",
    group: GROUPS.FOUNDER,
    image: "./images/2.png",
    meaning: "Ngọn lửa nhiệt huyết bên trong bạn.",
    message:
      "Vũ trụ đang gửi đến bạn một luồng ánh sáng mới. Đừng ngần ngại theo đuổi những ý tưởng có vẻ điên rồ lướt qua tâm trí bạn hôm nay.",
    action:
      "Dành 15 phút nghe một bản nhạc không lời và để trí tưởng tượng bay xa.",
  },
  {
    id: 3,
    name: "Định Hướng",
    group: GROUPS.FOUNDER,
    image: "./images/3.png",
    meaning: "Kim chỉ nam cho hành trình dài.",
    message:
      "Đôi khi chậm lại là cách nhanh nhất để tiến lên. Sự rõ ràng trong tâm trí bạn lúc này quý giá hơn tốc độ.",
    action: "Dọn dẹp lại góc làm việc để dọn dẹp tâm trí.",
  },

  {
    id: 4,
    name: "Phát Triển",
    group: GROUPS.TREE,
    image: "./images/4.png",
    meaning: "Sự vươn lên mạnh mẽ và tự nhiên.",
    message:
      "Như cây Shan Tuyết bám rễ sâu vào sỏi đá, những khó khăn hiện tại chỉ đang giúp bạn vững vàng hơn trong tương lai.",
    action:
      "Học một điều gì đó mới hôm nay, dù chỉ là một từ vựng hay một kỹ năng nhỏ.",
  },
  {
    id: 5,
    name: "Cân Bằng",
    group: GROUPS.TREE,
    image: "./images/5.png",
    meaning: "Trạng thái hài hòa giữa cho và nhận.",
    message:
      "Bạn đã nỗ lực rất nhiều. Hôm nay, Vũ trụ khuyên bạn hãy ưu tiên nạp lại năng lượng cho bản thân.",
    action:
      "Thưởng thức một tách trà nóng, tắt thông báo điện thoại trong 30 phút.",
  },
  {
    id: 6,
    name: "Lắng Nghe",
    group: GROUPS.TREE,
    image: "./images/6.png",
    meaning: "Thấu hiểu bản thân và thế giới xung quanh.",
    message:
      "Câu trả lời bạn tìm kiếm bấy lâu nay đã có sẵn bên trong bạn. Hãy để không gian tĩnh lặng giúp bạn nghe thấy nó.",
    action: "Đi bộ 10 phút một mình mà không mang theo thiết bị điện tử.",
  },

  {
    id: 7,
    name: "Kết Nối",
    group: GROUPS.FARMER,
    image: "./images/7.png",
    meaning: "Sợi dây liên kết giữa người với người.",
    message:
      "Một cuộc gặp gỡ ngẫu nhiên hoặc một dòng tin nhắn hôm nay có thể mang lại cho bạn những cơ hội bất ngờ.",
    action: "Gửi một lời cảm ơn hoặc hỏi thăm chân thành đến một người cũ.",
  },

  {
    id: 8,
    name: "Bứt Phá",
    group: GROUPS.FARMER,
    image: "./images/8.png",
    meaning: "Vượt qua giới hạn an toàn.",
    message:
      "Đã đến lúc bước ra khỏi vùng an toàn. Bạn có đủ năng lực để làm những điều lớn lao hơn bạn nghĩ.",
    action: "Làm một việc mà bạn luôn e ngại hoặc trì hoãn bấy lâu.",
  },
  {
    id: 9,
    name: "Dám Bước",
    group: GROUPS.FARMER,
    image: "./images/9.png",
    meaning: "Hành động bất chấp nỗi sợ.",
    message:
      "Sự hoàn hảo là kẻ thù của hành động. Hãy cứ làm, sai và sửa. Quan trọng là bạn dám bắt đầu.",
    action: "Ra một quyết định nhanh chóng cho vấn đề đang khiến bạn phân vân.",
  },

  {
    id: 10,
    name: "NIỀM TIN",
    group: GROUPS.SPECIAL,
    image: "./images/10.png",
    meaning: "Khởi đầu + Nội lực + Hành động",
    message:
      "Bạn đang sở hữu lá bài hiếm nhất của Vũ Trụ WAO. Mọi yếu tố thiên thời, địa lợi, nhân hòa đang hội tụ. Hãy tin tưởng tuyệt đối vào bản thân.",
    action: "Mỉm cười thật tươi trước gương, bạn đang ở phiên bản rực rỡ nhất!",
  },
];
const CARD_STATS = {
  1: { motivation: 82, focus: 76, creativity: 88, peace: 70, hope: 92 },
  2: { motivation: 90, focus: 72, creativity: 96, peace: 68, hope: 88 },
  3: { motivation: 78, focus: 94, creativity: 75, peace: 86, hope: 84 },

  4: { motivation: 88, focus: 84, creativity: 80, peace: 78, hope: 95 },
  5: { motivation: 70, focus: 82, creativity: 72, peace: 96, hope: 85 },
  6: { motivation: 72, focus: 90, creativity: 84, peace: 94, hope: 82 },

  7: { motivation: 86, focus: 74, creativity: 89, peace: 82, hope: 93 },
  8: { motivation: 96, focus: 85, creativity: 75, peace: 65, hope: 88 },
  9: { motivation: 94, focus: 88, creativity: 78, peace: 66, hope: 90 },

  10: { motivation: 100, focus: 96, creativity: 98, peace: 92, hope: 100 },
};

const STAT_LABELS = {
  motivation: "Động Lực",
  focus: "Tập Trung",
  creativity: "Sáng Tạo",
  peace: "Bình An",
  hope: "Hy Vọng",
};
const VALID_WAO_CODES = new Set([
  "LAUREL2005",
  "LAUREL102",
  "LAURELA1",
  "LAURELK23",
  "LAUREL27",
  "LAUREL7D",
  "LAUREL4E",
  "LAUREL3F",
  "LAUREL6G",
  "LAUREL1H",

  "1KLAUREL",
  "9MLAUREL",
  "5NLAUREL",
  "8PLAUREL",
  "2QLAUREL",
  "7RLAUREL",
  "4SLAUREL",
  "6TLAUREL",
  "3VLAUREL",
  "0WLAUREL",

  "XLAUREL9",
  "YLAUREL2",
  "ZLAUREL5",
  "KLAUREL7",
  "DLAUREL4",

  "WAO1A2B3",
  "WAO9X8Y7",
  "WAO4C5D6",
  "WAO7E8F9",
  "WAO2G3H4",
  "WAO5J6K7",
  "WAO8M9N0",
  "WAO3P4Q5",
  "WAO6R7S8",
  "WAO1T2V3",

  "1A2BWAO3",
  "9X8YWAO7",
  "4C5DWAO6",
  "7E8FWAO9",
  "2G3HWAO4",
  "5J6KWAO7",
  "8M9NWAO0",
  "3P4QWAO5",
  "6R7SWAO8",
  "1T2VWAO3",

  "A1WAO2B3",
  "X9WAO8Y7",
  "C4WAO5D6",
  "E7WAO8F9",
  "G2WAO3H4",

  // Mã ảo để test
  "WAOTEST01",
]);
const USED_WAO_CODES_KEY = "waoUsedCodes";

const getUsedWaoCodes = () => {
  try {
    const savedCodes = localStorage.getItem(USED_WAO_CODES_KEY);
    return savedCodes ? JSON.parse(savedCodes) : [];
  } catch (error) {
    return [];
  }
};

const saveUsedWaoCode = (code) => {
  const usedCodes = getUsedWaoCodes();

  if (!usedCodes.includes(code)) {
    usedCodes.push(code);
    localStorage.setItem(USED_WAO_CODES_KEY, JSON.stringify(usedCodes));
  }
};
// --- SHARED UI COMPONENTS ---

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) => {
  const baseStyle =
    "relative overflow-hidden font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gold text-navy hover:shadow-gold-glow font-bold",
    outline: "bg-transparent border border-gold text-gold hover:bg-gold/10",
    glass: "glass-panel text-white hover:bg-white/10",
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

const Logo = ({ onHome }) => (
  <div className="fixed top-1 left-1/2 -translate-x-1/2 z-50">
    <motion.button
      type="button"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      onClick={onHome}
      className="flex items-center justify-center cursor-pointer bg-transparent border-0 p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-4 focus-visible:ring-offset-cosmic rounded-xl"
      aria-label="Về trang chính WAO"
    >
      <img
        src="./images/logo.png"
        alt="WAO Tea Coffee"
        className="w-[110px] md:w-[140px] h-auto object-contain drop-shadow-[0_0_18px_rgba(220,152,42,0.35)]"
      />
    </motion.button>
  </div>
);

// --- MAIN VIEWS ---

const JourneySteps = () => {
  const steps = [
    { icon: "○", title: "Bước 1", desc: "Thưởng thức WAO Tea Coffee" },
    { icon: "✦", title: "Bước 2", desc: "Tìm Mã Số Vũ Trụ bí mật bên trong" },
    { icon: "★", title: "Bước 3", desc: "Nhập thông tin bên dưới" },
    { icon: "☀", title: "Bước 4", desc: "Nhận thẻ bài định mệnh của bạn" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 pb-24 relative z-10">
      <motion.h2
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center text-gold mb-14 drop-shadow-[0_0_18px_rgba(220,152,42,0.25)]"
      >
        Hành Trình Đến Với Vũ Trụ WAO
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.12 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative overflow-hidden glass-panel rounded-3xl px-6 py-8 min-h-[190px] flex flex-col items-center justify-center text-center border-gold/15 hover:border-gold/40 transition-all duration-300"
          >
            <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-teagreen/10 group-hover:bg-gold/10 transition-colors duration-300"></div>
            <div className="relative z-10 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-gold text-3xl shadow-[0_0_22px_rgba(220,152,42,0.12)]">
              {step.icon}
            </div>
            <h3 className="relative z-10 text-white text-xl font-bold mb-3">
              {step.title}
            </h3>
            <p className="relative z-10 text-white/60 text-sm md:text-base leading-relaxed">
              {step.desc}
            </p>
          </motion.article>
        ))}
      </div>

      <p className="mt-20 text-center text-white/25 text-sm">
        © 2026 WAO Tea Coffee. Phiên bản thử nghiệm.
      </p>
    </section>
  );
};

const HeroView = ({ onNext }) => (
  <motion.div
    key="hero"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.03 }}
    className="relative z-10 w-full"
  >
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gold tracking-[0.2em] text-sm md:text-base font-medium mb-4 uppercase"
      >
        Ngày Một Vị, Ngày Một Vui
      </motion.h2>

      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="text-5xl md:text-7xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      >
        VŨ TRỤ WAO
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-md text-white/80 text-sm md:text-base mb-12 leading-relaxed"
      >
        Mở khóa thẻ bài Vũ Trụ của riêng bạn qua trải nghiệm cùng WAO Tea
        Coffee. Khám phá nguồn năng lượng tích cực và những chỉ dẫn đang chờ đón
        hôm nay.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button
          onClick={onNext}
          variant="primary"
          className="shadow-[0_0_20px_rgba(220,152,42,0.4)]"
        >
          <Icons.Sparkles />
          Khám phá thẻ bài của bạn
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 0.45, y: 8 }}
        transition={{
          delay: 1.15,
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[3px] h-12 rounded-full bg-gradient-to-b from-gold to-transparent"
      />
    </section>

    <JourneySteps />
  </motion.div>
);

const FormView = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    code: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedCode = formData.code.trim().toUpperCase();
    const usedCodes = getUsedWaoCodes();

    if (!formData.name.trim() || !formData.dob || !normalizedCode) {
      setError("Vui lòng điền đầy đủ thông tin để kết nối Vũ Trụ.");
      return;
    }

    if (!VALID_WAO_CODES.has(normalizedCode)) {
      setError("Mã WAO không hợp lệ. Vui lòng kiểm tra lại mã trên bao bì.");
      return;
    }

    if (usedCodes.includes(normalizedCode)) {
      setError("Mã WAO này đã được sử dụng. Vui lòng dùng mã khác.");
      return;
    }

    saveUsedWaoCode(normalizedCode);

    setError("");

    onNext({
      ...formData,
      name: formData.name.trim(),
      code: normalizedCode,
    });
  };

  return (
    <motion.div
      key="form"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-8 w-full relative z-10"
    >
      <div className="glass-panel p-8 md:p-12 rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

        <h2 className="text-3xl font-serif text-center mb-2 text-gold">
          Kết Nối Bản Thân
        </h2>
        <p className="text-center text-sm text-white/60 mb-8">
          Nhập thông tin để giải mã năng lượng của bạn
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 pl-2">
              Họ và tên
            </label>
            <input
              type="text"
              required
              placeholder="Ví dụ: Nguyễn Văn A"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 pl-2">
              Ngày sinh
            </label>
            <input
              type="date"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors [color-scheme:dark]"
              value={formData.dob}
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 pl-2">
              Mã WAO (Trong bao bì)
            </label>
            <input
              type="text"
              required
              placeholder="Nhập mã 8 ký tự..."
              uppercase="true"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors uppercase"
              value={formData.code}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  code: e.target.value.toUpperCase(),
                })
              }
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <div className="pt-4">
            <Button type="submit" className="w-full shadow-gold-glow">
              Mở khóa thẻ bài <Icons.ArrowRight />
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

const GeneratingView = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const messages = [
    "Đang kết nối Vũ Trụ WAO...",
    "Đang phân tích nguồn năng lượng...",
    "Đang tạo thẻ bài dành riêng cho bạn...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= messages.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 1000); // Wait 1s after last message
          return prev;
        }
        return prev + 1;
      });
    }, 1200); // 1.2s per text
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      key="generating"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen text-center z-20"
    >
      <div className="relative w-40 h-40 mb-8">
        {/* Orbiting rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-t-gold border-r-transparent border-b-teagreen border-l-transparent opacity-50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border border-t-transparent border-r-gold border-b-transparent border-l-gold opacity-70"
        />
        {/* Center glowing orb */}
        <motion.div
          className="absolute inset-8 rounded-full bg-gradient-to-tr from-gold to-teagreen shadow-gold-glow-intense"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>

      <div className="h-12 relative overflow-hidden w-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="text-xl font-serif text-gold tracking-wide absolute"
          >
            {messages[step]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
const EnergyInsight = ({ cardId }) => {
  const stats = CARD_STATS[cardId];

  if (!stats) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.7 }}
      className="w-full glass-panel rounded-3xl p-5 md:p-6 border border-gold/15"
    >
      <h3 className="text-center text-2xl font-serif text-gold font-bold mb-5 pb-4 border-b border-white/10">
        Thấu Hiểu Năng Lượng
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {Object.entries(stats).map(([key, value], index) => (
          <div
            key={key}
            className="bg-white/5 rounded-2xl p-4 border border-white/10"
          >
            <div className="flex items-center justify-between mb-3 text-sm">
              <span className="text-white/75 font-semibold">
                {STAT_LABELS[key]}
              </span>
              <span className="text-gold font-bold">{value}%</span>
            </div>

            <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="h-full rounded-full bg-gradient-to-r from-teagreen to-gold shadow-[0_0_10px_rgba(220,152,42,0.55)]"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const WaoInfoCard = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7 }}
      className="w-full glass-panel rounded-3xl p-6 md:p-8 border border-gold/15 overflow-hidden relative"
    >
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-teagreen/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-serif text-gold font-bold mb-4 drop-shadow-[0_0_18px_rgba(220,152,42,0.25)]">
          Có thể bạn chưa biết về WAO
        </h1>

        <p className="text-white/75 text-xs md:text-sm leading-relaxed">
          Là nhà cung cấp nguyên liệu cho hơn 8.000 đối tác F&amp;B lớn, nhờ sở
          hữu nhà máy 6.000m2 đạt chuẩn quốc tế (FDA, ISO) <br />
          và công nghệ chiết xuất độc quyền, WAO luôn giữ trọn vẹn &quot;hậu vị
          Umami&quot; nguyên bản từ lá trà thật.
        </p>
      </div>
    </motion.section>
  );
};

const TarotCard = ({ cardData, isFlipped, isSpecial }) => {
  const Icon = cardData.group.icon;

  return (
    <div className="relative w-[min(82vw,340px)] aspect-[2/3] perspective-1000 mx-auto no-select">
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        initial={false}
        animate={{ rotateY: isFlipped ? 0 : 180, y: isFlipped ? 0 : -20 }}
        transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {/* BACK OF CARD (Showing initially because it's rotated 180 by default) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl border border-gold/30 bg-gradient-to-b from-navy to-[#051020] shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center justify-center p-6">
          {/* Decorative borders */}
          <div className="absolute inset-2 border border-gold/20 rounded-xl" />
          <div className="absolute inset-3 border border-dashed border-gold/10 rounded-lg" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-32 h-32 opacity-20 mb-4"
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="#DC982A"
              strokeWidth="1"
            >
              <circle cx="50" cy="50" r="40" />
              <path d="M50 10 L50 90 M10 50 L90 50" />
              <path d="M20 20 L80 80 M20 80 L80 20" />
              <circle cx="50" cy="50" r="20" />
            </svg>
          </motion.div>
          <div className="text-gold font-serif text-xl tracking-widest uppercase">
            WAO
          </div>
          <div className="text-white/40 text-xs tracking-[0.3em]">Universe</div>
        </div>

        {/* FRONT OF CARD */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-[#0a182c] border-2 border-gold shadow-gold-glow overflow-hidden">
          {cardData.image && (
            <img
              src={cardData.image}
              alt={cardData.name}
              className="absolute left-1/2 top-1/2 w-[112%] h-[112%] -translate-x-1/2 -translate-y-1/2 object-cover brightness-[1.15] contrast-105 saturate-110"
            />
          )}

          <div
            className={`absolute inset-0 ${
              cardData.image
                ? "bg-gradient-to-b from-[#061324]/5 via-[#061324]/10 to-[#061324]/45"
                : `opacity-40 mix-blend-screen bg-gradient-to-tr ${
                    isSpecial
                      ? "from-gold via-teagreen to-purple-500"
                      : "from-navy via-transparent to-gold/20"
                  }`
            }`}
          />

          <div className="absolute inset-3 border border-gold/40 rounded-xl pointer-events-none flex flex-col items-center p-4">
            <div className="relative z-10 text-gold/80 text-xs font-serif uppercase tracking-widest mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {isSpecial
                ? "★ THẺ BÀI ĐẶC BIỆT ★"
                : `— No. ${cardData.id.toString().padStart(2, "0")} —`}
            </div>

            <div className="flex-1 flex flex-col items-center justify-center w-full relative">
              {!cardData.image && (
                <>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />

                  <motion.div
                    className={`relative z-10 flex items-center justify-center w-24 h-24 rounded-full border border-gold/50 bg-navy/80 shadow-lg ${
                      isSpecial ? "shadow-gold-glow-intense" : ""
                    }`}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon
                      className={`w-12 h-12 ${
                        isSpecial ? "text-white" : "text-gold"
                      }`}
                    />
                  </motion.div>
                </>
              )}

              <div
                className={`relative z-10 text-teagreen text-xs tracking-widest uppercase font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ${
                  cardData.image
                    ? "mt-auto mb-8 bg-[#061324]/35 border border-gold/20 rounded-full px-4 py-2"
                    : "mt-8"
                }`}
              >
                {cardData.group.name}
              </div>
            </div>

            <div
              className={`relative z-10 text-center mt-auto w-full ${
                cardData.image
                  ? "rounded-xl bg-[#061324]/45 border border-gold/25 px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                  : "border-t border-gold/20 pt-4 pb-4"
              }`}
            >
              <h3
                className={`font-serif font-bold text-3xl mb-1 drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] ${
                  isSpecial
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold animate-pulse-glow"
                    : "text-gold"
                }`}
              >
                {cardData.name}
              </h3>

              <p className="text-white/75 text-xs italic font-serif drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                "{cardData.meaning}"
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const RevealResultView = ({ cardData, userData, onCollection }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipped(true);
      setTimeout(() => setShowDetails(true), 1500);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const isSpecial = cardData.id === 10;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 lg:px-12 z-20 relative pt-24 gap-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[380px_minmax(0,520px)] items-center justify-center gap-8 lg:gap-12">
        {/* The 3D Card */}
        <motion.div
          initial={{ scale: 0.8, y: 100, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex justify-center"
        >
          <TarotCard
            cardData={cardData}
            isFlipped={isFlipped}
            isSpecial={isSpecial}
          />
        </motion.div>

        {/* Text Details & Actions */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full max-w-xl justify-self-center lg:justify-self-start flex flex-col glass-panel p-6 md:p-8 rounded-3xl"
            >
              <h4 className="text-gold uppercase tracking-widest text-sm mb-2">
                Thông điệp của {userData.name}
              </h4>

              <h2 className="text-4xl font-serif text-white mb-6 font-bold">
                {cardData.name}
              </h2>

              <div className="space-y-5">
                <div>
                  <h5 className="text-teagreen text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Icons.Sparkles className="w-4 h-4" /> Lời Nhắn Từ Vũ Trụ
                  </h5>

                  <p className="text-white/80 leading-relaxed text-sm md:text-base italic">
                    "{cardData.message}"
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h5 className="text-gold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Icons.Check className="w-4 h-4" /> Hành động hôm nay
                  </h5>

                  <p className="text-white text-sm">{cardData.action}</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  variant="primary"
                  className="w-full text-sm py-3 whitespace-nowrap"
                  onClick={() => alert("Đã lưu hình ảnh thẻ bài! (Demo)")}
                >
                  <Icons.Download /> Tải thẻ bài
                </Button>

                <Button
                  variant="outline"
                  className="w-full text-sm py-3 whitespace-nowrap"
                  onClick={onCollection}
                >
                  Xem bộ sưu tập
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/50 text-xs">Chia sẻ niềm vui:</span>

                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
                    <Icons.Facebook />
                  </button>

                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                    <Icons.Instagram />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showDetails && (
        <div className="w-full max-w-6xl space-y-8">
          <EnergyInsight cardId={cardData.id} />
          <WaoInfoCard />
        </div>
      )}
    </div>
  );
};

const CollectionView = ({ collectedIds, totalCards, onBack }) => {
  return (
    <motion.div
      key="collection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full p-6 pt-24 pb-20 relative z-20 max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-gold mb-2">
          Bộ Sưu Tập Thẻ Bài
        </h2>
        <p className="text-white/60">
          Đã sưu tập {collectedIds.length}/{totalCards} lá bài Vũ Trụ WAO
        </p>

        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${(collectedIds.length / totalCards) * 100}%`,
            }}
            className="h-full bg-gradient-to-r from-teagreen to-gold"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {CARDS_DATA.map((card) => {
          const isUnlocked = collectedIds.includes(card.id);
          const Icon = card.group.icon;

          return (
            <motion.div
              key={card.id}
              whileHover={isUnlocked ? { scale: 1.05, y: -5 } : {}}
              className={`group relative aspect-[2/3] rounded-xl border overflow-hidden transition-all ${
                isUnlocked
                  ? "bg-[#0a182c] border-gold/50 shadow-[0_4px_20px_rgba(220,152,42,0.15)] cursor-pointer"
                  : "bg-white/5 border-white/10 opacity-50 grayscale"
              }`}
            >
              {isUnlocked && card.image && (
                <img
                  src={card.image}
                  alt={card.name}
                  className="absolute inset-0 w-full h-full object-cover brightness-[1.08] saturate-110"
                />
              )}

              <div
                className={`absolute inset-0 ${
                  isUnlocked
                    ? "bg-gradient-to-b from-[#061324]/10 via-[#061324]/25 to-[#061324]/85"
                    : "bg-[#061324]/90"
                }`}
              />

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                {isUnlocked ? (
                  <>
                    {!card.image && (
                      <Icon
                        className={`w-8 h-8 mb-4 ${
                          card.id === 10 ? "text-white" : "text-gold"
                        }`}
                      />
                    )}

                    <div className={card.image ? "mt-auto mb-3" : ""}>
                      <h3
                        className={`font-serif text-center font-bold drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)] ${
                          card.id === 10
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-gold to-white"
                            : "text-gold"
                        }`}
                      >
                        {card.name}
                      </h3>

                      <p className="text-[10px] text-white/70 text-center mt-2 uppercase font-semibold tracking-wider drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                        {card.group.name}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center mb-2">
                      <Icons.Share2 className="w-5 h-5 text-white/30" />
                    </div>
                    <span className="text-xs text-white/40">Chưa mở khóa</span>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" onClick={onBack} className="mx-auto">
          Quay lại màn hình chính
        </Button>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [view, setView] = useState("hero"); // hero, form, generating, result, collection
  const [userData, setUserData] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [collection, setCollection] = useState([1, 4]); // Mock pre-collected IDs

  const handleStart = () => setView("form");
  const handleGoHome = () => {
    setView("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleFormSubmit = (data) => {
    setUserData(data);
    setView("generating");
  };

  const handleGenerationComplete = () => {
    const params = new URLSearchParams(window.location.search);
    const previewId = Number(params.get("card"));

    let drawnCard;

    if (previewId) {
      drawnCard = CARDS_DATA.find((c) => c.id === previewId);
    }

    if (!drawnCard) {
      const isLucky = Math.random() > 0.9;

      if (isLucky) {
        drawnCard = CARDS_DATA.find((c) => c.id === 10);
      } else {
        const normalCards = CARDS_DATA.filter((c) => c.id !== 10);
        drawnCard = normalCards[Math.floor(Math.random() * normalCards.length)];
      }
    }

    setCurrentCard(drawnCard);

    if (!collection.includes(drawnCard.id)) {
      setCollection((prev) => [...prev, drawnCard.id]);
    }

    setView("result");
  };

  return (
    <>
      <Logo onHome={handleGoHome} />
      <AnimatePresence mode="wait">
        {view === "hero" && <HeroView onNext={handleStart} />}
        {view === "form" && <FormView onNext={handleFormSubmit} />}
        {view === "generating" && (
          <GeneratingView onComplete={handleGenerationComplete} />
        )}
        {view === "result" && (
          <RevealResultView
            cardData={currentCard}
            userData={userData}
            onCollection={() => setView("collection")}
          />
        )}
        {view === "collection" && (
          <CollectionView
            collectedIds={collection}
            totalCards={10}
            onBack={() => setView("hero")}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
