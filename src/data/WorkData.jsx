import AirconLink from '../img/aircon.jpg';
import ReformLink from '../img/jp-house.jpg';
import WaterLink from '../img/water.jpg';
import AntennaLink from '../img/antenna.jpg';
import Ceiling from '../img/ceiling.jpg';
import GasTable from '../img/gas-table.jpg';
import FixLink from '../img/fix.jpg';
import Electrick from '../img/electrick.jpg';

const WorkData = [
  { name: 'エアコン工事', 
    imgLink: AirconLink,
    desc: '取外のみや移設も', 
  },
  { name: 'リフォーム工事', 
    imgLink: ReformLink,
    desc: 'クロス張り替え，棚の設置，てすり取り付け，網戸交換',
  },
  { name: '水道工事', 
    imgLink: WaterLink},
  { name: '電気工事', 
    imgLink: Electrick,
    desc: 'ブレーカー，分電盤，コンセント，エアコン専用回路工事',
  },
  { name: 'ガス工事', 
    imgLink: GasTable},
  { name: '照明器具交換', 
    imgLink: Ceiling},
  { name: 'アンテナ工事',
    imgLink: AntennaLink,},
  { name: '修理全般',
    imgLink: FixLink,
    desc: 'お気軽にお持ち込みください',
  },
];
export default WorkData;
