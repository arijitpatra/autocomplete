import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <li>
      <i className={`${styles.loader}`}>⌛ Loading...</i>
    </li>
  );
};

export default Loader;
