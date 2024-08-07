const corsOptions = {
  origin: [
    "https://samvaad-alpha.vercel.app/login",
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const Samvaad_TOKEN = "Samvaad-token";

export { corsOptions, Samvaad_TOKEN };
