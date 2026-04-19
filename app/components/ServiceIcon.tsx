
import React from 'react';
import * as Icons from 'lucide-react';

// Mapeo para asegurar que solo usamos iconos válidos
const iconMap = {
  LayoutGrid: Icons.LayoutGrid,
  Cloudy: Icons.Cloudy,
  Sun: Icons.Sun,
  CircleDollarSign: Icons.CircleDollarSign,
  Heart: Icons.Heart,
  Anchor: Icons.Anchor,
  Gem: Icons.Gem,
  BookOpenText: Icons.BookOpenText,
  Calculator: Icons.Calculator,
};

type IconName = keyof typeof iconMap;

interface ServiceIconProps {
  name: string;
  className?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className }) => {
  if (!name || !iconMap[name as IconName]) {
    // Devuelve un icono por defecto o nada si el nombre no es válido
    return <Icons.HelpCircle className={className} />;
  }

  const IconComponent = iconMap[name as IconName];
  return <IconComponent className={className} />;
};

export default ServiceIcon;
