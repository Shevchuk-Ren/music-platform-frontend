import Link from "next/link";
import styles from "./LinkComponent.module.css";

export const LinkComponent = ({href, text}: { href: string, text: string}) => {
    return (
     <Link href={href}>
        <a className={styles.link}>{text}</a>
     </Link>
    )
  }
