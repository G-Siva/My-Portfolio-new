import React from "react";
import Image from "next/image";
import { Github, Linkedin, ArrowUpRight, Download } from "lucide-react";
import { Profile2 } from "@/assets/images";
import Container from "../Resuable/Container";

const Hero = () => {
  return (
    <Container paddingSmall={true}>
      <div className=" lg:grid lg:grid-cols-2 gap-10 xl:text-2xl  items-center">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bebas font-bold mb-4 lg:mb-6">
            ABOUT ME
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold">
            I am a Front-end developer based in Coimbatore, India. Has Computer
            Science Engineering background.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            A passionate <span>Front-end developer</span> and Computer Science
            graduate with a strong interest in creating efficient, user-focused
            digital solutions. I enjoy exploring the intersection of technology
            and problem-solving, with hands-on experience in Front-end
            development, AI integration, and web technologies. As a learner and
            leader, I thrive in collaborative environments where I can
            contribute, grow, and innovate. With a curious mindset and a drive
            to build meaningful tech, I’m always looking for opportunities to
            learn, create, and make an impact.
          </p>
          <div className="flex flex-wrap gap-4 items-center mt-6">
            <a
              className="bg-lime-400 text-black px-4 py-2 rounded font-semibold flex items-center gap-2 text-sm"
              href="/siva_resume.pdf"
              download
            >
              <Download className="w-5 h-5" /> DOWNLOAD RESUME
            </a>
            <a
              href="https://linkedin.com/in/sivasubramanian19"
              target="_blank"
              className="hover:text-lime-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-lime-400"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="rounded-xl mt-6 overflow-hidden w-[75%] sm:w-[60%] md:w-[50%] lg:w-[300px] h-[360px]flex items-center justify-center">
            <Image
              src={Profile2}
              alt="Siva Subramanian"
              width={300}
              height={360}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
