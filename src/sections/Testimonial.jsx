import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee"; // Keeping your existing Marquee
import { teamMembers } from "../constants"; // Import the new data

const firstRow = teamMembers.slice(0, teamMembers.length / 2);
const secondRow = teamMembers.slice(teamMembers.length / 2);

const TeamCard = ({ img, name, role }) => {
  return (
    <div
      className={twMerge(
        "group relative h-64 w-64 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black hover:border-iron-red/50 transition-colors duration-300"
      )}
    >
      {/* 1. Full Size Image with Zoom Effect */}
      <img
        src={img}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* 2. Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

      {/* 3. Member Info (Bottom Positioned) */}
      <div className="absolute bottom-0 left-0 w-full p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-bold text-white uppercase tracking-wide">
          {name}
        </h3>
        <p className="text-sm font-mono text-iron-red font-medium">
          // {role}
        </p>
      </div>

      {/* 4. Tech Glow Effect on Hover */}
      <div className="absolute inset-0 border-2 border-iron-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
    </div>
  );
};

export default function Team() {
  return (
    <section id="teams" className="items-start mt-25 md:mt-35 c-space py-20">
      
      {/* Section Header */}
      <div className="px-6 md:px-10 mb-12">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          Our Core Team <span className="text-stroke-white text-transparent">Squad</span>
        </h2>
        <p className="text-neutral-400 mt-4 font-mono">
          // THE MINDS BEHIND THE INNOVATION
        </p>
      </div>

      {/* Marquee Section */}
      <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
        
        {/* Row 1: Moving Left */}
        <Marquee pauseOnHover className="[--duration:30s] [--gap:1.5rem]">
          {firstRow.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </Marquee>

        {/* Row 2: Moving Right */}
        <Marquee reverse pauseOnHover className="[--duration:30s] [--gap:1.5rem] mt-6">
          {secondRow.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </Marquee>

        {/* Fade Edges (Left & Right) */}
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-line-dark to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-line-dark to-transparent z-10"></div>
      </div>
    </section>
  );
}