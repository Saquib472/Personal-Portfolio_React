import { sizeClasses } from "@/utils/constant";

const Button = ({className="", size="default", children }) => {
    const baseClasses = 'cursor-pointer bg-primary font-medium rounded-full text-primary-foreground shadow-lg shadow-primary/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-primary/90'
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`
  return (
    <button className={classes}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
