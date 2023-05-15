import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function NavBar({ currentVisibleIndex, onClickNavLink }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box pos={"fixed"} top={0} width={"100%"} zIndex={999}>
      <Flex
        backdropFilter={"saturate(50%) blur(7px)"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={"solid"}
        // borderColor={"gray.200"}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
          <a href="/">
            <Box height={30} width={70} cursor={"pointer"}>
              <Text>
                Date's
              </Text>
            </Box>
          </a>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }}>
          <DesktopNav
            currentVisibleIndex={currentVisibleIndex}
            onClickNavLink={onClickNavLink}
          />
        </Flex>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          justify={"flex-end"}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            _hover={{
              bg: "#purple.400",
            }}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onClickNavLink={onClickNavLink} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ currentVisibleIndex, onClickNavLink }) => {
  const linkColor = "black";
  const linkHoverColor = "yellow.400";
  const popoverContentBgColor = "black";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                onClick={() => onClickNavLink(navItem.id)}
                fontSize={"sm"}
                fontWeight={"bold"}
                color={currentVisibleIndex === index+1 ? "yellow.400" :linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      {/* <Box>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Link
              p={2}
              fontSize={"sm"}
              fontWeight={"bold"}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
              href="https://aslan-academy.gitbook.io/aslan-academy/about/summary"
              target="_blank"
            >
              백서
            </Link>
          </PopoverTrigger>
        </Popover>
      </Box> */}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "yellow.400" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "blackAlpha.800" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blackAlpha.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ onClickNavLink }) => {
  
  return (
    <Stack bg={"blackAlpha.900"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          onClickNavLink={onClickNavLink}
          key={navItem.id}
          {...navItem}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, onClickNavLink }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle} textColor={"whiteAlpha.600"}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
          color: "#AB8434",
        }}
      >
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#",
    id: 1,
  },
  {
    label: "About",
    href: "#",
    id: 2,
  },
  {
    label: "Collection",
    href: "#",
    id: 3,
  },
  {
    label: "Roadmap",
    href: "#",
    id: 4,
  },
  {
    label: "Team",
    href: "#",
    id: 5,
  },
  {
    label: "Faq",
    href: "#",
    id: 6,
  },
  // {
  //   label: "팀 소개",
  //   href: "#",
  //   id: 6,
  // },
  // {
  //   label: "멘토",
  //   href: "#",
  //   id: 7,
  // },
  // {
  //   label: "FAQ",
  //   href: "#",
  //   id: 8,
  // },
];
