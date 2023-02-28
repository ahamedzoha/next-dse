import { FC, ComponentPropsWithRef, ComponentProps } from 'react'
import clsxm from '@/lib/clsxm'

enum ButtonVariant {
  'primary',
  'secondary',
}

enum ButtonSize {
  'sm',
  'md',
  'lg',
}

interface ButtonProps {
  children?: React.ReactNode
  variant?: keyof typeof ButtonVariant
  size?: keyof typeof ButtonSize
  onClick?: () => void
  className?: string
}

const Button: FC<ButtonProps> = (
  { children, size = 'md', onClick, className, variant = 'primary', ...rest },
  ref: ComponentPropsWithRef<'button'>
) => {
  return (
    <button
      //   ref={ref}
      aria-label='Button'
      onClick={onClick}
      className={clsxm(
        `rounded-md`,
        `font-semibold`,

        `focus-visible:outline focus-visible:outline-2`,
        `focus-visible:outline-offset-2 `,
        `transition-colors duration-120`,
        [
          size === 'sm' && [`px-2.5 py-1`, `text-sm`, `shadow-xs`, `leading-5`],
          size === 'md' && [
            `px-3.5 py-1.5`,
            `text-base`,
            `shadow-sm `,
            `leading-7 `,
          ],
          size === 'lg' && [`px-4 py-2`, `text-lg`, `shadow-md`, `leading-8`],
        ],
        [
          variant === 'primary' && [
            `bg-indigo-500`,
            `text-white`,
            `hover:bg-indigo-400`,
            `focus-visible:outline-indigo-400`,
          ],
          variant === 'secondary' && [
            `bg-transparent`,
            `text-white`,
            `hover:bg-transparent/10`,
            `focus-visible:outline-slate-300`,
          ],
        ],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
