import styles from "./styles.module.scss";
import Loading from "@/component/elements/Loader";
import clsx from "clsx";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: any) => void;
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  loadingSize?: "xs" | "sm" | "md" | "lg" | "xl"
  loadingText?: string;
  hasShadow?: boolean;
};

function Button({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className,
  type = "button",
  icon,
  iconPosition = "left",
  loading = false,
  loadingSize = "sm",
  loadingText,
  hasShadow = true,
}: ButtonProps) {
  const Icon = () => {
    if (loading) {
      return (
        <div className={styles.loading}>
          <Loading size={loadingSize} type="spinner" />
          {loadingText && <span>{loadingText}</span>}
        </div>
      );
    }
    return icon;
  };

  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        className,
        {
          [styles.disabled]: disabled,
          [styles.loading]: loading,
          [styles.hasShadow]: hasShadow,
        }
      )}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {iconPosition === "left" && Icon()}
      {children}
      {iconPosition === "right" && Icon()}
    </button>
  );
}


export default Button;