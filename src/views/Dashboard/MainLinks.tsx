import {
  GitPullRequest,
  AlertCircle,
  Motorbike,
  ShoppingCart,
  Map2,
  Clock,
  CreditCard,
  Category,
  Bell,
  Api,
  Users,
  Icon,
} from "tabler-icons-react";
import {
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
  DefaultMantineColor,
} from "@mantine/core";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  active?: boolean;
  path: string;
}

function MainLink({ icon, color, label, active, path }: MainLinkProps) {
  return (
    <NavLink to={path} style={{ textDecoration: "none" }}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          borderLeft: active ? "3px solid" + theme.colors.blue[5] : "",
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          backgroundColor: active
            ? theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0]
            : "transparent",

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </NavLink>
  );
}

interface Data {
  icon: ReactElement;
  color: DefaultMantineColor;
  label: string;
  path: string;
}

const data: Data[] = [
  {
    icon: <GitPullRequest size={16} />,
    color: "blue",
    label: "Inicio",
    path: "/dashboard",
  },
  {
    icon: <Bell size={16} />,
    color: "teal",
    label: "Ordenes",
    path: "/dashboard/ordenes",
  },
  {
    icon: <CreditCard size={16} />,
    color: "indigo",
    label: "Pagos Wompi",
    path: "/dashboard/wompi",
  },
  {
    icon: <Users size={16} />,
    color: "orange",
    label: "Clientes",
    path: "/dashboard/clientes",
  },
];

const configData: Data[] = [
  {
    icon: <ShoppingCart size={16} />,
    color: "violet",
    label: "Productos",
    path: "/dashboard/productos",
  },
  {
    icon: <Category size={16} />,
    color: "grape",
    label: "Categor??as",
    path: "/dashboard/categorias",
  },
  {
    icon: <Clock size={16} />,
    color: "pink",
    label: "Horario",
    path: "/dashboard/horario",
  },
  {
    icon: <Map2 size={16} />,
    color: "yellow",
    label: "??reas",
    path: "/dashboard/areas",
  },
  {
    icon: <Motorbike size={16} />,
    color: "cyan",
    label: "Pedidos",
    path: "/dashboard/pedidos",
  },
  {
    icon: <Users size={16} />,
    color: "orange",
    label: "Usuarios admin",
    path: "/dashboard/usuarios",
  },
  {
    icon: <Api size={16} />,
    color: "indigo",
    label: "API",
    path: "/dashboard/api",
  },
];

interface LinksProps {
  currentPath: string;
}

export function MainLinks({ currentPath }: LinksProps) {
  const links = data.map((link) => (
    <MainLink {...link} key={link.label} active={currentPath === link.path} />
  ));
  return <div>{links}</div>;
}

export function ConfigLinks({ currentPath }: LinksProps) {
  const links = configData.map((link) => (
    <MainLink
      {...link}
      key={link.label}
      active={currentPath.includes(link.path)}
    />
  ));
  return <div>{links}</div>;
}
