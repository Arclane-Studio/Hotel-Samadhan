import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ChevronDown, Bell, Calendar, Users, Clock, ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";

interface BookTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const allSlots = [
  { time: "11:30 AM", label: "Lunch", available: true },
  { time: "12:00 PM", label: "Lunch", available: true },
  { time: "12:30 PM", label: "Lunch", available: true },
  { time: "1:00 PM", label: "Lunch", available: false },
  { time: "1:30 PM", label: "Lunch", available: true },
  { time: "2:00 PM", label: "Lunch", available: true },
  { time: "2:30 PM", label: "Lunch", available: true },
  { time: "7:00 PM", label: "Dinner", available: true },
  { time: "7:30 PM", label: "Dinner", available: true },
  { time: "8:00 PM", label: "Dinner", available: false },
  { time: "8:30 PM", label: "Dinner", available: true },
  { time: "9:00 PM", label: "Dinner", available: true },
  { time: "9:30 PM", label: "Dinner", available: true },
  { time: "10:00 PM", label: "Dinner", available: true },
];

export default function BookTableModal({ isOpen, onClose }: BookTableModalProps) {
  // State for Booking selector bar
  const [guests, setGuests] = useState("2");
  
  // Default date to today
  const getTodayStr = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };
  
  const [date, setDate] = useState(getTodayStr());
  const [timeFilter, setTimeFilter] = useState("all");
  
  // Collapsible & expandable sections
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  
  // Booking flow states
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  
  // Alert me states
  const [alertTime, setAlertTime] = useState<string | null>(null);
  const [alertEmail, setAlertEmail] = useState("");
  const [alertSubmitted, setAlertSubmitted] = useState(false);

  // Reset states when modal is closed/opened
  useEffect(() => {
    if (!isOpen) {
      setSelectedTime(null);
      setName("");
      setPhone("");
      setNotes("");
      setBookingConfirmed(false);
      setAlertTime(null);
      setAlertEmail("");
      setAlertSubmitted(false);
    }
  }, [isOpen]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Filter slots based on time selection (Lunch / Dinner)
  const filteredSlots = allSlots.filter(slot => {
    if (timeFilter === "all") return true;
    return slot.label.toLowerCase() === timeFilter.toLowerCase();
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    // Simulate booking submission
    setBookingConfirmed(true);
    toast.success("Reservation request submitted!");
  };

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alertEmail) {
      toast.error("Please enter a valid phone number or email.");
      return;
    }
    setAlertSubmitted(true);
    toast.success(`We will notify you at ${alertEmail} if a slot opens up!`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF9F5] text-foreground border-border/60 p-6 md:p-8 rounded-2xl shadow-2xl">
        <DialogHeader className="border-b border-border/40 pb-4 mb-6">
          <DialogTitle className="font-display text-3xl font-medium tracking-tight flex items-center gap-2 justify-center sm:justify-start">
            {selectedTime ? (
              <button 
                type="button"
                onClick={() => { setSelectedTime(null); setBookingConfirmed(false); }} 
                className="mr-2 p-1.5 rounded-full hover:bg-secondary/40 transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            ) : alertTime ? (
              <button 
                type="button"
                onClick={() => { setAlertTime(null); setAlertSubmitted(false); }} 
                className="mr-2 p-1.5 rounded-full hover:bg-secondary/40 transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            ) : null}
            <span>Book a Table</span>
          </DialogTitle>
        </DialogHeader>

        {/* Step 3: Success Confirmation View */}
        {bookingConfirmed ? (
          <div className="flex flex-col items-center text-center py-10 px-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="h-16 w-16 bg-ember/15 text-ember rounded-full flex items-center justify-center mb-6">
              <Check className="h-8 w-8 stroke-[3]" />
            </div>
            <h3 className="font-display text-3xl font-medium tracking-tight mb-3">Reservation Request Received</h3>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-8">
              Thank you! We've received your request for <strong className="text-foreground">{guests} guests</strong> on <strong className="text-foreground">{formatDate(date)}</strong> at <strong className="text-foreground">{selectedTime}</strong>.
            </p>
            <div className="bg-[#f5f3ed] border border-border/50 rounded-2xl p-5 w-full max-w-sm text-left shadow-sm mb-8 text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">Details</p>
              <p className="font-medium text-foreground">{name}</p>
              <p className="text-muted-foreground mt-0.5">{phone}</p>
              {notes && <p className="text-xs text-muted-foreground mt-3 italic">"{notes}"</p>}
            </div>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed mb-8">
              🔔 We will confirm your table shortly via call at <strong>{phone}</strong>.
            </p>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-background hover:bg-ember hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full max-w-xs cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : alertTime ? (
          /* Alert Me Form View */
          <div className="py-6 px-4 animate-in fade-in duration-200">
            {alertSubmitted ? (
              <div className="text-center py-8">
                <div className="h-12 w-12 bg-ember/15 text-ember rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-6 w-6" />
                </div>
                <h4 className="font-medium text-lg mb-2">Alert Activated!</h4>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                  We'll notify you at <strong>{alertEmail}</strong> immediately if a table opens up for <strong>{guests} guests</strong> on <strong>{formatDate(date)}</strong> at <strong>{alertTime}</strong>.
                </p>
                <button
                  onClick={() => { setAlertTime(null); setAlertSubmitted(false); }}
                  className="rounded-full bg-foreground px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-background hover:bg-ember transition-colors cursor-pointer"
                >
                  Back to Times
                </button>
              </div>
            ) : (
              <form onSubmit={handleAlertSubmit} className="space-y-5 max-w-md mx-auto">
                <p className="text-sm text-muted-foreground">
                  The <strong>{alertTime}</strong> slot on <strong>{formatDate(date)}</strong> is currently fully booked. Enter your contact details below, and we'll notify you if someone cancels.
                </p>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Phone or Email</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter phone number or email address"
                    value={alertEmail}
                    onChange={(e) => setAlertEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background text-sm text-foreground focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-background hover:bg-ember hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <Bell className="h-4 w-4" />
                  <span>Notify Me</span>
                </button>
              </form>
            )}
          </div>
        ) : selectedTime ? (
          /* Step 2: Customer details entry form */
          <form onSubmit={handleBookingSubmit} className="space-y-6 max-w-lg mx-auto py-4 animate-in fade-in duration-200">
            <div className="bg-[#f5f3ed] border border-border/50 rounded-2xl p-5 text-sm space-y-1.5 shadow-inner">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Selected Booking</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-medium text-foreground">
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-ember" />{guests} Guests</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-ember" />{formatDate(date)}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-ember" />{selectedTime}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background text-sm text-foreground focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background text-sm text-foreground focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Special Requests (Optional)</label>
              <textarea
                placeholder="Allergies, high chair, window seating, etc."
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background text-sm text-foreground focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-colors resize-none"
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setSelectedTime(null)}
                className="flex-1 rounded-full border-[1.5px] border-foreground/35 bg-transparent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-foreground hover:bg-foreground/10 active:scale-[0.98] transition-all duration-300 text-center cursor-pointer"
              >
                Back to Slots
              </button>
              <button
                type="submit"
                className="flex-1 rounded-full bg-foreground px-6 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-background hover:bg-ember hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center cursor-pointer shadow-md"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        ) : (
          /* Step 1: Booking selections, time slots, about, location */
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* 1. Reservation selector bar */}
            <div className="space-y-3">
              <div className="bg-background border border-border/80 rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 md:gap-0 shadow-sm max-w-2xl mx-auto">
                {/* Guests Selector */}
                <div className="flex-1 px-4 py-2 flex flex-col items-start min-w-[120px]">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-bold flex items-center gap-1.5"><Users className="h-3 w-3 text-ember" />Guests</label>
                  <select 
                    value={guests} 
                    onChange={(e) => setGuests(e.target.value)}
                    className="bg-transparent text-sm font-semibold text-foreground outline-none border-none cursor-pointer mt-1 w-full"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                      <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                    ))}
                    <option value="9">9 Guests</option>
                    <option value="10">10 Guests</option>
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>
                
                {/* Divider */}
                <div className="hidden md:block w-px h-8 bg-border/80 self-center" />

                {/* Date Picker */}
                <div className="flex-1 px-4 py-2 flex flex-col items-start min-w-[140px]">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-bold flex items-center gap-1.5"><Calendar className="h-3 w-3 text-ember" />Date</label>
                  <input 
                    type="date"
                    value={date}
                    min={getTodayStr()}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-transparent text-sm font-semibold text-foreground outline-none border-none cursor-pointer mt-1 w-full"
                  />
                </div>
                
                {/* Divider */}
                <div className="hidden md:block w-px h-8 bg-border/80 self-center" />

                {/* Time Filter Select */}
                <div className="flex-1 px-4 py-2 flex flex-col items-start min-w-[120px]">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-bold flex items-center gap-1.5"><Clock className="h-3 w-3 text-ember" />Time</label>
                  <select 
                    value={timeFilter} 
                    onChange={(e) => setTimeFilter(e.target.value)}
                    className="bg-transparent text-sm font-semibold text-foreground outline-none border-none cursor-pointer mt-1 w-full"
                  >
                    <option value="all">All Times</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </select>
                </div>
              </div>
              
              <p className="text-[11px] text-muted-foreground text-center font-medium">
                Reservations open 30 days in advance. Parties of 8 or more are subject to a 10% large-group service policy.
              </p>
            </div>

            {/* 2. Time slot grid */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-bold">Select an available time</h3>
              
              {filteredSlots.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {filteredSlots.map((slot, index) => {
                    if (slot.available) {
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setSelectedTime(slot.time)}
                          className="flex flex-col items-center justify-center p-3 rounded-xl bg-ember hover:bg-ember/90 text-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer shadow-sm"
                        >
                          <span className="text-sm font-semibold tracking-wide">{slot.time}</span>
                          <span className="text-[9px] uppercase tracking-widest text-white/80 mt-0.5">{slot.label}</span>
                        </button>
                      );
                    } else {
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setAlertTime(slot.time)}
                          className="flex flex-col items-center justify-center p-3 rounded-xl border-[1.5px] border-foreground/25 bg-transparent hover:bg-foreground/5 hover:border-foreground/45 transition-all duration-200 cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                            <Bell className="h-3 w-3 text-ember" /> Alert Me
                          </span>
                          <span className="text-[9px] uppercase tracking-widest text-muted-foreground mt-1">{slot.time} · Full</span>
                        </button>
                      );
                    }
                  })}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground py-4 text-center">No slots found matching your filters.</p>
              )}

              {/* Collapsible Accordion */}
              <div className="border border-border/60 rounded-xl overflow-hidden shadow-sm">
                <button 
                  type="button"
                  onClick={() => setAccordionOpen(!accordionOpen)}
                  className="w-full flex items-center justify-between p-4 bg-secondary/30 hover:bg-secondary/50 transition-colors text-xs font-semibold uppercase tracking-wider text-foreground cursor-pointer"
                >
                  <span>Other dates with availability</span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${accordionOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {accordionOpen && (
                  <div className="p-4 bg-background border-t border-border/40 divide-y divide-border/40 text-xs">
                    <div className="py-3 flex justify-between items-center">
                      <span className="font-medium text-foreground">Tomorrow, Saturday, June 27</span>
                      <button 
                        type="button"
                        onClick={() => {
                          const tomorrow = new Date();
                          tomorrow.setDate(tomorrow.getDate() + 1);
                          const yyyy = tomorrow.getFullYear();
                          const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
                          const dd = String(tomorrow.getDate()).padStart(2, '0');
                          setDate(`${yyyy}-${mm}-${dd}`);
                          setAccordionOpen(false);
                          toast.success("Date updated to tomorrow!");
                        }}
                        className="text-ember font-semibold hover:underline"
                      >
                        12 slots available →
                      </button>
                    </div>
                    <div className="py-3 flex justify-between items-center">
                      <span className="font-medium text-foreground">Sunday, June 28</span>
                      <button
                        type="button"
                        onClick={() => {
                          const dateObj = new Date();
                          dateObj.setDate(dateObj.getDate() + 2);
                          const yyyy = dateObj.getFullYear();
                          const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
                          const dd = String(dateObj.getDate()).padStart(2, '0');
                          setDate(`${yyyy}-${mm}-${dd}`);
                          setAccordionOpen(false);
                          toast.success("Date updated to Sunday!");
                        }}
                        className="text-ember font-semibold hover:underline"
                      >
                        8 slots available →
                      </button>
                    </div>
                    <div className="py-3 flex justify-between items-center">
                      <span className="font-medium text-foreground">Monday, June 29</span>
                      <button
                        type="button"
                        onClick={() => {
                          const dateObj = new Date();
                          dateObj.setDate(dateObj.getDate() + 3);
                          const yyyy = dateObj.getFullYear();
                          const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
                          const dd = String(dateObj.getDate()).padStart(2, '0');
                          setDate(`${yyyy}-${mm}-${dd}`);
                          setAccordionOpen(false);
                          toast.success("Date updated to Monday!");
                        }}
                        className="text-ember font-semibold hover:underline"
                      >
                        15 slots available →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 3. About Section */}
            <div className="border-t border-border/40 pt-6">
              <h3 className="font-display text-2xl font-medium text-foreground mb-2">About Hotel Samadhan</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {aboutExpanded ? (
                  "Tucked along Dighi Road in Phuge Prima, Hotel Samadhan has been feeding Bhosari for years — families on a Tuesday night, office crews on lunch break, students splitting a thali. We serve fresh, authentic pure vegetarian dishes including premium cottage cheese curries, tandoor specials, thin crispy South Indian crepes, street-style Indo-Chinese fusion items, and traditional Maharashtrian favorites."
                ) : (
                  "Tucked along Dighi Road in Phuge Prima, Hotel Samadhan has been feeding Bhosari for years — families on a Tuesday night, office crews on lunch break, students splitting a thali..."
                )}
                <button
                  type="button"
                  onClick={() => setAboutExpanded(!aboutExpanded)}
                  className="text-ember font-semibold ml-1.5 hover:underline cursor-pointer text-xs uppercase tracking-wider whitespace-nowrap"
                >
                  {aboutExpanded ? "View Less" : "View More"}
                </button>
              </p>
            </div>

            {/* 4. Location Section */}
            <div className="border-t border-border/40 pt-6 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-display text-xl font-medium text-foreground">Hotel Samadhan</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  JVC2+FGM, Phuge Prima, Dighi Road Corner,<br />
                  Rajmata Jijau Uddan Pool,<br />
                  Bhosari, Pune, Maharashtra 411039
                </p>
                <p className="text-xs text-muted-foreground mt-4">
                  Reservations & Inquiries: <a href="tel:09107600600" className="text-ember font-semibold hover:underline">09107 600600</a>
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-border/60 aspect-video md:aspect-[16/10] bg-muted shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8358487190013!2d73.8441113!3d18.6264669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c83d6e5aaaab%3A0xe54e600632d4317f!2sHotel%20Samadhan!5e0!3m2!1sen!2sin!4v1719410000000!5m2!1sen!2sin"
                  className="w-full h-full border-none"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a 
                  href="https://maps.google.com/?q=Hotel+Samadhan+Bhosari+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm border border-border/60 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow hover:bg-background transition-colors flex items-center gap-1 text-foreground"
                >
                  <span>Maps</span> <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
