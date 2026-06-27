tailwind.config = {
        theme: {
          extend: {
            colors: {
              navy: "#0E2545",
              gold: "#DC982A",
              teagreen: "#D4E157",
              cosmic: "#081528",
            },
            fontFamily: {
              sans: ["Inter", "sans-serif"],
              serif: ["Playfair Display", "serif"],
            },
            boxShadow: {
              "gold-glow":
                "0 0 20px rgba(220, 152, 42, 0.5), 0 0 40px rgba(220, 152, 42, 0.2)",
              "gold-glow-intense":
                "0 0 30px rgba(220, 152, 42, 0.8), 0 0 60px rgba(220, 152, 42, 0.4)",
              glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            },
            animation: {
              float: "float 6s ease-in-out infinite",
              "pulse-glow":
                "pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
              float: {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-20px)" },
              },
              pulseGlow: {
                "0%, 100%": { opacity: 1, textShadow: "0 0 10px #DC982A" },
                "50%": { opacity: 0.7, textShadow: "0 0 30px #DC982A" },
              },
            },
          },
        },
      };
