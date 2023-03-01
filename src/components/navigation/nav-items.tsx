import Link from 'next/link'

const NavItems = () => {
  const navigation: {
    name: string
    href: string
  }[] = [
    { name: 'Dashboard', href: '/dashboard' },
    // { name: 'Pricing', href: '#' },
    // { name: 'Docs', href: '#' },
    // { name: 'Company', href: '#' },
  ]
  return (
    <>
      {navigation.length > 0 &&
        navigation.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className='text-base font-medium text-white hover:text-indigo-50'
          >
            {link.name}
          </Link>
        ))}
    </>
  )
}

export default NavItems
