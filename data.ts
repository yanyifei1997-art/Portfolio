import { Project, Category, Service } from './types';

export const PROJECTS: Project[] = [
  // --- URBAN ---
  {
    id: 'u-1',
    title: '滕王阁城市更新',
    category: 'Urban',
    mainImage: 'https://i.postimg.cc/RVGMgnsB/A2.jpg',
    detailImages: [
      'https://i.postimg.cc/ft8n39LD/B.jpg', 'https://i.postimg.cc/jnCVySwJ/C1.jpg', 'https://i.postimg.cc/2L3pnSbV/F.jpg',
      'https://i.postimg.cc/1V4xD3ng/H.jpg', 'https://i.postimg.cc/30WM2x4v/J.jpg', 'https://i.postimg.cc/MfXk1pM0/K.jpg',
      'https://i.postimg.cc/qgZH4yS7/L.jpg', 'https://i.postimg.cc/fkgQDmpS/M2.jpg', 'https://i.postimg.cc/8sngNM97/N.jpg',
      'https://i.postimg.cc/py1MRz48/Q.jpg', 'https://i.postimg.cc/BXL96tfV/R.jpg', 'https://i.postimg.cc/pphbTyMK/S.jpg'
    ],
    location: '江西南昌',
    time: '2025.9',
    designer: 'ECADI',
    description: ''
  },
  {
    id: 'u-2',
    title: '上虞之环',
    category: 'Urban',
    mainImage: 'https://i.postimg.cc/LJGtz9Xc/A.jpg',
    detailImages: [
      'https://i.postimg.cc/0zhYpkjR/B.jpg', 'https://i.postimg.cc/9DsdGm03/C.jpg', 'https://i.postimg.cc/qNWs8Jqn/D.jpg',
      'https://i.postimg.cc/cr9MLMNc/E1.jpg', 'https://i.postimg.cc/G44P88Ln/F1.jpg'
    ],
    location: '浙江上虞',
    time: '2025.5',
    designer: 'Kun Wang&Yifei Yan',
    description: ''
  },

  // --- ARCHITECTURE ---
  {
    id: 'a-1',
    title: '万科售楼处',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/nXkYyz8s/wei-xin-tu-pian-20251221184306-140-65.jpg',
    detailImages: [
      'https://i.postimg.cc/4Y5bDdC7/wei-xin-tu-pian-20251221184310-141-65.jpg', 'https://i.postimg.cc/LJTBcXdJ/wei-xin-tu-pian-20251221184304-139-65.jpg',
      'https://i.postimg.cc/RWRQkFrS/wei-xin-tu-pian-20251221184254-136-65.jpg', 'https://i.postimg.cc/ZWcFGRkJ/wei-xin-tu-pian-20251221184258-137-65.jpg',
      'https://i.postimg.cc/CRNH31yM/wei-xin-tu-pian-20251221184301-138-65.jpg', 'https://i.postimg.cc/ts5tKT0C/wei-xin-tu-pian-20251221184252-135-65.jpg',
      'https://i.postimg.cc/jDXQp5VT/wei-xin-tu-pian-20251221184251-134-65.jpg'
    ],
    location: '安徽合肥',
    time: '2025.7',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'a-2',
    title: '花卉中心',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/RZXKnGwV/A.jpg',
    detailImages: [
      'https://i.postimg.cc/TP1mjmcp/D.jpg', 'https://i.postimg.cc/7LRzK6B0/B.jpg', 'https://i.postimg.cc/g07hgJMv/C.jpg'
    ],
    location: '上海',
    time: '2025.6',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'a-3',
    title: '舟山美术馆',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/yNTP02Sq/1-fu-ben.jpg',
    location: '浙江舟山',
    time: '2021.8',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'a-4',
    title: '华之门学校',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/LsRRSjxs/C.jpg',
    detailImages: [
      'https://i.postimg.cc/sDksnkSq/A.jpg', 'https://i.postimg.cc/MGxxw19K/B.jpg', 'https://i.postimg.cc/J0tMgmpw/D.jpg',
      'https://i.postimg.cc/1RY9Fnz1/E.jpg', 'https://i.postimg.cc/d3XwcXfF/G.jpg', 'https://i.postimg.cc/RCbMt6Z7/H.jpg',
      'https://i.postimg.cc/TYLTJdyv/I.jpg', 'https://i.postimg.cc/gkCmMCR6/J.jpg'
    ],
    location: '上海',
    time: '2022.12',
    designer: 'Original Design',
    description: ''
  },
  {
    id: 'a-5',
    title: '平湖文体中心',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/PqZ4WwHm/1.jpg',
    detailImages: [
      'https://i.postimg.cc/t1qWy7Yz/yun-xia-jie-shi2.jpg', 'https://i.postimg.cc/t1qWy7Yh/yun-xia-jie-shi3.jpg',
      'https://i.postimg.cc/5Hsvt1C7/yun-xia-jie-shi4.jpg', 'https://i.postimg.cc/cvNf9FWk/yun-xia-jie-shi-ye-jing.jpg'
    ],
    location: '广州深圳',
    time: '2023.5',
    designer: 'Original Design',
    description: ''
  },
  {
    id: 'a-7',
    title: '悬崖之云',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/pLkNLcXV/D.jpg',
    detailImages: [
      'https://i.postimg.cc/8CC2JdjD/C.jpg', 'https://i.postimg.cc/Z5jk5sYG/A.jpg'
    ],
    location: '上海',
    time: '2021.10',
    designer: 'Yifei Yan',
    description: ''
  },
  {
    id: 'a-8',
    title: '悦意天王寺',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/PPrryZpM/wei-xin-tu-pian-20251222171040-152-65.jpg',
    detailImages: [
      'https://i.postimg.cc/dLtt6dkn/wei-xin-tu-pian-20251222171057-153-65.jpg', 'https://i.postimg.cc/svDDmSQn/wei-xin-tu-pian-20251222171101-154-65.jpg'
    ],
    location: '浙江杭州',
    time: '2025.7',
    designer: 'Yueyi Design',
    description: ''
  },
  {
    id: 'a-9',
    title: '福鼎清泉寺',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/fJTTCXtm/wei-xin-tu-pian-20251222170947-151-65.jpg',
    location: '福建福州',
    time: '2025.7',
    designer: 'Yueyi Design',
    description: ''
  },
  {
    id: 'a-10',
    title: '三毛故居驿站',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/q7bzyGw5/A1.jpg',
    detailImages: [
      'https://i.postimg.cc/SKTJCGdw/A2.jpg', 'https://i.postimg.cc/25811tQw/A3.jpg', 'https://i.postimg.cc/g07hgJMv/B1.jpg',
      'https://i.postimg.cc/43LmV1Pv/B2.jpg', 'https://i.postimg.cc/R0sNKTdd/B3.jpg', 'https://i.postimg.cc/KYqRB5f5/C1.jpg',
      'https://i.postimg.cc/rpnKx9jg/C2.jpg', 'https://i.postimg.cc/R0sNKTds/C3.jpg'
    ],
    location: '浙江舟山',
    time: '2021.9',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'a-11',
    title: '莫恩公学',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/D0fjHnLT/E1.jpg',
    detailImages: [
      'https://i.postimg.cc/FFGnckXR/I.jpg', 'https://i.postimg.cc/Y28ygLBX/A.jpg', 'https://i.postimg.cc/Gh2gj3bQ/B.jpg',
      'https://i.postimg.cc/9FMgBXW2/C.jpg', 'https://i.postimg.cc/c4b9kqHZ/D.jpg', 'https://i.postimg.cc/QC64rwJ2/F.jpg',
      'https://i.postimg.cc/gc4BRLbk/G.jpg', 'https://i.postimg.cc/gjMSPQKb/H.jpg', 'https://i.postimg.cc/mZV6M1Wm/K.jpg'
    ],
    location: '邯郸广平',
    time: '2022.5',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'a-12',
    title: '莫恩食堂',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/13RFF4P3/A.jpg',
    detailImages: [
      'https://i.postimg.cc/6pHvfwpJ/B.jpg', 'https://i.postimg.cc/tgYVrfYm/C.jpg', 'https://i.postimg.cc/bw6t98wj/D.jpg',
      'https://i.postimg.cc/PqP86cPR/E.jpg', 'https://i.postimg.cc/LsnZy7Jm/F.jpg', 'https://i.postimg.cc/DzH4RgGW/G.jpg',
      'https://i.postimg.cc/d1CZFyR5/H.jpg', 'https://i.postimg.cc/FRSkvLbD/I.jpg', 'https://i.postimg.cc/MTBfwQ0g/J.jpg'
    ],
    location: '邯郸广平',
    time: '2022.5',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'a-13',
    title: '半岛遗石',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/ZqCVrwZc/1.jpg',
    detailImages: [
      'https://i.postimg.cc/RFtdYqNk/2.jpg', 'https://i.postimg.cc/j5fc1CDS/C.jpg', 'https://i.postimg.cc/k4SsHD2q/D.jpg'
    ],
    location: '浙江舟山',
    time: '2023.1',
    designer: 'Void Design',
    description: ''
  },
  {
    id: 'a-14',
    title: '轻帆之下',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/kgDxZDZ9/M.jpg',
    detailImages: [
      'https://i.postimg.cc/SNSL6gf9/N.jpg', 'https://i.postimg.cc/T3hrShSM/O.jpg', 'https://i.postimg.cc/g2rv5r7T/E.jpg', 'https://i.postimg.cc/pXsfqKs7/F.jpg'
    ],
    location: '浙江舟山',
    time: '2023.1',
    designer: 'Void Design',
    description: ''
  },
  {
    id: 'a-15',
    title: '远香湖驿站',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/zDL2290B/EX4.jpg',
    detailImages: [
      'https://i.postimg.cc/76R7Tt2m/EX1.jpg', 'https://i.postimg.cc/yW4ZLJnf/EX2.jpg', 'https://i.postimg.cc/NGyCCWp0/EX3.jpg',
      'https://i.postimg.cc/44K22rBR/EX5.jpg', 'https://i.postimg.cc/PfB3g2RP/EX6.jpg', 'https://i.postimg.cc/ZY17GVMP/EX7.jpg',
      'https://i.postimg.cc/15wCsDxX/EX8.jpg', 'https://i.postimg.cc/XYW2JX34/EX9.jpg'
    ],
    location: '上海',
    time: '2024.7',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'a-16',
    title: '华漕中学',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/GhgtQghy/J.jpg',
    detailImages: [
      'https://i.postimg.cc/3xPRMyG8/A.jpg', 'https://i.postimg.cc/Ss4xswVM/B.jpg', 'https://i.postimg.cc/RFmZFjG6/C.jpg',
      'https://i.postimg.cc/xCQ1CWgX/D.jpg', 'https://i.postimg.cc/2y26g2Q9/E.jpg', 'https://i.postimg.cc/Ghm9vnRG/F.jpg',
      'https://i.postimg.cc/7YZbSr4M/G.jpg', 'https://i.postimg.cc/wTj3DYzN/I.jpg', 'https://i.postimg.cc/Bn86w5Xx/K.jpg',
      'https://i.postimg.cc/2Sq6XdV2/L.jpg'
    ],
    location: '上海',
    time: '2023.3',
    designer: 'Original Design',
    description: ''
  },
  {
    id: 'a-17',
    title: '梁祝大剧院',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/HxSYfWRz/1.jpg',
    detailImages: [
      'https://i.postimg.cc/gjnzdFbf/2.jpg', 'https://i.postimg.cc/C1vhWM9p/3.jpg', 'https://i.postimg.cc/HnVYHDCT/4.jpg',
      'https://i.postimg.cc/Vvdf1Qc1/5.jpg', 'https://i.postimg.cc/RhNS95zM/6.jpg', 'https://i.postimg.cc/nrCFZbtX/7.jpg',
      'https://i.postimg.cc/vTcYMFd9/8.jpg', 'https://i.postimg.cc/rs38wn80/A.jpg', 'https://i.postimg.cc/3NVKxSKj/D.jpg',
      'https://i.postimg.cc/D0H2wj2p/E.jpg', 'https://i.postimg.cc/9XnXbMGV/F.jpg'
    ],
    location: '浙江宁波',
    time: '2022.10',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'a-18',
    title: '半山民宿',
    category: 'Architecture',
    mainImage: 'https://i.postimg.cc/gJfR6PHV/D111.jpg',
    detailImages: [
      'https://i.postimg.cc/tTLPVHNz/D3.jpg', 'https://i.postimg.cc/4drthTQm/D2.jpg'
    ],
    location: '浙江杭州',
    time: '2022.8',
    designer: 'Hot Design',
    description: ''
  },

  // --- LANDSCAPE ---
  {
    id: 'l-1',
    title: '盐官音乐桥',
    category: 'Landscape',
    mainImage: 'https://i.postimg.cc/ph7tSTdR/F-fu-ben.jpg',
    detailImages: [
      'https://i.postimg.cc/5y9N6Qdg/A.jpg', 'https://i.postimg.cc/rshyWyMP/B2.jpg', 'https://i.postimg.cc/zDpG47K7/D2.jpg',
      'https://i.postimg.cc/jqvSBcPF/E.jpg', 'https://i.postimg.cc/FHYzySdN/G.jpg', 'https://i.postimg.cc/SRQNJYF7/H.jpg',
      'https://i.postimg.cc/C5MLznTJ/I.jpg'
    ],
    location: '嘉兴海宁',
    time: '2023.6',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'l-2',
    title: '林溪三品',
    category: 'Landscape',
    mainImage: 'https://i.postimg.cc/3JJFHt68/1.jpg',
    detailImages: [
      'https://i.postimg.cc/RVVLzg8Q/A.jpg', 'https://i.postimg.cc/wMF5mNtz/B.jpg', 'https://i.postimg.cc/8PPmVZ3b/D.jpg'
    ],
    location: '湖州德清',
    time: '2023.3',
    designer: 'Void Design',
    description: ''
  },
  {
    id: 'l-3',
    title: '孝丰镇桥',
    category: 'Landscape',
    mainImage: 'https://i.postimg.cc/j2ghwf9k/1.jpg',
    detailImages: [
      'https://i.postimg.cc/vHKzGW58/10.jpg', 'https://i.postimg.cc/BbQgnphb/image.jpg', 'https://i.postimg.cc/MpjYHvYt/13.jpg',
      'https://i.postimg.cc/8zrbcjbn/14.jpg', 'https://i.postimg.cc/bvc9tp6W/15.jpg', 'https://i.postimg.cc/c1XhbqH4/2.jpg',
      'https://i.postimg.cc/h4ps5Fjm/3.jpg', 'https://i.postimg.cc/44BPSCd3/4.jpg', 'https://i.postimg.cc/CL57yvBk/7.jpg',
      'https://i.postimg.cc/8Pc48yfg/8.jpg'
    ],
    location: '湖州安吉',
    time: '2021.11',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'l-4',
    title: '蝶舞桥',
    category: 'Landscape',
    mainImage: 'https://i.postimg.cc/02rRNRHD/image.jpg',
    detailImages: [
      'https://i.postimg.cc/MpjCy0wZ/1.jpg', 'https://i.postimg.cc/y8SMFhKD/2.jpg', 'https://i.postimg.cc/0yJTpGv6/3.jpg',
      'https://i.postimg.cc/SxzBWL4h/5.jpg', 'https://i.postimg.cc/6QJDz76v/6.jpg', 'https://i.postimg.cc/8CRxY1sZ/7.jpg',
      'https://i.postimg.cc/SK6HPyJ4/8.jpg', 'https://i.postimg.cc/6QrFP9yB/9.jpg'
    ],
    location: '湖州安吉',
    time: '2022.3',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'l-5',
    title: '鱼珠闸桥',
    category: 'Landscape',
    mainImage: 'https://i.postimg.cc/nC3368d9/niao-kan1.jpg',
    detailImages: [
      'https://i.postimg.cc/HJy3crTv/ren-shi1.jpg', 'https://i.postimg.cc/jW7vwDsY/ren-shi2.jpg', 'https://i.postimg.cc/hzRs9Kjh/ren-shi3.jpg',
      'https://i.postimg.cc/S2LrdH2z/ren-shi4.jpg', 'https://i.postimg.cc/CnF4QJkj/ren-shi5.jpg', 'https://i.postimg.cc/nXM3xd55/qiao-sheng1.jpg',
      'https://i.postimg.cc/w1P0jXY3/qiao-shang2.jpg', 'https://i.postimg.cc/v4j3Zrwv/qiao-shang3.jpg', 'https://i.postimg.cc/bZdmP6W8/niao-kan2.jpg',
      'https://i.postimg.cc/fVk8sHpN/niao-kan3.jpg', 'https://i.postimg.cc/G49XRMNZ/niao-kan4.jpg', 'https://i.postimg.cc/gLYKT48S/huang-hun1.jpg'
    ],
    location: '广东广州',
    time: '2023.5',
    designer: 'Original Design',
    description: ''
  },
  {
    id: 'l-6',
    title: '平望街区更新',
    category: 'Landscape',
    mainImage: 'https://i.postimg.cc/vmvndhH7/A1.jpg',
    detailImages: [
      'https://i.postimg.cc/VNFtcgk8/B1.jpg', 'https://i.postimg.cc/3wZGH1JL/C1.jpg', 'https://i.postimg.cc/xTkLbLtX/E1.jpg'
    ],
    location: '江苏苏州',
    time: '2024.11',
    designer: 'Yueyi Design',
    description: ''
  },

  // --- INTERIOR ---
  {
    id: 'i-1',
    title: '粤赣浦江餐厅公区',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/76v6Ydf4/2.jpg',
    detailImages: [
      'https://i.postimg.cc/Mn94xj9h/1.jpg', 'https://i.postimg.cc/xX67YbsY/3.jpg', 'https://i.postimg.cc/4mbqL0VR/A.jpg',
      'https://i.postimg.cc/fVzF6vfW/D.jpg', 'https://i.postimg.cc/nCYgRWBs/E.jpg', 'https://i.postimg.cc/XpcmHPdr/F.jpg',
      'https://i.postimg.cc/SJ73TPCY/G.jpg', 'https://i.postimg.cc/w1qPSkQy/H.jpg', 'https://i.postimg.cc/PCXcBMQw/J.jpg',
      'https://i.postimg.cc/bZyMKR90/L1.jpg', 'https://i.postimg.cc/CRhtW4sH/N.jpg', 'https://i.postimg.cc/FYrq2xVP/P.jpg',
      'https://i.postimg.cc/DSxDFbxq/Q.jpg', 'https://i.postimg.cc/w1wPHswF/R.jpg', 'https://i.postimg.cc/yDL5BSLL/S2.jpg',
      'https://i.postimg.cc/k2TZ9tTY/T.jpg'
    ],
    location: '上海',
    time: '2025.11',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-2',
    title: '粤赣浦江餐厅包厢',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/YLg0B7Mc/19A.jpg',
    detailImages: [
      'https://i.postimg.cc/8srj6RWZ/1.jpg', 'https://i.postimg.cc/TLB1s185/10.jpg', 'https://i.postimg.cc/jwB212Vf/11.jpg',
      'https://i.postimg.cc/vgCTKTRL/12.jpg', 'https://i.postimg.cc/ctYCGWZf/13.jpg', 'https://i.postimg.cc/vx9TwyM7/14.jpg',
      'https://i.postimg.cc/rRWs2Tcg/15.jpg', 'https://i.postimg.cc/PvZJnHhV/16.jpg', 'https://i.postimg.cc/Lgf5FSRr/18.jpg',
      'https://i.postimg.cc/Z0yCd835/21B.jpg', 'https://i.postimg.cc/dDTLy2dD/22C.jpg', 'https://i.postimg.cc/F1J7Lycx/24C.jpg',
      'https://i.postimg.cc/V5bdCqMg/30A.jpg', 'https://i.postimg.cc/0Mhj4jgy/5.jpg', 'https://i.postimg.cc/Pp0J7JGw/6.jpg',
      'https://i.postimg.cc/qhWqFqf2/7.jpg'
    ],
    location: '上海',
    time: '2025.11',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-3',
    title: '宋楠笙家庭厨房门店',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/FKhHr5P0/1.jpg',
    detailImages: [
      'https://i.postimg.cc/mgYrW2SC/9.jpg', 'https://i.postimg.cc/QdQMZxq5/10.jpg', 'https://i.postimg.cc/mrTgLfdh/11.jpg',
      'https://i.postimg.cc/8CTzpQy6/12.jpg', 'https://i.postimg.cc/pdPLWb0z/13.jpg', 'https://i.postimg.cc/sgd2LZ5d/2.jpg',
      'https://i.postimg.cc/BnTvfQCW/3.jpg', 'https://i.postimg.cc/FHyKXsxm/4.jpg', 'https://i.postimg.cc/vZrmwHvw/6.jpg',
      'https://i.postimg.cc/Dwrz3ycK/7.jpg', 'https://i.postimg.cc/W1G4cb7F/8.jpg'
    ],
    location: '上海',
    time: '2025.11',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-4',
    title: '上海历史博物馆咖啡厅',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/KvfN939w/9.jpg',
    detailImages: [
      'https://i.postimg.cc/05ddQJ1Z/1.jpg', 'https://i.postimg.cc/V6tg47T9/2.jpg', 'https://i.postimg.cc/pVDkF6zZ/4.jpg',
      'https://i.postimg.cc/xjKgz4LD/5.jpg', 'https://i.postimg.cc/fWx59rYs/6.jpg', 'https://i.postimg.cc/v8WXVNfN/7.jpg',
      'https://i.postimg.cc/zX87SFkJ/8.jpg', 'https://i.postimg.cc/QdMqvNPn/10.jpg', 'https://i.postimg.cc/MpGYgZ45/11.jpg',
      'https://i.postimg.cc/52tmD9TV/12.jpg', 'https://i.postimg.cc/4xF1GkRH/13.jpg', 'https://i.postimg.cc/k56vX17h/14.jpg',
      'https://i.postimg.cc/bv7HGxv4/15.jpg', 'https://i.postimg.cc/cJpMKRHx/16.jpg', 'https://i.postimg.cc/sX5P5MQg/18.jpg',
      'https://i.postimg.cc/zv5C7qKn/19.jpg', 'https://i.postimg.cc/WzjG8s0R/20.jpg', 'https://i.postimg.cc/0jfpHhC5/21.jpg',
      'https://i.postimg.cc/wMVhbnkN/22.jpg'
    ],
    location: '上海',
    time: '2025.11',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-5',
    title: '上海历史博物馆文创区',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/KjRMJ447/26.jpg',
    detailImages: [
      'https://i.postimg.cc/GmksMW3X/23.jpg', 'https://i.postimg.cc/fLWXS8sZ/25.jpg', 'https://i.postimg.cc/N0B2Zd5B/24.jpg',
      'https://i.postimg.cc/MHvQdXXd/27.jpg', 'https://i.postimg.cc/WzhkXttW/28.jpg', 'https://i.postimg.cc/BbXKMttg/29.jpg',
      'https://i.postimg.cc/zv6RM5Rc/30.jpg', 'https://i.postimg.cc/kGztZ9b7/31.jpg', 'https://i.postimg.cc/CMQDdCQp/32.jpg',
      'https://i.postimg.cc/gkLhhwC6/33.jpg', 'https://i.postimg.cc/WbqZZDBZ/34.jpg', 'https://i.postimg.cc/DwVXPvhr/35.jpg'
    ],
    location: '上海',
    time: '2025.11',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-6',
    title: '元气康养城样板间',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/XvrpCq12/8.jpg',
    detailImages: [
      'https://i.postimg.cc/QMFHTCY1/6.jpg', 'https://i.postimg.cc/R02qQm28/9.jpg', 'https://i.postimg.cc/ZqX0Fm1T/11.jpg',
      'https://i.postimg.cc/Jz4yRPNM/1.jpg', 'https://i.postimg.cc/FHWYz3ps/2.jpg', 'https://i.postimg.cc/kg12GKsK/5.jpg',
      'https://i.postimg.cc/L8CJ5LDJ/4.jpg', 'https://i.postimg.cc/mgXPkCj3/3.jpg'
    ],
    location: '上海',
    time: '2025.12',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-7',
    title: '青浦胡宅咖啡厅',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/DyYhbg96/D.jpg',
    detailImages: [
      'https://i.postimg.cc/h4scKgpd/B.jpg', 'https://i.postimg.cc/Yqy7m35n/C.jpg', 'https://i.postimg.cc/651KG0kM/E.jpg', 'https://i.postimg.cc/9FN2qp6J/F.jpg'
    ],
    location: '上海',
    time: '2025.2',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-8',
    title: '青浦咖啡厅',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/L4GtxKFj/A.jpg',
    detailImages: [
      'https://i.postimg.cc/XJp5gxH3/M4.jpg', 'https://i.postimg.cc/tTY6zDrN/L1.jpg', 'https://i.postimg.cc/vBkV29kw/N1.jpg',
      'https://i.postimg.cc/9QYyXDRT/B.jpg', 'https://i.postimg.cc/mgsQGYDw/C.jpg', 'https://i.postimg.cc/bw91YZD1/D.jpg',
      'https://i.postimg.cc/ht1V4XzL/E.jpg', 'https://i.postimg.cc/9QYyXDRs/F.jpg', 'https://i.postimg.cc/XvNdrn9F/G.jpg',
      'https://i.postimg.cc/hGCxxN0V/H.jpg', 'https://i.postimg.cc/TPkmmBcq/J.jpg', 'https://i.postimg.cc/QM655vq0/K.jpg'
    ],
    location: '上海',
    time: '2024.4',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-9',
    title: '平湖文体中心室内',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/DmrvQ6C0/tu-shu-guan3.jpg',
    detailImages: [
      'https://i.postimg.cc/D4T2k4wg/tu-shu-guan1.jpg', 'https://i.postimg.cc/G9FLPKM9/tu-shu-guan2.jpg', 'https://i.postimg.cc/7fqxKzc3/shu-shan.jpg',
      'https://i.postimg.cc/yWm1hjLf/ju-chang.jpg', 'https://i.postimg.cc/w3Xq52WT/duo-gong-neng-ting.jpg'
    ],
    location: '广州深圳',
    time: '2023.5',
    designer: 'Original Design',
    description: ''
  },
  {
    id: 'i-10',
    title: '台州机场室内',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/gXNnDKDf/hou-ji-ting.jpg',
    detailImages: [
      'https://i.postimg.cc/tJtPJ3hZ/D.jpg', 'https://i.postimg.cc/ZnF3n8r0/H.jpg'
    ],
    location: '浙江台州',
    time: '2023.1',
    designer: 'Original Design',
    description: ''
  },
  {
    id: 'i-11',
    title: 'Lady M国金店',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/fRwHDn2G/J.jpg',
    detailImages: [
      'https://i.postimg.cc/pXMGcnDj/A2.jpg', 'https://i.postimg.cc/jd68pdXn/B2.jpg', 'https://i.postimg.cc/Nf8N3f4H/C2.jpg',
      'https://i.postimg.cc/wT5WCTVL/D.jpg', 'https://i.postimg.cc/Hs0Sqs2b/E.jpg', 'https://i.postimg.cc/X7K2R782/F1.jpg',
      'https://i.postimg.cc/gkyMCkDf/G.jpg', 'https://i.postimg.cc/Dw2Cnkjt/H.jpg', 'https://i.postimg.cc/mgbdBfpT/K.jpg'
    ],
    location: '上海',
    time: '2024.11',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-12',
    title: 'IDOL办公室',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/pd0VqH4h/D2.jpg',
    detailImages: [
      'https://i.postimg.cc/xdjTvCsp/A.jpg', 'https://i.postimg.cc/q7mBjTSN/B.jpg', 'https://i.postimg.cc/QM6N03wV/C2.jpg',
      'https://i.postimg.cc/nLdV0JgD/E2.jpg', 'https://i.postimg.cc/0Nt5csFp/F2.jpg', 'https://i.postimg.cc/HxVYNN1y/G2.jpg',
      'https://i.postimg.cc/wvZqYk9f/H.jpg', 'https://i.postimg.cc/KzwGh5mJ/I2.jpg', 'https://i.postimg.cc/NMSsvxgw/J2.jpg',
      'https://i.postimg.cc/qRSJHGkR/K.jpg'
    ],
    location: '上海',
    time: '2024.3',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-13',
    title: '台铃电动车展厅',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/yYXTxQ2b/F.jpg',
    detailImages: [
      'https://i.postimg.cc/L6MTHKQL/A.jpg', 'https://i.postimg.cc/RVQThs2L/A1.jpg', 'https://i.postimg.cc/SN7GRTH7/B.jpg',
      'https://i.postimg.cc/BQcCbYRN/C.jpg', 'https://i.postimg.cc/gkqKjS1s/D.jpg', 'https://i.postimg.cc/P5XQwbjG/G.jpg',
      'https://i.postimg.cc/DwvPXQTk/H.jpg', 'https://i.postimg.cc/kgJvbNmC/J.jpg', 'https://i.postimg.cc/YCrzWNHC/K.jpg',
      'https://i.postimg.cc/wjwcctqx/M.jpg', 'https://i.postimg.cc/CxcHHZhC/N.jpg', 'https://i.postimg.cc/vZ0LL1Yh/O.jpg',
      'https://i.postimg.cc/Zq0PfTnF/P.jpg', 'https://i.postimg.cc/FK1bP9zn/Q.jpg', 'https://i.postimg.cc/SK563wYP/R.jpg',
      'https://i.postimg.cc/DzDrHtbw/S.jpg', 'https://i.postimg.cc/ZRd8SVr5/T.jpg', 'https://i.postimg.cc/MTQ7Sdyj/V.jpg',
      'https://i.postimg.cc/sXhYrwpT/W.jpg', 'https://i.postimg.cc/yxCFYcPn/Y.jpg'
    ],
    location: '上海',
    time: '2022.10',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-14',
    title: '原木风家装',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/nL8rrPLc/A.jpg',
    detailImages: [
      'https://i.postimg.cc/SKWsMfXY/B.jpg', 'https://i.postimg.cc/YS19Wz4W/C.jpg', 'https://i.postimg.cc/HLQxy9J4/D.jpg',
      'https://i.postimg.cc/jjz574Ww/E.jpg', 'https://i.postimg.cc/VNj6CWSF/F.jpg', 'https://i.postimg.cc/fbxL9f35/G.jpg'
    ],
    location: '上海',
    time: '2021.8',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-15',
    title: '远香湖驿站室内',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/8zFhTSfh/IN77.jpg',
    detailImages: [
      'https://i.postimg.cc/qvYxKRHL/IN1.jpg', 'https://i.postimg.cc/qMvsZnkn/IN10.jpg', 'https://i.postimg.cc/MKp7rRW5/IN11.jpg',
      'https://i.postimg.cc/KvpPXzjY/IN12.jpg', 'https://i.postimg.cc/JzybRLHZ/IN13.jpg', 'https://i.postimg.cc/8zqL50LW/IN14.jpg',
      'https://i.postimg.cc/tTGdrMT3/IN2psd.jpg', 'https://i.postimg.cc/sXPYb4Qm/IN3.jpg', 'https://i.postimg.cc/d1R2gjkf/IN4.jpg',
      'https://i.postimg.cc/pTQf3Jhw/IN5.jpg', 'https://i.postimg.cc/3NKXh02K/IN6.jpg', 'https://i.postimg.cc/h4r8rMqF/IN8.jpg',
      'https://i.postimg.cc/1RH0HMZG/IN9.jpg'
    ],
    location: '上海',
    time: '2024.7',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-16',
    title: '远香湖屋顶平台',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/sD1cg8MZ/RF1.jpg',
    detailImages: [
      'https://i.postimg.cc/vTK5nY4f/RF10.jpg', 'https://i.postimg.cc/yNCXn8vk/RF2.jpg', 'https://i.postimg.cc/52CSwCqQ/RF3.jpg',
      'https://i.postimg.cc/sgh4ph9Z/RF4.jpg', 'https://i.postimg.cc/W4c6S1X3/RF5.jpg', 'https://i.postimg.cc/KY77WhWm/RF6.jpg',
      'https://i.postimg.cc/SRRWj2Nt/RF7.jpg', 'https://i.postimg.cc/4yyzn7xn/RF8.jpg', 'https://i.postimg.cc/rssSz0w2/RF9.jpg'
    ],
    location: '上海',
    time: '2024.7',
    designer: 'Hot Design',
    description: ''
  },
  {
    id: 'i-17',
    title: '南丹路家装',
    category: 'Interior',
    mainImage: 'https://i.postimg.cc/RV2dxkTp/A1.jpg',
    detailImages: [
      'https://i.postimg.cc/q7xxnzHy/F1.jpg', 'https://i.postimg.cc/8CSbjL91/D1.jpg', 'https://i.postimg.cc/cJScrf2r/B2.jpg',
      'https://i.postimg.cc/mrsSt7Jz/C1.jpg', 'https://i.postimg.cc/Xvbgp9mJ/E1.jpg'
    ],
    location: '上海',
    time: '2025.5',
    designer: 'Yu Luo',
    description: ''
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    name: '1.建筑效果图定制',
    description: '大场景鸟瞰1000/张，小场景鸟瞰800/张，人视图500/张。',
    price: '1000/张',
    turnaround: '1-3天',
    icon: 'Building2'
  },
  {
    id: 2,
    name: '2.室内效果图定制',
    description: '室内效果图400/张，民宿/住宅/商业空间皆可定制。',
    price: '400/张',
    turnaround: '1-3天',
    icon: 'Home'
  },
  {
    id: 3,
    name: '3.建筑漫游视频制作',
    description: '建筑漫游视频100/秒，室内漫游视频70/秒',
    price: '100/秒',
    turnaround: '5-7天',
    icon: 'Video'
  }
];