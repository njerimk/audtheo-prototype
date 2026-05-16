import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Link
        href="/signup"
        className="bg-black text-white px-6 py-3 rounded-full"
      >
        Go to Signup
      </Link>
    </main>
  );
}

