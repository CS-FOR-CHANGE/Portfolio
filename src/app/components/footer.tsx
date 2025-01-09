import Section from "./section";
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-triton text-white h-48">
            <div className="bg-black text-white py-24">
        <Section>
          <div className="container mx-auto px-6 md:px-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-spaceGrotesk">Ready to Join Us?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Be part of a community that's passionate about technology and making a difference.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://forms.gle/QRNT34DaesvMFJUR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button
                    type="button"
                    className="font-spaceGrotesk text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 px-12 py-6 rounded-2xl 
                             shadow-lg hover:shadow-blue-500/30 transition-all duration-300 
                             border border-blue-400/30"
                  >
                    Join Our Community
                  </button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </Section>
      </div>
    </footer>
  );
}
