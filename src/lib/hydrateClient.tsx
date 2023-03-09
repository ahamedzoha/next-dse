'use client'

// MIGHT BE CHANGED IN THE NEXT UPDATE
import { Hydrate as RQHydrate, HydrateProps } from '@tanstack/react-query'

const Hydrate: React.FC<HydrateProps> = (props: HydrateProps) => {
  return <RQHydrate {...props} />
}

export default Hydrate
