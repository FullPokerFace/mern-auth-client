type IVFlexProps = {
  children?: string | JSX.Element | JSX.Element[];
  class?: string;
};

const VFlex = (props: IVFlexProps) => {
  return (
    <section className={`flex flex-col items-start ${props.class}`}>
      {props.children}
    </section>
  );
};

export default VFlex;
