import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'

import { useCarousel }            from '@ui/carousel'

export const CarBodiesTabletCarousel: FC<PropsWithChildren> = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 3,
    spaceBetween: 20,
    centered: false,
    height: 40,
    width: 725,
    loop: false,
  })

  return carousel
}