import HeroImg from "@/assets/images/aboutpicture.jpeg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 text-center text-4xl font-medium lg:text-5xl text-white">
            Let’s Dive In: The Story of Me
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4 text-justify">
              <p className="text-white">
              Hi! I’m Gülsüm Oran Güneş. A few years into my career as a lawyer, I found myself drawn more and more to technology. What started as curiosity became a new direction—I used my transferable skills to earn
                <span className="font-bold text-white"> {" "}
                Google Project Management
                </span>{" "} and 
                <span className="font-bold text-white"> {" "}
                Professional Scrum Master (PSM)
                </span> {" "}
                which grounded me in structured thinking and agile collaboration.{" "}
               
          
              </p>
              <p className="text-white">
              Driven by a love for the technical side, I joined a hands-on full stack development program focused on .NET and Angular. It boosted my coding skills and confirmed I was right where I belonged. After graduating, I added React and Python to my stack and kept diving deeper into software development.
              </p>
              <p className="text-white">
              You can check out some of my work in the Projects section. I'm always building something new—lately, an AWS-based project as I explore cloud technologies. Fun fact: this very website is one result of that journey.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                  I’m a lifelong learner who gets excited by new challenges and real impact. I care deeply about building things that matter, growing with my community, and always staying curious — because that’s where the magic happens.
                  </p>

                  
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
