import Image from "next/image";

import { Container } from "@/components/ui/container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/social-icons";
import portraitImage from "@/public/images/portrait.png";
import SocialLink from "@/components/about/social-link";
import MailIcon from "@/components/about/mail-icon";
import Newsletter from "../home/newsletter";
import Resume from "./resume";

export const metadata = {
  title: "About",
  description: "I’m Alex. I live in Michigan, where I create the future.",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Alex. Curiosity has taken me through robotics, software, and
            everything in between.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              The only thing I’ve probably loved longer than solving technical
              problems is playing fútbol. If I’m not building something, there’s
              a good chance I’m on a field — chasing the ball, clearing my head,
              or finding that rhythm that somehow feels a lot like writing good
              code.
            </p>
            <p>
              I didn’t grow up writing code or launching phones into orbit. I
              just liked figuring things out — especially complex problems. I
              studied mechanical engineering with a focus on robotics, not
              because I planned it that way, but because I kept gravitating
              toward projects that combined hardware, code, and some real-world
              problem to solve.
            </p>
            <p>
              In college, I’ve solved problems spanning everything from a robot
              that could pick strawberries using computer vision and stepper
              motors, to designing robotic arm tools, to reengineering a BMW
              race car gearbox. Different tools, different fields — same
              mindset: understand the problem deeply, and build something that
              works. After graduating, I went straight into the real world —
              industrial automation, robotics, and product development. Not the
              glamorous side of tech — the “this has to work in a plant full of
              weld smoke and grease” side.
            </p>
            <p>
              I’ve built robotic tools for sealant application on car bodies,
              integrated vision systems for real-time quality checks, and
              written software that talks to robots, databases, and people — all
              in one interface. And while most of my work lives in robotics and
              automation, that same drive to solve problems has led me to build
              things like a full-stack web app for timesheets and expense
              tracking, streamlining operations for an entire company. Different
              domain — same obsession with learning fast and making things that
              work better.
            </p>
            <p>
              Now I’m focused on building what’s next — smarter robotics tools,
              more intuitive automation, systems that don’t just look good in a
              demo but hold up in production. I’m not here to make cool tech for
              the sake of it. I want to make things that work, that matter, and
              that make someone’s job a little easier — even if they’ve never
              touched a line of code.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center lg:pl-20 gap-10">
          <ul role="list">
            <SocialLink href="https://x.com/alexmar19190" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/alexeygallegomartinez/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/AlexeyGallegoMartinez"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/alexey-gallego/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:alexeygallegomartinez@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              alexeygallegomartinez@gmail.com
            </SocialLink>
          </ul>
          <div className="space-y-10 ">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </div>
    </Container>
  );
}
