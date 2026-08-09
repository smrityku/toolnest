import styles from "./AdSlot.module.css";

interface AdSlotProps {
  position: "middle" | "bottom" | "sidebar";
}

export default function AdSlot({ position }: AdSlotProps) {
  // TODO: Replace with actual AdSense code after approval
  // <ins class="adsbygoogle"
  //   style="display:block"
  //   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  //   data-ad-slot="XXXXXXXXXX"
  //   data-ad-format="auto"
  //   data-full-width-responsive="true"></ins>

  return (
    <div
      className={`${styles.adSlot} ${styles[position]}`}
      aria-hidden="true"
    >
      <div className={styles.placeholder}>
        <span className={styles.label}>Advertisement</span>
      </div>
    </div>
  );
}
