import { useState } from "react";
import Globe from "react-globe.gl";

import { Button } from "../components/Button";
import { links } from "../constants";

export const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(links.contactEmail);

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="Grid 1"
              className="h-fit w-full object-contain sm:h-[276px]"
            />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Amit Kumar Gaur</p>
              <p className="grid-subtext">
                AI Software Engineer with 3+ years of experience designing
                scalable backend systems, AI-powered applications, and
                cloud-native solutions across enterprise environments. M.S. in
                Information Systems from CSULB. I specialize in LLMs, RAG, AI
                agents, and microservices.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="Grid 2"
              className="h-fit w-full object-contain sm:w-[276px]"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work in Node.js, TypeScript, Python, FastAPI, and Express,
                with deep experience in LangChain, RAG, vector databases,
                Kafka, and Docker/Kubernetes on AWS and Azure.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                globeImageUrl="/assets/earth-night.jpg"
                bumpImageUrl="/assets/earth-topology.png"
                labelsData={[
                  {
                    lat: 33.7701,
                    lng: -118.1937,
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                I&apos;m based in Long Beach, CA.
              </p>

              <p className="grid-subtext">
                Open to roles across the US and remote opportunities worldwide.
              </p>

              <Button href="#contact" containerClass="w-full mt-10" isBeam>
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="Grid 3"
              className="h-fit w-full object-contain sm:h-[266px]"
            />

            <div>
              <p className="grid-headtext">My Passion for AI &amp; ML</p>
              <p className="grid-subtext">
                I love turning LLM capabilities into reliable production
                systems — high-performance APIs, intelligent automation, and
                event-driven architectures that scale and stay fast.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="Grid 4"
              className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">
                Contact me through email
              </p>

              <div className="copy-container">
                <Button onClick={handleCopy} containerClass="w-full">
                  <img
                    src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                    alt={hasCopied ? "Check" : "Copy"}
                    className="size-5"
                  />
                  {hasCopied ? "Copied to clipboard" : "Copy Email"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
