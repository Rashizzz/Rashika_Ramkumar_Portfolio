import { motion } from "framer-motion";
import { CalendarDays, BadgeCheck } from "lucide-react";

export default function CertificationCard({
  title,
  issuer,
  date,
  image,
  onClick,
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="glass-card mx-3 flex w-80 shrink-0 cursor-pointer flex-col overflow-hidden rounded-xl"
      onClick={() => onClick(image, title)}
    >
      {/* Certificate Preview */}
      <div className="relative flex h-56 items-center justify-center bg-gray-900">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain p-2 transition duration-300 hover:scale-105"
        />

        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
          <BadgeCheck size={12} />
          Completed
        </span>

        {/* Hover Overlay */}
        
      </div>

      {/* Certificate Details */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-base font-semibold text-white">
          {title}
        </h3>

        <p className="text-sm text-gray-400">{issuer}</p>

        <div className="mt-auto flex items-center gap-2 pt-3 text-xs text-gray-500">
          <CalendarDays size={13} />
          {date}
        </div>
      </div>
    </motion.div>
  );
}