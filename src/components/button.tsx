'use client'
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
  isLoading?: boolean
}

const Button: FC<ButtonProps> = (
  {
    children,
    size = 'md',
    onClick,
    className,
    variant = 'primary',
    isLoading,
    ...rest
  },
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
        `inline-flex items-center`,

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
        isLoading &&
          `relative text-transparent transition-none hover:text-transparent disabled:cursor-wait`,
        className
      )}
      {...rest}
    >
      {isLoading && (
        <div
          className={clsxm(
            `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4`,
            {
              'text-white': ['primary', 'dark'].includes(variant),
              'text-black': ['light'].includes(variant),
              'text-primary-500': ['outline', 'ghost'].includes(variant),
            }
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={`animate-spin`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
            />
          </svg>
        </div>
      )}

      {children}
    </button>
  )
}

export default Button
