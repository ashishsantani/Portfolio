import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  loading = false,
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-200 focus:outline-none focus:ring-2 
    focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden group
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-primary-500 to-primary-600 
      text-white hover:from-primary-600 hover:to-primary-700
      focus:ring-primary-500 shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100
      hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-gray-500
    `,
    outline: `
      border-2 border-primary-500 text-primary-500 hover:bg-primary-500 
      hover:text-white dark:border-primary-400 dark:text-primary-400
      focus:ring-primary-500
    `,
    ghost: `
      text-gray-600 dark:text-gray-400 hover:text-gray-900 
      dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800
      focus:ring-gray-500
    `,
    danger: `
      bg-red-500 text-white hover:bg-red-600 focus:ring-red-500
      shadow-lg hover:shadow-xl
    `
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const content = (
    <>
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
        initial={false}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Button content */}
      <div className="relative flex items-center space-x-2">
        {loading ? (
          <Loading size="sm" />
        ) : (
          <>
            {Icon && iconPosition === 'left' && (
              <Icon className="w-4 h-4" />
            )}
            <span>{children}</span>
            {Icon && iconPosition === 'right' && (
              <Icon className="w-4 h-4" />
            )}
          </>
        )}
      </div>
    </>
  );

  const MotionComponent = motion.button;

  if (to) {
    return (
      <Link to={to} className="inline-block">
        <MotionComponent
          className={buttonClasses}
          disabled={disabled || loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          download={props.download}
          {...props}
        >
          {content}
        </MotionComponent>
      </Link>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <MotionComponent
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </MotionComponent>
  );
};

export default Button;