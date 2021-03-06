import React                       from 'react'
import { useEffect }               from 'react'
import { useState }                from 'react'
import { forwardRef }              from 'react'

import { Image }                   from '@ui/image'
import { Box }                     from '@ui/layout'
import { Row }                     from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Slider }                  from '@ui/slider'
import { Slide }                   from '@ui/slider'
import { Text }                    from '@ui/text'

import { Slide as SlideInterface } from './data'
import { useMockedSlides }         from './data'

const WorksExamples = forwardRef((props, ref: any) => {
  const { slides } = useMockedSlides()

  const [slide, setSlide] = useState<SlideInterface[]>([])

  useEffect(() => {
    setSlide([...slides])
  }, [slides])

  return (
    <Box width='100%' height={[609, 609, 976]} backgroundColor='fillGray' ref={ref}>
      <Row justifyContent='center' alignItems='center' overflow='hidden'>
        <Layout flexBasis={20} display={['flex', 'flex', 'none']} />
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={[20, 20, 100]} />
          <Layout>
            <Text fontWeight='small' fontSize='giant' lignHeight='grown'>
              Text
            </Text>
          </Layout>
          <Layout flexBasis={[8, 8, 16]} />
          <Layout>
            <Text fontWeight='normal' fontSize='normal' color='darkGray'>
              Text
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 40]} />
          <Slider>
            {slide.map(({ id, alt, image, price, description, timeOfExecution }) => (
              <Slide key={id} description={description} price={price} time={timeOfExecution}>
                <Image src={image} alt={alt} radius={16} />
              </Slide>
            ))}
          </Slider>
          <Layout flexBasis={[80, 80, 100]} />
        </Column>
        <Layout flexBasis={20} display={['flex', 'flex', 'none']} />
      </Row>
    </Box>
  )
})

export { WorksExamples }
