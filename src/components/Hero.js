"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Hero() {
  const subtitles = [
    "Full stack developer",
    "MERN stack developer",
    "Computer Engineer."
  ];
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [isSubtitleDeleting, setIsSubtitleDeleting] = useState(false);
  const [subtitleCharIndex, setSubtitleCharIndex] = useState(0);
  const subtitleTypingSpeed = 100;
  const subtitleDeletingSpeed = 50;
  const subtitlePauseTime = 900;

  useEffect(() => {
    let timeout;
    const currentSubtitle = subtitles[subtitleIndex];
    if (!isSubtitleDeleting && subtitleCharIndex < currentSubtitle.length) {
      timeout = setTimeout(() => {
        setTypedSubtitle(currentSubtitle.slice(0, subtitleCharIndex + 1));
        setSubtitleCharIndex(subtitleCharIndex + 1);
      }, subtitleTypingSpeed);
    } else if (isSubtitleDeleting && subtitleCharIndex > 0) {
      timeout = setTimeout(() => {
        setTypedSubtitle(currentSubtitle.slice(0, subtitleCharIndex - 1));
        setSubtitleCharIndex(subtitleCharIndex - 1);
      }, subtitleDeletingSpeed);
    } else if (subtitleCharIndex === currentSubtitle.length && !isSubtitleDeleting) {
      timeout = setTimeout(() => {
        setIsSubtitleDeleting(true);
      }, subtitlePauseTime);
    } else if (subtitleCharIndex === 0 && isSubtitleDeleting) {
      timeout = setTimeout(() => {
        setIsSubtitleDeleting(false);
        setSubtitleIndex((subtitleIndex + 1) % subtitles.length);
      }, subtitlePauseTime / 2);
    }
    return () => clearTimeout(timeout);
  }, [subtitleCharIndex, isSubtitleDeleting, subtitleIndex, subtitles]);
  const fullName = "M Huzaifa Anwar";
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseTime = 1000;

  useEffect(() => {
    let timeout;
    if (!isDeleting && index < fullName.length) {
      timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } else if (index === fullName.length && !isDeleting) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (index === 0 && isDeleting) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseTime / 2);
    }
    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullName]);
  const handleEmailClick = () => {
    const gmailComposeUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=muhammadhuzaifa2544@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Huzaifa,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0APlease%20let%20me%20know%20if%20you%20are%20available%20for%20discussion.%0D%0A%0D%0ABest%20regards,";
    window.open(gmailComposeUrl, "_blank");
  };

  return (
    <section className="pt-12 w-full" id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold"
          >
            {typedName}
            <span className="animate-pulse">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg min-h-[1.5em]"
          >
            {typedSubtitle}
            <span className="animate-pulse">|</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="mailto:muhammadhuzaifa2544@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Huzaifa,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0APlease%20let%20me%20know%20if%20you%20are%20available%20for%20discussion.%0D%0A%0D%0ABest%20regards,"
              className="px-5 py-3 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-black text-sm font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-all duration-200"
              aria-label="Send email to muhammadhuzaifa2544@gmail.com"
              title="Contact via Email"
            >
              Contact Me
            </a>


            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-all duration-200"
            >
              View Resume
            </a>
          </motion.div>

          <div className="flex items-center gap-4 pt-2 text-xl">
            <a
              href="https://github.com/muhammad-huzaifa-anwar"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 rounded transition-all duration-200"
              aria-label="Visit GitHub profile"
            >
              <FaGithub className="text-3xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/m-huzaifa-anwar-5b8b3626b/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 rounded transition-all duration-200"
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedin className="text-3xl" />
            </a>

            <a
              href="mailto:muhammadhuzaifa2544@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Huzaifa,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0APlease%20let%20me%20know%20if%20you%20are%20available%20for%20discussion.%0D%0A%0D%0ABest%20regards,"
              className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 rounded transition-all duration-200 text-3xl font-medium"
              aria-label="Send email via Gmail"
              title="Contact via Gmail"
            >
              📧
            </a>

          </div>

          <div className="text-sm ">Phone: 03141155677</div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="justify-self-center"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            className="relative size-52 sm:size-72 md:size-80 rounded-full overflow-hidden ring-4 ring-pink-300 dark:ring-neutral-800 shadow-xl"
          >
            <Image
              src="/Huzaifapic.jpg"
              alt="M Huzaifa Anwar - Profile Picture"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
