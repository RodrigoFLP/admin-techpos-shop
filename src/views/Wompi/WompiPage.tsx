import { Button } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import LayourInnerDashboard from "../../components/layouts/LayoutInnerDashboard";

const WompiPage = () => {
  return (
    <LayourInnerDashboard
      title="Wompi"
      rightAction={<Button leftIcon={<Plus size={16} />}>Agregar</Button>}
    >
      {}
    </LayourInnerDashboard>
  );
};

export default WompiPage;
