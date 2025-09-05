import { AnimatePresence } from "framer-motion";
import FadeUp from "@/animation/fade-up";

export default function Resume() {
  return (
    <div className="mx-auto my-40 max-w-7xl px-6 sm:px-14 md:my-60 md:px-20">
      <div className="w-full">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-center text-3xl font-bold text-accent xs:text-4xl sm:text-6xl md:text-8xl">
              Resume
            </h1>
          </FadeUp>

          <div className="mt-20 flex flex-col items-center justify-center gap-6">
            <div className="h-[80vh] w-full max-w-3xl">
              <iframe
                src="https://docs.google.com/document/d/1s4BFDJW48p-YS3fOX--eIMiCJ5QuNJzqIGq9SIOgnR4/preview"
                className="h-full w-full border-none"
                allowFullScreen
              ></iframe>
            </div>

            <a
              href="https://docs.google.com/document/d/1s4BFDJW48p-YS3fOX--eIMiCJ5QuNJzqIGq9SIOgnR4/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-accent/90 px-6 py-3 font-semibold text-white transition hover:bg-accent/80"
            >
              Download PDF
            </a>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
