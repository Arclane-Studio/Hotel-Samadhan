import { createFileRoute } from "@tanstack/react-router";
import heroDish from "@/assets/hero-dish.jpg";
import dishDosa from "@/assets/dish-dosa.jpg";
import dishShake from "@/assets/dish-shake.jpg";
import dishPaneer from "@/assets/dish-paneer.jpg";
import storefront from "@/assets/hotel-samadhan-storefront.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotel Samadhan — North Indian Kitchen, Bhosari, Pune" },
      {
        name: "description",
        content:
          "Hotel Samadhan in Bhosari, Pune — North Indian, South Indian, Chinese & Maharashtrian vegetarian fare. All-you-can-eat, outdoor seating, ₹200–400 per person.",
      },
      { property: "og:title", content: "Hotel Samadhan — Bhosari, Pune" },
      {
        property: "og:description",
        content:
          "A neighbourhood kitchen for paneer, dosa and pav bhaji. Open daily till 11pm.",
      },
      { property: "og:image", content: heroDish },
    ],
  }),
  component: Index,
});

const menuHighlights = [
  { name: "Paneer Tikka Masala", tag: "Most loved", price: "₹240" },
  { name: "Mysore Masala Dosa", tag: "South", price: "₹160" },
  { name: "Paneer Chilli", tag: "Indo-Chinese", price: "₹220" },
  { name: "Pav Bhaji", tag: "Maharashtrian", price: "₹140" },
  { name: "Onion Uttapam", tag: "South", price: "₹150" },
  { name: "Tandoori Roti", tag: "Tandoor", price: "₹25" },
  { name: "Veg Cheese Sandwich", tag: "Snack", price: "₹130" },
  { name: "Sweet Lassi", tag: "Cooler", price: "₹90" },
  { name: "Mango Milk Shake", tag: "Cooler", price: "₹120" },
  { name: "Chinese Bhel", tag: "Street", price: "₹150" },
  { name: "Paneer Angara", tag: "Signature", price: "₹260" },
  { name: "Masala Papad", tag: "Starter", price: "₹60" },
];

const reviews = [
  {
    quote: "Excellent service, best food quality, good staff, fast service.",
    by: "Diner on Google",
  },
  {
    quote: "Nice tasty menu and the cheapest price restaurant in the area.",
    by: "Diner on Google",
  },
  {
    quote: "Great variety of dishes. The Nizami Veg Biryani is a must try.",
    by: "Diner on Google",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Signature />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight">Samadhan</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Est. Bhosari</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <a href="#menu" className="hover:text-foreground transition-colors">Menu</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
          <a href="#visit" className="hover:text-foreground transition-colors">Visit</a>
        </nav>
        <a
          href="tel:09107600600"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-background hover:bg-ember transition-colors"
        >
          Reserve · 09107 600600
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-8 bg-ember" />
            Pure Vegetarian · Since the neighbourhood remembers
          </span>
          <h1 className="mt-8 font-display text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[1.02] tracking-tight">
            A quiet kitchen<br />
            in <em className="text-ember not-italic font-normal italic">Bhosari</em>,<br />
            cooking with care.
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
            North Indian, South Indian, Chinese and Maharashtrian — all under one roof.
            Paneer that locals come back for, dosas folded thin, lassi by the brass tumbler.
            ₹200–400 a head, open till 11pm.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#menu"
              className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-background hover:bg-ember transition-colors"
            >
              View the menu
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground hover:text-ember transition-colors"
            >
              <span className="h-px w-8 bg-foreground" />
              Get directions
            </a>
          </div>
          <dl className="mt-16 grid grid-cols-3 gap-8 border-t border-border/60 pt-8 max-w-md">
            <Stat k="3.8" v="1,135 Google reviews" />
            <Stat k="₹300" v="Per person, on average" />
            <Stat k="11pm" v="Open daily, late" />
          </dl>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={heroDish}
              alt="Paneer tikka masala in copper kadhai with naan"
              width={1600}
              height={1808}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden lg:block bg-background border border-border/60 px-5 py-4 max-w-[220px]">
            <p className="font-display text-lg leading-snug">Paneer Tikka Masala</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Tonight's most ordered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-display text-3xl font-medium text-foreground">{k}</dt>
      <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground leading-snug">{v}</dd>
    </div>
  );
}

