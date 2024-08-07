const corsOptions = {
  origin: [
    "https://samvaad-alpha.vercel.app/",
    "https://samvaad-git-main-manishkrjs-projects.vercel.app/",
    "https://samvaad-fsp9gry74-manishkrjs-projects.vercel.app/",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const Samvaad_TOKEN = "Samvaad-token";

export { corsOptions, Samvaad_TOKEN };
