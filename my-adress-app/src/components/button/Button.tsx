function Button({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button className={className} onClick={onClick}>
      Submit
    </button>
  );
}

export default Button;