function Marquee() {
  const items = ["Paneer", "Dosa", "Tandoor", "Pav Bhaji", "Lassi", "Uttapam", "Chinese Bhel", "Biryani"];
  return (
    <section className="border-y border-border/60 bg-secondary/40 py-6 overflow-hidden">
      <div className="flex items-center justify-center gap-12 text-sm uppercase tracking-[0.3em] text-muted-foreground flex-wrap px-6">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-12">
            {i}
            <span className="h-1 w-1 rounded-full bg-ember/60" />
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <img
            src={ambiance}
            alt="Warm interior of Hotel Samadhan"
            width={1600}
            height={1100}
            loading="lazy"
            className="w-full rounded-sm object-cover aspect-[4/5]"
          />
        </div>
        <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-ember">The house</span>
          <h2 className="mt-5 font-display text-5xl lg:text-6xl font-medium leading-[1.05]">
            Familiar food,<br />
            served the way<br />
            <em className="italic font-normal text-ember">it should be.</em>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground max-w-xl">
            Tucked along Dighi Road in Phuge Prima, Samadhan has been quietly feeding
            Bhosari for years — families on a Tuesday night, office crews on lunch break,
            students splitting a thali. Vegetarian only. Outdoor seating when the weather
            agrees. An all-you-can-eat thali for the truly hungry.
          </p>
          <ul className="mt-10 grid sm:grid-cols-2 gap-x-12 gap-y-4 text-sm">
            {[
              "Pure vegetarian kitchen",
              "Outdoor seating",
              "All-you-can-eat thali",
              "Family-friendly",
              "Comfortable, unfussy ambiance",
              "Attentive, regular staff",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 border-b border-border/50 pb-3">
                <span className="h-1 w-1 rounded-full bg-ember" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="bg-secondary/30 py-28 lg:py-40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-ember">From the menu</span>
            <h2 className="mt-4 font-display text-5xl lg:text-6xl font-medium leading-[1.05]">
              What people<br />keep ordering.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            A short look at the dishes the kitchen sends out most often.
            The full menu has well over a hundred more.
          </p>
        </div>

        <div className="grid divide-y divide-border/60 border-y border-border/60">
          {menuHighlights.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-12 items-baseline gap-4 py-6 group hover:bg-background/60 transition-colors px-2"
            >
              <p className="col-span-7 sm:col-span-6 font-display text-2xl lg:text-3xl font-medium tracking-tight">
                {item.name}
              </p>
              <p className="col-span-3 sm:col-span-4 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {item.tag}
              </p>
              <p className="col-span-2 text-right font-display text-xl text-ember">{item.price}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.22em] text-muted-foreground text-center">
          Prices indicative · ₹200–400 per person
        </p>
      </div>
    </section>
  );
}

function Signature() {
  const dishes = [
    { img: dishPaneer, name: "Paneer Chilli", note: "Indo-Chinese, with bite" },
    { img: dishDosa, name: "Mysore Masala Dosa", note: "Folded thin, served hot" },
    { img: dishShake, name: "Mango Milk Shake", note: "Cold, thick, generous" },
  ];
  return (
    <section className="py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-ember">Signatures</span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl font-medium leading-[1.05]">
            Three things<br />worth coming for.
          </h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {dishes.map((d, i) => (
            <figure key={d.name} className="group">
              <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
                <img
                  src={d.img}
                  alt={d.name}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                <div>
                  <p className="font-display text-2xl">{d.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{d.note}</p>
                </div>
                <span className="font-display text-sm text-ember">0{i + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-foreground text-background py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-saffron">From the guestbook</span>
          <div className="mt-6 flex items-baseline gap-4">
            <span className="font-display text-7xl font-medium">3.8</span>
            <span className="text-xs uppercase tracking-[0.22em] text-background/60">
              ★★★★☆ · 1,135 reviews
            </span>
          </div>
          <p className="mt-8 max-w-2xl font-display text-2xl lg:text-3xl leading-relaxed italic text-background/90">
            "Diners love the tasty, affordable food — paneer dishes and pav bhaji especially —
            and appreciate the comfortable ambiance and attentive staff."
          </p>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <blockquote key={i} className="border-t border-background/20 pt-6">
              <p className="text-base leading-relaxed text-background/85">"{r.quote}"</p>
              <footer className="mt-5 text-[11px] uppercase tracking-[0.22em] text-background/50">
                — {r.by}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const hours = [
    ["Monday", "11:00 — 23:00"],
    ["Tuesday", "11:00 — 23:00"],
    ["Wednesday", "11:00 — 23:00"],
    ["Thursday", "11:00 — 23:00"],
    ["Friday", "11:00 — 23:00"],
    ["Saturday", "11:00 — 23:00"],
    ["Sunday", "11:00 — 23:00"],
  ];
  return (
    <section id="visit" className="py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-ember">Find us</span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl font-medium leading-[1.05]">
            Come by<br />for dinner.
          </h2>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground max-w-md">
            JVC2+FGM, Phuge Prima, Dighi Road Corner, Rajmata Jijau Uddan Pool,
            Bhosari, Pune, Maharashtra 411039.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <a
              href="tel:09107600600"
              className="flex items-baseline justify-between border-b border-border/60 pb-3 hover:text-ember transition-colors"
            >
              <span className="uppercase tracking-[0.22em] text-[11px] text-muted-foreground">Call</span>
              <span className="font-display text-xl">09107 600600</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hotel+Samadhan+Bhosari+Pune"
              target="_blank"
              rel="noreferrer"
              className="flex items-baseline justify-between border-b border-border/60 pb-3 hover:text-ember transition-colors"
            >
              <span className="uppercase tracking-[0.22em] text-[11px] text-muted-foreground">Directions</span>
              <span className="font-display text-xl">Open in Maps →</span>
            </a>
            <div className="flex items-baseline justify-between border-b border-border/60 pb-3">
              <span className="uppercase tracking-[0.22em] text-[11px] text-muted-foreground">Per person</span>
              <span className="font-display text-xl">₹200 — ₹400</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border/60 pb-3">
              <span className="uppercase tracking-[0.22em] text-[11px] text-muted-foreground">Wait</span>
              <span className="font-display text-xl">~45 min when busy</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="border border-border/60 rounded-sm p-8 lg:p-10 bg-card">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Hours</p>
            <ul className="mt-6 divide-y divide-border/60">
              {hours.map(([day, time]) => (
                <li key={day} className="flex items-baseline justify-between py-3">
                  <span className="font-display text-lg">{day}</span>
                  <span className="text-sm tabular-nums text-muted-foreground">{time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
              People typically spend 10 – 45 minutes here. Live status from Google:
              <span className="text-ember"> usually busy around dinner.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-start md:items-end justify-between gap-8 px-6 lg:px-10">
        <div>
          <p className="font-display text-3xl">Hotel Samadhan</p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Bhosari · Pune · Maharashtra
          </p>
        </div>
        <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          © {new Date().getFullYear()} — Crafted with care
        </div>
      </div>
    </footer>
  );
}
