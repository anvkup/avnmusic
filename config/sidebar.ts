import { PhoneIcon } from '@chakra-ui/icons'
import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
  FaMobile,
  FaPhone,
  FaPhoneAlt,
} from 'react-icons/fa'
import { SiFedramp } from 'react-icons/si'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [

  {
    label: 'Instagram',
    href: 'https://www.instagram.com/themusicalstoryteller/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marclawingco/',
    icon: FaLinkedin,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/channel/UCV-MiUVsKJrKJKKfUK58nhg',
    icon: FaYoutube,
  },
  {
    label: 'Call',
    href: 'tel:+91 90607 93927',
    icon: FaPhoneAlt
  }
]
