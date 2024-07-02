import { Container } from "@/ui/layout";
import { Text } from "@/ui/typography";
import { RowInput } from "@/ui/input/row-input";
import { SocialMedia } from "./social-media/social-media";
import styles from "./newsletter-subscription.module.scss";

export const NewsletterSubscription = () => {
  return (
    <div className={styles.newsletterSubscription}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <Text variant="xxl" weight="semi-bold">
            Subcribe our Newsletter
          </Text>
          <Text variant="small" className={styles.description}>
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </Text>
        </div>
        <div className={styles.footer}>
          <RowInput
            className={styles.input}
            placeholder="Your email address"
            ariaLabel="Subcribe our Newsletter"
          >
            Subscribe
          </RowInput>
          <SocialMedia />
        </div>
      </Container>
    </div>
  );
};
