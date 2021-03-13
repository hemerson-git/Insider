
import { Ionicons } from '@expo/vector-icons';

interface Props {
  materialIconName: keyof typeof Ionicons.glyphMap;
  color: string
}

export function condition (condition : string) {
  let icon = <Props>{};
  
  switch(condition) {
    case 'cloudy':
      return icon = {
        materialIconName: 'rainy-outline',
        color: '#1EC9FF'
      }

    case 'clear_day':
      return icon = {
        materialIconName: "partly-sunny-outline",
        color: '#FFB300'
      }

    case 'rain':
      return icon ={
        materialIconName: "rainy-outline",
        color: '#1EC9FF'
      }

    default:
      return icon ={
        materialIconName: "cloud-outline",
        color: '#1EC9FF'
      }
  }
}
