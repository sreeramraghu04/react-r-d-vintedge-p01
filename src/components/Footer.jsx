export default function Footer() {
  return (
    <footer className="py-6 text-center border-t border-purple-700 mt-8">
      <p className="text-gray-400">
        © {new Date().getFullYear()} VintEdge. All Rights Reserved.
      </p>
    </footer>
  );
}
