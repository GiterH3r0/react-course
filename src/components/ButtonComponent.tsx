import styles from "./ButtonComponent.module.css";

type ButtonProps = {
  title: string;
  onClickFunction: () => void;
};

export default function ButtonComponent({ props }: { props: ButtonProps }) {
  return (
    <button className={styles.buttonComponent} onClick={props.onClickFunction}>
      {props.title}
    </button>
  );
}
