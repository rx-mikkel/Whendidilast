import { component$ } from '@builder.io/qwik';
import styles from './recurring-task.module.css';

interface Props {
  description: string;
  time?: Date;
  taskDuration?: number;
}

export default component$<Props>(({description, time, taskDuration}) => {
  return (
    <div class={styles.task}>
        <div class={styles.buttonArea}>
            <button class={styles.resetButton}></button>
        </div>
        <div class={styles.textArea}>
            <h4>{description}</h4>
            <p class={styles.sinceText}>{time ? time.toDateString() : ''}</p>
            <p>{taskDuration}</p>
        </div>
    </div>
  );
});