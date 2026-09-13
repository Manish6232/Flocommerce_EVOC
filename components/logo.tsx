import Link from "next/link";

export default function Logo({ href = "/#top" }: { href?: string }) {
  return (
    <Link className="brand" href={href} aria-label="Flocommerce home">
      <svg viewBox="0 0 430 82" role="img" aria-hidden="true">
        <text x="4" y="65" className="flocommerce-word">flocommerce</text>
      </svg>
    </Link>
  );
}
