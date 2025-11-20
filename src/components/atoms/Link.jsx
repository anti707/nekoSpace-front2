import

function Link({ 
  href, 
  children, 
  external = false,
  className = '',
  ...props 
}) {
  const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a href={href} className={className} {...linkProps} {...props}>
      {children}
    </a>
  );
}

export default Link;