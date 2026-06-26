import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Quote, Phone, MapPin } from "lucide-react";
import heroDish from "@/assets/hero-dish.jpg";
import dishDosa from "@/assets/dish-dosa.jpg";
import dishShake from "@/assets/dish-shake.jpg";
import dishPaneer from "@/assets/dish-paneer.jpg";
import storefront from "@/assets/hotel-samadhan-storefront.jpg";
import BookTableModal from "../components/BookTableModal";


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
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav onBookClick={() => setIsBookModalOpen(true)} />
      <Hero onBookClick={() => setIsBookModalOpen(true)} />
      <Marquee />
      <About />
      <Menu />
      <Signature />
      <Reviews />
      <Visit />
      <Footer />
      <BookTableModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
    </main>
  );
}

function Nav({ onBookClick }: { onBookClick: () => void }) {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight">Hotel Samadhan</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Est. Bhosari</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <a href="#menu" className="hover:text-foreground transition-colors">Menu</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
          <a href="#visit" className="hover:text-foreground transition-colors">Visit</a>
        </nav>
        <button
          onClick={onBookClick}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-xs uppercase tracking-[0.18em] text-background hover:bg-ember transition-colors cursor-pointer"
        >
          Book Table
        </button>
      </div>
    </header>
  );
}

function Hero({ onBookClick }: { onBookClick: () => void }) {
  const [orderDropdownOpen, setOrderDropdownOpen] = useState(false);

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
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-20">
            {/* Order Now (Outlined) with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOrderDropdownOpen(!orderDropdownOpen)}
                className="w-full inline-flex items-center justify-between sm:justify-center gap-3 rounded-full border-[1.5px] border-foreground/30 bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-foreground hover:bg-foreground/10 hover:border-foreground/50 active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <span>Order Now</span>
                <ChevronDown className={`h-4 w-4 text-foreground/70 transition-transform duration-300 ${orderDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {orderDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setOrderDropdownOpen(false)}
                  />
                  <div className="absolute left-0 right-0 sm:right-auto sm:w-56 mt-2 rounded-xl bg-card border border-border/80 p-2 shadow-xl z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <a
                      href="https://www.zomato.com/pune/restaurants?q=Hotel+Samadhan+Bhosari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:bg-foreground/10 transition-colors"
                      onClick={() => setOrderDropdownOpen(false)}
                    >
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      Order via Zomato
                    </a>
                    <a
                      href="https://www.swiggy.com/restaurants/hotel-samadhan-bhosari-pune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:bg-foreground/10 transition-colors"
                      onClick={() => setOrderDropdownOpen(false)}
                    >
                      <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                      Order via Swiggy
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Book Table (Solid Filled) */}
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-background hover:bg-ember hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center cursor-pointer"
            >
              Book Table
            </button>
          </div>
          <div className="mt-16 border border-border/60 bg-secondary/15 rounded-xl px-6 py-5 max-w-md shadow-sm">
            <dl className="grid grid-cols-3 gap-4 divide-x divide-border/60">
              <Stat k="3.8" v="1,135 Google reviews" />
              <Stat k="₹300" v="Per person, on average" />
              <Stat k="11pm" v="Open daily, late" />
            </dl>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border/40 shadow-md">
            <img
              src={heroDish}
              alt="Paneer tikka masala in copper kadhai with naan"
              width={1600}
              height={1808}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden lg:block bg-background border border-border/60 rounded-xl px-5 py-4 max-w-[220px] shadow-lg">
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
    <div className="pl-4 first:pl-0">
      <dt className="font-display text-3xl font-medium text-foreground">{k}</dt>
      <dd className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground leading-snug">{v}</dd>
    </div>
  );
}

