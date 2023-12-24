import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import useScrollListener from "../hooks/useScrollListener";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const [boxTransformValue, setboxTransformValue] = useState('translateY(0)');
  const scroll = useScrollListener();
  // update classList of nav on scroll
  useEffect(() => {

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      setboxTransformValue('translateY(-200px)');
    } else {
      setboxTransformValue('translateY(0)');
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transform={boxTransformValue}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack>
            {socials.map((social)=>(
              <a
              href={socials.url}
              key={social.url}
             style={{paddingRight:"20px"}} 
              >
                <FontAwesomeIcon icon = {social.icon} size= "2x"></FontAwesomeIcon>
              </a>
            ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>Contact Me</a>

            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
