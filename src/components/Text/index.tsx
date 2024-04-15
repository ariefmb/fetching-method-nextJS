import styles from './Text.module.css'

interface TypeProps {
  text: string;
}

const Text = (props: TypeProps) => {
  return (
    <div className={styles.container}>
      <h1 className="font-bold text-center mt-5 text-6xl">{props.text}</h1>
    </div>
  );
};

export default Text;
