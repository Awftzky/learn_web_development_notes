import type { ReactNode } from "react";

// ADA MACAM MACAM JENIS PROPS
interface PropTypes {
  children: ReactNode;
  type?: "submit" | "button";
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const PropsButton = (props: PropTypes) => {
  const { children, type = "submit", variant = "primary", onClick } = props;
  return (
    <div>
      <button onClick={onClick} className={variant} type={type}>
        {children}
      </button>
    </div>
  );
};

export default PropsButton;
