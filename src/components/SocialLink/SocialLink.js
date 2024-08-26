import './SocialLink.css';
import { motion } from 'framer-motion';
import gitHubLogo from '../../assets/images/github.svg';
import linkedinLogo from '../../assets/images/linkedin.svg';

function SocialLink({ site, dev, url }) {
  return (
    <motion.a
      href={url}
      target='_blank'
      rel='noreferrer'
      aria-label={`Visit ${dev}'s ${site} profile`}
      whileHover={{ scale: 1.07 }}
      transition={{ type: 'spring' }}
    >
      <img
        src={site === 'github' ? gitHubLogo : linkedinLogo}
        alt={`${site} logo`}
      />
    </motion.a>
  );
}

export default SocialLink;
