export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f0f10] via-[#1a0b1f] to-[#0f0f10] border-t border-purple-700/30 py-6 text-center">
      <p className="text-gray-400 tracking-wide">
        © {new Date().getFullYear()} All Rights Reserved
        <span className="text-purple-400 font-semibold"> by Ram</span>.
      </p>
    </footer>
  );
}
