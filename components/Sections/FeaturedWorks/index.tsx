import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Mera Dil"
            src="/works/tobira/IphoneX-tobira.webp"
            description="Avesh Khan, a soulful and melodious singer from Mumbai, Maharashtra, pours his heart into this original composition. The journey of this song began in 2021, evolving over time as beautiful elements like guitar, drums, and synth were woven into its fabric. After years of dedication, it was finally released on September 25th, 2024, bringing its musical magic to life."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://tobira-app-test.netlify.app/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="RSV"
            description="RSV is a smart contract (ERC20) powered reservation system. I am incharge of backend using NET.Core 2.1."
            src="/works/rsv.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://solution.rsv.ltd/jp"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Agora School"
            description="A quizz - reviewer LMS, I made as a freelancer. Backend were powered by PHPSlim and VueJS for Front end."
            src="/works/agora.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://dev.agora-school.com"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="TMH Layla EC"
            description="A Japanese Semi-conductor e-commerce made at my old place at IVP. I was working with backend using ASP.NET MVC"
            src="/works/tmh.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.layla-ec.com/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
