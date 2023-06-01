import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onHide: () => void;
}

const Alert = ({ children, onHide }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>{children}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onHide}
      ></button>
    </div>
  );
};

export default Alert;