function Marquee() {
  const items = ["Paneer", "Dosa", "Tandoor", "Pav Bhaji", "Lassi", "Uttapam", "Chinese Bhel", "Biryani"];
  return (
    <section className="border-y border-border/60 bg-secondary/40 py-6 overflow-hidden w-full">
      <div className="animate-marquee flex items-center gap-12 text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
        {/* Set 1 */}
        <div className="flex items-center gap-12">
          {items.map((i, idx) => (
            <span key={`set1-${idx}`} className="flex items-center gap-12">
              {i}
              <span className="h-1 w-1 rounded-full bg-ember/60" />
            </span>
          ))}
        </div>
        {/* Set 2 (duplicate for seamless loop) */}
        <div className="flex items-center gap-12">
          {items.map((i, idx) => (
            <span key={`set2-${idx}`} className="flex items-center gap-12">
              {i}
              <span className="h-1 w-1 rounded-full bg-ember/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5 relative overflow-hidden rounded-xl border border-border/40 shadow-md aspect-[3/4]">
          <img
            src={storefront}
            alt="Hotel Samadhan storefront on Dighi Road, Bhosari — pure vegetarian outdoor seating"
            width={1600}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
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
            Tucked along Dighi Road in Phuge Prima, Hotel Samadhan has been quietly feeding
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

        <div className="border border-[#e5ddd0] rounded-xl bg-[#fdfcf9] overflow-hidden shadow-sm">
          {menuHighlights.map((item, index) => {
            const isEven = index % 2 === 0;
            const rowBg = isEven ? "bg-[#fdf8f3] hover:bg-[#f9ece0]" : "bg-[#f7f1e8] hover:bg-[#f2e5d5]";
            return (
              <div
                key={item.name}
                className={`grid grid-cols-12 items-center gap-4 py-5.5 px-6 ${rowBg} border-b border-[#eee5d8] last:border-b-0 group transition-all duration-200 relative border-l-4 border-l-transparent hover:border-l-ember`}
              >
                <p className="col-span-7 sm:col-span-6 font-display text-2xl lg:text-3xl font-medium tracking-tight text-foreground">
                  {item.name}
                </p>
                <p className="col-span-3 sm:col-span-4 text-right text-[10px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {item.tag}
                </p>
                <p className="col-span-2 text-right font-display text-xl text-ember font-medium">
                  {item.price}
                </p>
              </div>
            );
          })}
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
              <div className="relative overflow-hidden rounded-xl border border-border/40 shadow-sm aspect-[4/5]">
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

const GoogleIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="currentColor"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"/>
  </svg>
);

function Reviews() {
  return (
    <section id="reviews" className="bg-[#120e0b] text-background py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 flex flex-col items-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-saffron">From the guestbook</span>
        
        {/* Top rating block card */}
        <div className="mt-8 inline-flex items-center gap-6 border border-background/10 bg-background/[0.02] rounded-2xl px-8 py-5 shadow-sm">
          <span className="font-display text-6xl font-medium text-background leading-none">3.8</span>
          <div className="flex flex-col items-start">
            <span className="text-sm text-saffron tracking-wider leading-none mb-2">★★★★☆</span>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-background/60 leading-none">
              <GoogleIcon className="h-3.5 w-3.5 fill-current text-background/60" />
              <span>1,135 reviews</span>
            </div>
          </div>
        </div>

        <p className="mt-12 max-w-2xl text-center font-display text-2xl lg:text-3xl leading-relaxed italic text-background/90">
          "Diners love the tasty, affordable food — paneer dishes and pav bhaji especially —
          and appreciate the comfortable ambiance and attentive staff."
        </p>

        {/* Supporting Quote Cards */}
        <div className="mt-24 grid gap-8 lg:gap-10 md:grid-cols-3 w-full">
          {reviews.map((r, i) => (
            <blockquote 
              key={i} 
              className="border border-background/10 bg-[#1a1410] rounded-xl p-8 hover:bg-[#201914] hover:border-background/20 transition-all duration-300 relative border-l-4 border-l-transparent hover:border-l-saffron flex flex-col justify-between shadow-md"
            >
              <div>
                <Quote className="h-5 w-5 text-saffron fill-saffron/10 mb-5" />
                <p className="text-base leading-relaxed text-background/90">"{r.quote}"</p>
              </div>
              <footer className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-background/50">
                <GoogleIcon className="h-3 w-3 fill-current text-background/40" />
                <span>— {r.by}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://www.google.com/maps/place/Hotel+Samadhan/@18.6264669,73.8441113,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-background/30 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-background hover:bg-background/10 active:scale-[0.98] transition-all duration-300"
          >
            <GoogleIcon className="h-3.5 w-3.5 fill-current" />
            <span>Read more reviews on Google</span>
          </a>
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
          <div className="border border-border/60 rounded-xl p-8 lg:p-10 bg-card shadow-sm">
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
    <footer className="bg-[#0f0c0a] text-background border-t border-background/10 py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-start justify-between gap-12 px-6 lg:px-10 w-full">
        {/* Brand column */}
        <div className="flex flex-col gap-6 max-w-xs">
          <div>
            <p className="font-display text-3xl font-medium text-background">Hotel Samadhan</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-background/60 leading-relaxed">
              Pure vegetarian North Indian, South Indian, Chinese & Maharashtrian fare. Est. Bhosari, Pune.
            </p>
          </div>
          <div className="text-xs uppercase tracking-[0.18em] text-background/40">
            © {new Date().getFullYear()} Arclane Studio. All rights reserved.
          </div>
        </div>

        {/* Explore Links column */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-saffron font-bold mb-5">Explore</p>
          <ul className="space-y-3 text-sm text-background/70">
            <li><a href="#menu" className="hover:text-saffron transition-colors">Menu</a></li>
            <li><a href="#about" className="hover:text-saffron transition-colors">About</a></li>
            <li><a href="#reviews" className="hover:text-saffron transition-colors">Reviews</a></li>
            <li><a href="#visit" className="hover:text-saffron transition-colors">Visit</a></li>
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-saffron font-bold mb-5">Get in Touch</p>
          <div className="space-y-4">
            <a 
              href="tel:09107600600" 
              className="flex items-center gap-3 text-sm text-background/80 hover:text-saffron transition-colors group w-fit"
            >
              <span className="p-2 rounded-full bg-background/5 text-saffron group-hover:bg-saffron/10 transition-colors">
                <Phone className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-background/40 leading-none mb-1">Call to Book</span>
                <span className="font-display text-lg font-medium">09107 600600</span>
              </div>
            </a>
            
            <div className="flex items-center gap-3 text-sm text-background/80 w-fit">
              <span className="p-2 rounded-full bg-background/5 text-saffron">
                <MapPin className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-background/40 leading-none mb-1">Area</span>
                <span className="font-semibold text-xs uppercase tracking-wider">Bhosari, Pune</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps column */}
        <div className="max-w-xs">
          <p className="text-xs uppercase tracking-[0.25em] text-saffron font-bold mb-3">Location & Directions</p>
          <p className="text-xs text-background/60 leading-relaxed mb-4">
            Phuge Prima, Dighi Road Corner, Bhosari, Pune.
          </p>
          
          {/* Small Maps Holder */}
          <div className="relative w-full max-w-[240px] h-24 rounded-xl overflow-hidden border border-background/10 group shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8358487190013!2d73.8441113!3d18.6264669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c83d6e5aaaab%3A0xe54e600632d4317f!2sHotel%20Samadhan!5e0!3m2!1sen!2sin!4v1719410000000!5m2!1sen!2sin"
              className="w-full h-full border-none pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-80"
              loading="lazy"
            />
            <a 
              href="https://maps.google.com/?q=Hotel+Samadhan+Bhosari+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-colors flex flex-col items-center justify-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-white"
            >
              <GoogleIcon className="h-4 w-4 fill-current text-saffron" />
              <span>Google Maps ↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
