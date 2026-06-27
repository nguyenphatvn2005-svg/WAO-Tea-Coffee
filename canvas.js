// Vũ Trụ WAO Canvas Engine - Tối ưu 60FPS
      const canvas = document.getElementById("cosmic-canvas");
      const ctx = canvas.getContext("2d", { alpha: false }); // Tối ưu performance

      let width, height;
      let particles = [];
      let shootingStars = [];

      function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
      }

      class Particle {
        constructor(isTeaLeaf = false) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.isTeaLeaf = isTeaLeaf;

          if (isTeaLeaf) {
            this.size = Math.random() * 3 + 2;
            this.color = "#D4E157"; // Tea Green
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5 - 0.5; // Bay nhẹ lên
            this.alpha = Math.random() * 0.5 + 0.1;
          } else {
            this.size = Math.random() * 1.5 + 0.5;
            // Trộn màu sao trắng và vàng gold
            this.color = Math.random() > 0.8 ? "#DC982A" : "#ffffff";
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            this.alpha = Math.random() * 0.8 + 0.2;
          }
          this.pulseSpeed = Math.random() * 0.02 + 0.01;
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;

          // Cập nhật nhấp nháy
          this.alpha += Math.sin(Date.now() * this.pulseSpeed) * 0.01;
          if (this.alpha < 0.1) this.alpha = 0.1;
          if (this.alpha > 1) this.alpha = 1;

          if (this.x < 0) this.x = width;
          if (this.x > width) this.x = 0;
          if (this.y < 0) this.y = height;
          if (this.y > height) this.y = 0;
        }

        draw() {
          ctx.globalAlpha = this.alpha;
          ctx.fillStyle = this.color;
          ctx.beginPath();

          if (this.isTeaLeaf) {
            // Vẽ hình chiếc lá đơn giản
            ctx.ellipse(
              this.x,
              this.y,
              this.size,
              this.size * 2,
              Math.PI / 4,
              0,
              Math.PI * 2,
            );
            // Glowing effect for tea leaves
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
          } else {
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            if (this.color === "#DC982A") {
              ctx.shadowBlur = 15;
              ctx.shadowColor = "#DC982A";
            } else {
              ctx.shadowBlur = 0;
            }
          }

          ctx.fill();
          ctx.shadowBlur = 0; // Reset
        }
      }

      class ShootingStar {
        constructor() {
          this.reset();
        }

        reset() {
          this.x = Math.random() * width;
          this.y = -50;
          this.len = Math.random() * 80 + 20;
          this.speed = Math.random() * 10 + 15;
          this.angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1); // Nghiêng khoảng 45 độ
          this.vx = Math.cos(this.angle) * this.speed;
          this.vy = Math.sin(this.angle) * this.speed;
          this.active = false;
          this.delay = Math.random() * 5000 + 2000; // Xuất hiện ngẫu nhiên
          this.timer = Date.now();
        }

        update() {
          if (!this.active) {
            if (Date.now() - this.timer > this.delay) {
              this.active = true;
            }
            return;
          }

          this.x += this.vx;
          this.y += this.vy;

          if (this.y > height + 100 || this.x > width + 100) {
            this.reset();
          }
        }

        draw() {
          if (!this.active) return;

          ctx.globalAlpha = 0.8;
          const grad = ctx.createLinearGradient(
            this.x,
            this.y,
            this.x - this.vx * 2,
            this.y - this.vy * 2,
          );
          grad.addColorStop(0, "#ffffff");
          grad.addColorStop(0.2, "#DC982A");
          grad.addColorStop(1, "rgba(220, 152, 42, 0)");

          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(
            this.x - Math.cos(this.angle) * this.len,
            this.y - Math.sin(this.angle) * this.len,
          );
          ctx.stroke();
        }
      }

      function initParticles() {
        particles = [];
        shootingStars = [];

        const numStars = Math.min(window.innerWidth / 3, 250); // Responsive số lượng
        for (let i = 0; i < numStars; i++) {
          particles.push(new Particle(false));
        }

        const numLeaves = Math.min(window.innerWidth / 20, 30);
        for (let i = 0; i < numLeaves; i++) {
          particles.push(new Particle(true));
        }

        for (let i = 0; i < 3; i++) {
          shootingStars.push(new ShootingStar());
        }
      }

      function animate() {
        // Nền navy space deep
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#081528";
        ctx.fillRect(0, 0, width, height);

        // Vẽ tinh vân chìm (Nebula effect bằng RadialGradient)
        const cx = width / 2;
        const cy = height / 2;
        const gradient = ctx.createRadialGradient(
          cx,
          cy,
          0,
          cx,
          cy,
          Math.max(width, height),
        );
        gradient.addColorStop(0, "rgba(14, 37, 69, 0.8)");
        gradient.addColorStop(1, "rgba(8, 21, 40, 1)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        particles.forEach((p) => {
          p.update();
          p.draw();
        });

        shootingStars.forEach((s) => {
          s.update();
          s.draw();
        });

        requestAnimationFrame(animate);
      }

      window.addEventListener("resize", resize);
      resize();
      animate();
