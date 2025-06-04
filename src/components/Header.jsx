import {
    IconAdjustmentsCode,
    IconAppWindowFilled,
  IconAutomation,
  IconBrandGithubCopilot,
  IconBrandGooglePlay,
  IconChartPie3,
  IconChevronDown,
  IconHours24,
  IconSettings,
  IconUxCircle,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './css/Header.css'; // Assume you've converted HeaderMegaMenu.module.css to plain CSS
import { Link } from 'react-router-dom';

const mockdata = [
     {
    icon: IconBrandGithubCopilot,
    title: 'AI-Powered Software Solutions',
    description: 'Integrate AI features like machine learning, NLP, and chatbots into your software.',
  },
  {
    icon: IconAdjustmentsCode,
    title: 'Enterprise Software Development',
    description: 'Development of robust ERP, CRM, HRMS, and SCM systems to optimize enterprise operations.',
  },
  {
    icon: IconAppWindowFilled,
    title: 'Web & Mobile App Development',
    description: 'End-to-end development of responsive websites and mobile applications for Android, iOS, and cross-platform.',
  },
  {
    icon: IconAutomation,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business needs, workflows, and goals.',
  },
  {
    icon: IconSettings,
    title: 'SaaS Product Development',
    description: 'Build scalable, cloud-based Software-as-a-Service platforms with secure multi-tenant architecture.',
  },
  {
    icon: IconChartPie3,
    title: 'Software Maintenance & Support',
    description: 'Ongoing technical support, performance monitoring, and regular updates to keep your software running smoothly.',
  },
  {
    icon: IconHours24,
    title: ' DevOps Services',
    description: 'CI/CD pipeline setup, automated deployments, and infrastructure management for faster, more reliable software delivery.',
  },
  {
    icon: IconUxCircle,
    title: 'UI/UX Design Services',
    description: 'Intuitive, user-centered interface design backed by wireframes, prototypes, and usability testing.',
  },
  {
    icon: IconBrandGooglePlay,
    title: 'Cross-Platform & Native App Development',
    description: 'Develop mobile apps using React Native, Flutter, or native stacks tailored to each platform.',
  },
];

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className="subLink" key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.red[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box >
      <header className="header">
        <Group justify="space-around" h="100%">
          <img src="/images/logo/logo_white_bg.png" width="190px" alt="" />

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to={"/"} className="link">Home</Link>

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Link to="/services" className="link">
                  <Center inline>
                    <Box component="span" mr={5}>Services</Box>
                    <IconChevronDown size={16} color={theme.colors.red[6]} />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>
                    Services
                  </Text>
                  <Anchor href="#" fz="xs" className='text-red-600'>View all (22)</Anchor>
                </Group>
                <Divider my="sm" />
                <SimpleGrid cols={2} spacing={0}>{links}</SimpleGrid>
                <div className="dropdownFooter">
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">Get started</Text>
                      <Text size="xs" c="dimmed">
                        Make your websites and applications with Codeteak
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <Link to={"/about"} className="link">About</Link>
            <Link to={"/contact"} className="link">Contact Us</Link>
          </Group>


          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Explore"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          <Link to="/" className="link">Home</Link>

          <UnstyledButton className="link" onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}><Link to={"/services"}>Services</Link> </Box>
              <IconChevronDown size={16} color={theme.colors.red[6]} />
            </Center>
          </UnstyledButton>

          <Collapse in={linksOpened}>{links}</Collapse>

          <Link to={"/about"} className="link">About</Link>
          <Link to={"/contact"} className="link">Contact</Link>

        </ScrollArea>
      </Drawer>
    </Box>
  );
}
