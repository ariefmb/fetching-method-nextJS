interface TypeProps {
  text: string;
}

const Text = (props: TypeProps) => {
  return (
    <h1 className="font-bold text-center mt-44 text-6xl">{props.text}</h1>
  );
};

export default Text;
