import { component$ } from '@builder.io/qwik';
import styles from './main.module.css';
import RecurringTask from '../recurring-task/recurring-task';

export default component$(() => {
  return (
    
    <div class={styles.main}>
        <div class={styles.mainHeader}>
            <div class={styles.header}>
                <h1>Recurring tasks</h1>
            </div>
            <div class={styles.addButtonArea}>
                <button class={styles.addButton}>Add new</button>
            </div>
        </div>
        <RecurringTask description='Water plants, upstairs' taskDuration={5} />
        <RecurringTask description='Water plants, downstairs' taskDuration={4} />
        <RecurringTask description='Plant fertiliser' taskDuration={14} />
    </div>
  );
});