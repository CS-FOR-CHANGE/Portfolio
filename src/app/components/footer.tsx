export default function Footer() {
  return (
    <footer className="bg-triton text-white h-48">
      <div className="container mx-auto text-center py-8 px-6 md:px-20">
        <h1
          style={{
            color: "white",
            fontSize: "1.5rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Interested in Joining?
        </h1>
        <a
          href="https://forms.gle/QRNT34DaesvMFJUR9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="font-semibold bg-[#F9A826] px-5 py-4 mt-4 rounded-full w-1/4 1/6"
          >
            <span className="flex items-center justify-center">APPLY NOW!</span>
          </button>
        </a>
      </div>
    </footer>
  );
}
