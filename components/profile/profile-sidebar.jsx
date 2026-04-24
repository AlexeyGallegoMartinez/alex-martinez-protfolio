import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/social-icons";
import SocialLink from "@/components/about/social-link";
import MailIcon from "@/components/about/mail-icon";
import Resume from "@/components/about/resume";

const iconMap = {
  x: XIcon,
  instagram: InstagramIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
};

export default function ProfileSidebar({ profile }) {
  return (
    <div className="flex flex-col items-start justify-center gap-10 lg:pl-20">
      <ul role="list">
        {profile.socialLinks.map((link, index) => {
          let className = index === 0 ? undefined : "mt-4";

          if (link.icon === "email") {
            className = "mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40";
          }

          return (
            <SocialLink
              key={link.href}
              href={link.href}
              icon={iconMap[link.icon]}
              className={className}
            >
              {link.label}
            </SocialLink>
          );
        })}
      </ul>
      <div className="w-full space-y-10">
        <Resume />
      </div>
    </div>
  );
}
