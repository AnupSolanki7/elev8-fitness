export default function CTA() {
  return (
    <section className="py-24 text-center bg-[var(--color-primary)] text-black">
      <h2 className="text-4xl text-white/80 font-bold">
        Ready to Elevate Your Fitness?
      </h2>

      <p className="mt-4 text-white/80">
        Let’s build the strongest version of you.
      </p>

      <a
        href="/contact"
        className="inline-block mt-8 bg-white text-[var(--color-primary)] px-8 py-3 rounded-md font-semibold"
      >
        Get Started
      </a>
    </section>
  );
}
