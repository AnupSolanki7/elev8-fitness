export default function Contact() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <p className="mb-8 text-[var(--color-muted)]">
        Start your transformation journey today.
      </p>

      <form className="grid gap-6">
        <input
          className="border border-black/10 dark:border-white/10 p-3 rounded-md bg-transparent"
          placeholder="Full Name"
        />
        <input
          className="border border-black/10 dark:border-white/10 p-3 rounded-md bg-transparent"
          placeholder="Email Address"
        />
        <textarea
          rows={5}
          className="border border-black/10 dark:border-white/10 p-3 rounded-md bg-transparent"
          placeholder="Your fitness goal"
        />

        <button className="bg-[var(--color-accent)] text-white py-3 rounded-md font-medium">
          Submit
        </button>
      </form>
    </section>
  );
}
