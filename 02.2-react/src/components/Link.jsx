import { useRouter } from "../hooks/useRouter"

export function Link ({ href, children, className = "", ...restOfProps }) {
  const { navigateTo, currentPath } = useRouter()

  const handleClick = (event) => {
    event.preventDefault()
    navigateTo(href)
  }

  const isActive = currentPath === href
  
  const finalClassName = isActive ? `${className} active`.trim() : className

  return (
    <a href={href} className={finalClassName} onClick={handleClick} {...restOfProps} >
      {children}
    </a>
  )
}