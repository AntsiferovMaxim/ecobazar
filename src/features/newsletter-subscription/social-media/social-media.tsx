import { FC } from "react";
import { FacebookIcon } from "@/ui/icons/facebook.icon";
import { TwitterIcon } from "@/ui/icons/twitter.icon";
import { PinterestIcon } from "@/ui/icons/pinterest.icon";
import { InstagramIcon } from "@/ui/icons/instagram.icon";
import styles from "./social-media.module.scss";

const socials = [
  {
    Icon: FacebookIcon,
    href: "https://facebook.com",
  },
  {
    Icon: TwitterIcon,
    href: "https://x.com",
  },
  {
    Icon: PinterestIcon,
    href: "https://www.pinterest.com",
  },
  {
    Icon: InstagramIcon,
    href: "https://instagram.com",
  },
];

export const SocialMedia: FC = () => {
  return (
    <div className={styles.socialMedia}>
      {socials.map((item, index) => (
        <a
          href={item.href}
          target="_black"
          rel="nofollow noreferrer"
          key={index}
          className={styles.link}
        >
          <item.Icon />
        </a>
      ))}
    </div>
  );
};
