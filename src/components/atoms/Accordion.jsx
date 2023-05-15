import React, { useState } from 'react'
import { Box, Flex, useColorModeValue, Collapse, Text } from '@chakra-ui/react';
// import { PlusIcon, MinusIcon } from 'Icons/Plus';

import { Plus } from './Plus';
import { Minus } from './Minus';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const borderColor = useColorModeValue('carouselColor', 'Dark.carouselColor');
  const bodyColor = useColorModeValue('bodyRgba', 'Dark.bodyRgba');

  return (
    <Box
      as="section"
      cursor="pointer"
      py={4}
      borderBottomWidth="1px"
      borderColor={borderColor}
      marginBottom={12}
    >
      <Flex as="header" justifyContent="space-between" alignItems="center" onClick={() => setIsOpen(!isOpen)}>
        <Text fontSize={20} lineHeight="tight">
          {title}
        </Text>
          <Box as="span" fontSize="2xl" d="flex" alignItems="center">
            {isOpen ? (
              <Minus boxSize={4} fill={borderColor} />
            ) : (
              <Plus boxSize={4} fill={borderColor} />
            )}
          </Box>
      </Flex>
      <Collapse in={isOpen} mt={4}>
        <Text color={bodyColor} fontSize="sm" fontWeight="300" lineHeight="1.1rem">
          {children}
        </Text>
      </Collapse>
    </Box>
  );
};

export default Accordion;