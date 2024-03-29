import React                    from 'react'
import { FC }                   from 'react'
import { useEffect }            from 'react'
import { useState }             from 'react'

import { Booking }              from '@fragments/booking-fragment'
import { Accordion }            from '@ui/accordion'
import { Button }               from '@ui/button'
import { Condition }            from '@ui/condition'
import { Divider }              from '@ui/divider'
import { Layer }                from '@ui/layer'
import { Box }                  from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Switch }               from '@ui/switch'
import { Item }                 from '@ui/switch'
import { Ruble }                from '@ui/text'
import { Space }                from '@ui/text'
import { Text }                 from '@ui/text'
import { extractFragment }      from '@globals/data'
import { serviceVar }           from '@store/services'

import { AdditionalService }    from './additional-service'
import { CarBodiesCarousel }    from './carousel'
import { WorkExamplesCarousel } from './carousel'
import { Radii }                from './radii'
import { ReturnButton }         from './return-button'
import { ServiceProps }         from './service.interface'
import { WorkExample }          from './work-example'
import { carBodyConverter }     from './helpers'

const Service: FC<ServiceProps> = ({
  servicesData,
  availableRadiiData,
  fragmentsData,
  carBodiesData,
  serviceData,
  navigationData,
}) => {
  const {
    servicesParams: {
      price,
      title: serviceName,
      bodies: carBodies,
      addon,
      description,
      variant,
      workexamples,
      additionalservice,
    },
  } = serviceData
  const [onCarBody, setOnCarBody] = useState<string>(carBodies[0])
  const carBody = carBodyConverter(onCarBody)

  const availableRadii = Object.entries(price)
    .filter((item: any) => item[1]?.[carBody] !== null)
    .map((item) => item[0])
    .filter((item) => item.length < 4)

  const [visible, setVisible] = useState<boolean>(false)
  const [radius, setRadius] = useState<string>(availableRadii[0])
  const [isAdditionalService, setIsAdditionalService] = useState<boolean>(true)

  const { title: goBack } = extractFragment('contentAddons', 'all-services', fragmentsData)
  const { title: signUp } = extractFragment('contentAddons', 'sign-up', fragmentsData)
  const { title: workExamplesTitle } = extractFragment(
    'contentAddons',
    'work-examples-title',
    fragmentsData
  )

  const workExamplesData = [
    {
      image: workexamples.firstexample.image,
      title: workexamples.firstexample.title,
      price,
    },
    {
      image: workexamples.secondexample.image,
      title: workexamples.secondexample.title,
      price,
    },
  ]

  useEffect(() => {
    if (!availableRadii.includes(radius)) setRadius(availableRadii[0])

    // eslint-disable-next-line
  }, [onCarBody])

  const defaultPrice = price[Object.keys(price)[1]]?.passenger
  const servicePrice = price[radius]?.[carBody]

  return (
    <>
      <Layer scroll visible={visible} onClose={() => setVisible(true)}>
        <Booking
          setVisible={setVisible}
          fragmentsData={fragmentsData}
          availableRadiiData={availableRadiiData}
          carBodiesData={carBodiesData}
          servicesData={servicesData}
          navigationData={navigationData}
          additionalService={isAdditionalService ? additionalservice.title : ''}
        />
      </Layer>
      <Box width='100%' maxWidth={['100%', '100%', 1440]} marginTop={[80, 80, 104]}>
        <Row>
          <Layout flexBasis={[20, 20, 299]} flexShrink={[0, 0, 1]} />
          <Column width='100%'>
            <Layout flexBasis={[20, 20, 32]} />
            <Box width={102}>
              <ReturnButton title={goBack} />
            </Box>
            <Layout flexBasis={32} />
            <Layout>
              <Text
                fontWeight='medium'
                fontSize={['extraLarge', 'extraLarge', 'giant']}
                lineHeight='grown'
                display='inline'
              >
                {serviceName}
              </Text>
            </Layout>
            <Condition match={variant === 'primary' || variant === 'tertiary'}>
              <Layout flexBasis={28} />
              <Layout display={['none', 'none', 'flex']}>
                <Switch active={onCarBody}>
                  {carBodies.map((item) => (
                    <Item key={item} value={item} onSelect={setOnCarBody}>
                      {item}
                    </Item>
                  ))}
                </Switch>
              </Layout>
              <Layout flexBasis={24} />
              <Box
                height={48}
                alignItems='center'
                borderRadius='default'
                backgroundColor='fillGray'
                display={['flex', 'flex', 'none']}
              >
                <CarBodiesCarousel>
                  {carBodies.map((item) => (
                    <Box
                      key={item}
                      width='100%'
                      height='100%'
                      alignItems='center'
                      justifyContent='center'
                      borderRadius='small'
                      backgroundColor={onCarBody === item ? 'primaryBlue' : 'fillGray'}
                    >
                      <Button
                        color='transparent'
                        size='small'
                        height='100%'
                        width='100%'
                        onClick={() => setOnCarBody(item)}
                      >
                        <Text
                          color={onCarBody === item ? 'white' : 'black'}
                          fontWeight='bold'
                          fontSize='small'
                        >
                          {item}
                        </Text>
                      </Button>
                    </Box>
                  ))}
                </CarBodiesCarousel>
              </Box>
              <Layout flexBasis={[24, 24, 0]} />
              <Layout>
                <Radii items={availableRadii} selectedItem={radius} setSelectedItem={setRadius} />
              </Layout>
              <Layout flexBasis={24} />
            </Condition>
            <Condition match={variant === 'secondary'}>
              <Layout flexBasis={24} />
              <Divider backgroundColor='gray' />
              <Layout flexBasis={24} />
            </Condition>
            <Row>
              <Text fontSize={['xl', 'giant', 'giant']} fontWeight='medium'>
                {servicePrice !== undefined ? servicePrice : defaultPrice}
                <Space />
                <Ruble />
              </Text>
              <Layout flexBasis={24} />
              <Column justifyContent='center'>
                <Condition match={addon}>
                  <Box
                    height={28}
                    backgroundColor='lightGray'
                    padding='6px 10px'
                    borderRadius='normal'
                  >
                    <Text color='darkGray'>{addon}</Text>
                  </Box>
                </Condition>
              </Column>
            </Row>
            <Layout flexBasis={24} />
            <Divider backgroundColor='gray' />
            <Layout flexBasis={24} />
            <Layout>
              <Column fill>
                {description.split('|n|').map((item) => (
                  <Text key={item} lineHeight='medium'>
                    {item}
                  </Text>
                ))}
              </Column>
            </Layout>
            <Condition match={variant === 'tertiary'}>
              <Layout flexBasis={24} />
              <Divider backgroundColor='gray' />
              <Layout flexBasis={24} />
              <Row display={['none', 'none', 'flex']}>
                <Accordion text={workExamplesTitle}>
                  <Box
                    width='100%'
                    justifyContent='center'
                    borderRadius='little'
                    backgroundColor='lightGray'
                  >
                    {workExamplesData?.map(({ image, title, price: cost }, index) => (
                      <React.Fragment key={title}>
                        <WorkExample image={image} title={title} price={defaultPrice} />
                        <Condition match={index === 0}>
                          <Layout flexBasis={16} flexShrink={0} />
                        </Condition>
                      </React.Fragment>
                    ))}
                  </Box>
                </Accordion>
              </Row>
              <Row display={['flex', 'flex', 'none']}>
                <Accordion text={workExamplesTitle}>
                  <WorkExamplesCarousel>
                    {workExamplesData?.map(({ image, title, price: cost }, index) => (
                      <React.Fragment key={title}>
                        <WorkExample image={image} title={title} price={defaultPrice} />
                        <Condition match={index === 0}>
                          <Layout flexBasis={32} flexShrink={0} />
                        </Condition>
                      </React.Fragment>
                    ))}
                  </WorkExamplesCarousel>
                </Accordion>
              </Row>
            </Condition>
            <Condition match={variant === 'primary' && additionalservice.title !== null}>
              <Layout flexBasis={24} />
              <AdditionalService
                isAdditionalService={isAdditionalService}
                setIsAdditionalService={setIsAdditionalService}
                additionalservice={additionalservice}
              />
            </Condition>
            <Layout flexBasis={32} />
            <Box width='100%' height={48}>
              <Button
                onClick={() => {
                  setVisible(true)
                  serviceVar({ radius, carBody: onCarBody, serviceName })
                }}
              >
                <Text fontWeight='medium'>
                  {signUp}
                  <Space />
                  {servicePrice !== undefined ? servicePrice : defaultPrice}
                  <Space />
                  <Ruble />
                </Text>
              </Button>
            </Box>
            <Layout flexBasis={[65, 65, 120]} />
          </Column>
          <Layout flexBasis={[20, 20, 299]} flexShrink={[0, 0, 1]} />
        </Row>
      </Box>
    </>
  )
}

export { Service }
