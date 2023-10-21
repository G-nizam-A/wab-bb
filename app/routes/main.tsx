import { Link } from "@remix-run/react";

export default function Main() {
    return (
        <>
            <section className="text-xl text-red-800">
                <Link to="/contact">Main</Link>
            </section>
        </>
    );
}

export function ErrorBoundary() {
    return (
      <div className="error-container">
        I did a main.
      </div>
    );
  }
  