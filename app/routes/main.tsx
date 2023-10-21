export default function Main() {
    return (
        <>
            <section className="text-xl text-red-800">
                main
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
  