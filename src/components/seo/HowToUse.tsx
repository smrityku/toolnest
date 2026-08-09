import styles from "./HowToUse.module.css";

interface HowToUseProps {
  steps: string[];
  toolName: string;
}

export default function HowToUse({ steps, toolName }: HowToUseProps) {
  return (
    <section className={styles.section}>
      <h2 className="section-title">How to Use {toolName}</h2>
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={index} className={styles.step}>
            <span className={styles.stepNumber}>{index + 1}</span>
            <p className={styles.stepText}>{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
