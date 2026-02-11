import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail, MessageSquare, ShieldCheck, Terminal } from "lucide-react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_e2sdng7",
        "template_mzhpw4w",
        {
          from_name: formData.name,
          to_name: "Pentaverse India",
          from_email: formData.email,
          to_email: "ayanpaulcse08@gmail.com", // Your verified email
          message: formData.message,
        },
        "c9EfE8N6xxm_iGXjK"
      );
      
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "MISSION ACCOMPLISHED: Message Encrypted & Sent.");
    } catch (error) {
      setIsLoading(false);
      showAlertMessage("danger", "COMM-LINK FAILURE: Please check your connection.");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-[#06060E]" />
      <Particles className="absolute inset-0 -z-50" quantity={150} ease={80} color={"#ffffff"} refresh />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container max-w-5xl px-6 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side: Context & Intel */}
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Comm-Link Initialized</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Initialize <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Contact</span>
            </h2>
            <p className="text-neutral-400 font-mono text-sm md:text-base max-w-md leading-relaxed">
              // DATA_ENTRY_REQUIRED: Complete the onboarding mission to unlock your membership. Not a form—a journey.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                <ShieldCheck className="text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-bold">Secure Encryption</h4>
                <p className="text-neutral-500 text-sm">E2E encrypted Intel delivery.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Terminal Form */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative"
        >
          {/* Form Decorative Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative flex flex-col p-8 rounded-3xl bg-[#0E0C15] border border-white/10 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-[0.2em] ml-1 flex items-center gap-2">
                  <User className="w-3 h-3" /> [User_Identification]
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ID: John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-mono text-sm"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-[0.2em] ml-1 flex items-center gap-2">
                  <Mail className="w-3 h-3" /> [Neural_Link_Address]
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Address: name@pentaverse.in"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-mono text-sm"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-neutral-500 tracking-[0.2em] ml-1 flex items-center gap-2">
                  <MessageSquare className="w-3 h-3" /> [Intel_Packet]
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter mission objectives or query..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-mono text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full relative group overflow-hidden py-4 rounded-xl bg-cyan-500 text-black font-black uppercase tracking-widest transition-all hover:bg-cyan-400 active:scale-95 disabled:opacity-50"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <span className="flex items-center gap-2 animate-pulse">
                      Encrypting...
                    </span>
                  ) : (
                    <>
                      Execute Delivery <Send className="w-4 h-4" />
                    </>
                  )}
                </div>
                {/* Button Scanline Animation */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
      
      <style jsx>{`
        @keyframes shine {
          100% { left: 125%; }
        }
        .animate-shine {
          animation: shine 0.75s infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;