import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {

  return (
    <footer class={styles.footer}>
      <p>If you like this app please consider donating</p>
    </footer>
  );
});
