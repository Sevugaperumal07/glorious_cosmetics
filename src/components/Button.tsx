import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  className?: string;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: never; href?: never };
type RouterLinkProps = BaseProps & { to: string; href?: never } & AnchorHTMLAttributes<HTMLAnchorElement>;
type ExternalLinkProps = BaseProps & { href: string; to?: never } & AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = ButtonProps | RouterLinkProps | ExternalLinkProps;

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  isLoading,
  leftIcon,
  rightIcon,
  ...props
}: Props) {
  const variants = {
    primary: 'bg-primary text-white hover:bg-stone-800 shadow-lg',
    secondary: 'bg-secondary-container text-on-secondary-container hover:bg-secondary-container/80 shadow-md',
    outline: 'border border-primary/30 text-primary hover:border-primary hover:bg-primary/5',
    ghost: 'text-primary hover:bg-primary/5',
    glass: 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-xl',
  };

  const sizes = {
    sm: 'px-6 py-2 text-[10px]',
    md: 'px-10 py-4 text-[12px]',
    lg: 'px-14 py-5 text-[14px]',
    icon: 'p-3',
  };

  const baseStyles = cn(
    'inline-flex items-center justify-center rounded-full font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]',
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span className="relative z-10">{children}</span>
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
  };

  if ('to' in props && props.to) {
    const { to, ...rest } = props as RouterLinkProps;
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={baseStyles} {...(rest as any)}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if ('href' in props && props.href) {
    const { href, ...rest } = props as ExternalLinkProps;
    return (
      <motion.div {...motionProps} className="inline-block">
        <a href={href} className={baseStyles} {...(rest as any)}>
          {content}
        </a>
      </motion.div>
    );
  }

  const { type = 'button', ...rest } = props as ButtonProps;
  return (
    <motion.button
      type={type}
      className={baseStyles}
      {...motionProps}
      {...(rest as any)}
    >
      {content}
    </motion.button>
  );
}
