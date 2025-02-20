import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles["not-found"]}>
      <div>404 not found</div>
      <Image
        alt="not found"
        src="https://http.cat/images/404.jpg"
        width={500}
        height={500}
      />
      <Link href="/">
        <Button variant="default">Go back to the main page</Button>
      </Link>
    </div>
  );
}