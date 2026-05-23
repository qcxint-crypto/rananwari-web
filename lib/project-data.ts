export interface ProjectPart {
  id: string;
  name: string;
  modelUrl: string;
  designUrl?: string;
}

export interface ProjectTech {
  name: string;
  icon: string;
}

export interface ProjectData {
  id: number;
  titleKey: string;
  descKey: string;
  type: string;
  tech: ProjectTech[];
  modelUrl: string;
  parts: ProjectPart[];
  designs: string[];
}

export const projects: ProjectData[] = [
  {
    id: 1,
    titleKey: "PROJECT_1_TITLE",
    descKey: "PROJECT_1_DESC",
    type: "Assembly",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/01-Cover-Nipe-Roll/Assembly7.glb",
    parts: [
      {
        id: "p1",
        name: "Cover Niple Roll",
        modelUrl: "/models/01-Cover-Nipe-Roll/Cover-Niple-Roll.glb",
        designUrl: "/models/01-Cover-Nipe-Roll/Cover-Niple-Roll.jpg",
      },
      {
        id: "p2",
        name: "Bagian Atas",
        modelUrl: "/models/01-Cover-Nipe-Roll/atas.glb",
      },
      {
        id: "p3",
        name: "Baut M14",
        modelUrl: "/models/01-Cover-Nipe-Roll/M14.glb",
      },
      {
        id: "p4",
        name: "Baut M8",
        modelUrl: "/models/01-Cover-Nipe-Roll/M8.glb",
      },
    ],
    designs: [
      "/models/01-Cover-Nipe-Roll/Assembly.jpg",
      "/models/01-Cover-Nipe-Roll/Assembly2.jpg",
      "/models/01-Cover-Nipe-Roll/Cover-Niple-Roll.jpg",
      "/models/01-Cover-Nipe-Roll/cover-hoshing-bearing-nip-roll.jpg",
    ],
  },
  {
    id: 2,
    titleKey: "PROJECT_2_TITLE",
    descKey: "PROJECT_2_DESC",
    type: "Assembly",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/02-Speed-Roll/Assembly15.glb",
    parts: [
      {
        id: "p1",
        name: "Speed Roll",
        modelUrl: "/models/02-Speed-Roll/Speed Roll.glb",
        designUrl: "/models/02-Speed-Roll/speedroll.jpg",
      },
      {
        id: "p2",
        name: "Sirip Speed Roll 1",
        modelUrl: "/models/02-Speed-Roll/sirip1.glb",
      },
      {
        id: "p3",
        name: "Sirip Speed Roll 2",
        modelUrl: "/models/02-Speed-Roll/sirip2.glb",
      },
    ],
    designs: ["/models/02-Speed-Roll/speedroll.jpg", "/models/02-Speed-Roll/speedroll2.jpg"],
  },
  {
    id: 3,
    titleKey: "PROJECT_3_TITLE",
    descKey: "PROJECT_3_DESC",
    type: "Assembly",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/03-Chain-Plate/Assembly1.glb",
    parts: [
      {
        id: "p1",
        name: "Link Plate",
        modelUrl: "/models/03-Chain-Plate/Part1.glb",
        designUrl: "/models/03-Chain-Plate/link-plate.jpg",
      },
      {
        id: "p2",
        name: "Link Plate Bushing",
        modelUrl: "/models/03-Chain-Plate/Part6.glb",
        designUrl: "/models/03-Chain-Plate/link-plate-bushing.jpg",
      },
      {
        id: "p3",
        name: "Outer Link Plate",
        modelUrl: "/models/03-Chain-Plate/Part2.glb",
        designUrl: "/models/03-Chain-Plate/outer-link.jpg",
      },
      {
        id: "p4",
        name: "Inner Link Plate",
        modelUrl: "/models/03-Chain-Plate/Part3.glb",
        designUrl: "/models/03-Chain-Plate/inner-link.jpg",
      },
      {
        id: "p5",
        name: "Bushing",
        modelUrl: "/models/03-Chain-Plate/Part4.glb",
        designUrl: "/models/03-Chain-Plate/bushing.jpg",
      },
      {
        id: "p6",
        name: "Chain Pins",
        modelUrl: "/models/03-Chain-Plate/Part5.glb",
        designUrl: "/models/03-Chain-Plate/chain-pins.jpg",
      },
      {
        id: "p7",
        name: "Roller",
        modelUrl: "/models/03-Chain-Plate/roll.glb",
        designUrl: "/models/03-Chain-Plate/roller.jpg",
      },
    ],
    designs: [
      "/models/03-Chain-Plate/link-plate.jpg",
      "/models/03-Chain-Plate/link-plate-bushing.jpg",
      "/models/03-Chain-Plate/outer-link.jpg",
      "/models/03-Chain-Plate/inner-link.jpg",
      "/models/03-Chain-Plate/bushing.jpg",
      "/models/03-Chain-Plate/chain-pins.jpg",
      "/models/03-Chain-Plate/roller.jpg",
    ],
  },
  {
    id: 4,
    titleKey: "PROJECT_4_TITLE",
    descKey: "PROJECT_4_DESC",
    type: "Part",
    tech: [{ name: "Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/04-Chain-Plate-Line-4/CHAIN PLATE LINE 4.glb",
    parts: [],
    designs: ["/models/04-Chain-Plate-Line-4/CHAIN-PLATE-LINE-4.jpg"],
  },
  {
    id: 5,
    titleKey: "PROJECT_5_TITLE",
    descKey: "PROJECT_5_DESC",
    type: "Part",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/05Bracket-Guide-Roll-Transport/Bracket-Guide-Roll.glb",
    parts: [],
    designs: ["/models/05Bracket-Guide-Roll-Transport/Bracket-Guide-Roll.jpg"],
  },
  {
    id: 6,
    titleKey: "PROJECT_6_TITLE",
    descKey: "PROJECT_6_DESC",
    type: "Assembly",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/06-Baut-L-diameter-56/Assembly1.glb",
    parts: [
      {
        id: "p1",
        name: "Socket Head Cap Screws Bolt",
        modelUrl: "/models/06-Baut-L-diameter-56/SOCKET-HEAD-CAP-SCREWS-DIAMETER-56.glb",
        designUrl: "/models/06-Baut-L-diameter-56/SOCKET-HEAD-CAP-SCREWS-DIAMETER-56.jpg",
      },
      {
        id: "p2",
        name: "Ring Socket Head Cap Screws Bolt",
        modelUrl: "/models/06-Baut-L-diameter-56/ring.glb",
      },
    ],
    designs: ["/models/06-Baut-L-diameter-56/SOCKET-HEAD-CAP-SCREWS-DIAMETER-56.jpg"],
  },
  {
    id: 7,
    titleKey: "PROJECT_7_TITLE",
    descKey: "PROJECT_7_DESC",
    type: "Part",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/07-Nipple-Rotary-join-crimper-line-4/Nipple-Rotary-join-crimper-line-4.glb",
    parts: [],
    designs: ["/models/07-Nipple-Rotary-join-crimper-line-4/Nipple-Rotary-join-crimper-line-4.jpg"],
  },
  {
    id: 8,
    titleKey: "PROJECT_8_TITLE",
    descKey: "PROJECT_8_DESC",
    type: "Part",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/08-Colar-vtube-calender-side-front/Colar-vtube-calender-side-front.glb",
    parts: [],
    designs: ["/models/08-Colar-vtube-calender-side-front/Colar-vtube-calender-side-front.jpg"],
  },
  {
    id: 9,
    titleKey: "PROJECT_9_TITLE",
    descKey: "PROJECT_9_DESC",
    type: "Part",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/09-Stud-bolt-rotary-joint-calender/Stud-Bolt-Rotary-Joint-Calender.glb",
    parts: [],
    designs: ["/models/09-Stud-bolt-rotary-joint-calender/Stud-Bolt-Rotary-Joint-Calender.jpg"],
  },
  {
    id: 10,
    titleKey: "PROJECT_10_TITLE",
    descKey: "PROJECT_10_DESC",
    type: "Part",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/10-Flange-Outlet-Tube-Calender/Flange-Outlet-Tube-Calender.glb",
    parts: [],
    designs: ["/models/10-Flange-Outlet-Tube-Calender/Flange-Outlet-Tube-Calender.jpg"],
  },
  {
    id: 11,
    titleKey: "PROJECT_11_TITLE",
    descKey: "PROJECT_11_DESC",
    type: "Assembly",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/11-Side-Pump/Assembly13.glb",
    parts: [
      {
        id: "p1",
        name: "Side Pump Left",
        modelUrl: "/models/11-Side-Pump/Side-Pump-1.glb",
        designUrl: "/models/11-Side-Pump/Side-Pump-1.jpg",
      },
      {
        id: "p2",
        name: "Rubber",
        modelUrl: "/models/11-Side-Pump/rubber.glb",
      },
      {
        id: "p3",
        name: "Side Pump Right",
        modelUrl: "/models/11-Side-Pump/Side-Pump-2.glb",
        designUrl: "/models/11-Side-Pump/Side-Pump-2.jpg",
      },
    ],
    designs: ["/models/11-Side-Pump/Side-Pump-1.jpg", "/models/11-Side-Pump/Side-Pump-2.jpg"],
  },
  {
    id: 12,
    titleKey: "PROJECT_12_TITLE",
    descKey: "PROJECT_12_DESC",
    type: "Part",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/12-Shaft-Nipe-Roll-DS2/Shaft-Nipe-Roll-DS2.glb",
    parts: [],
    designs: ["/models/12-Shaft-Nipe-Roll-DS2/Shaft-Nipe-Roll-DS2.jpg"],
  },
  {
    id: 13,
    titleKey: "PROJECT_13_TITLE",
    descKey: "PROJECT_13_DESC",
    type: "Part",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/13-Shaft-Centrifugal-pump-HSB-040025/Shaft-Centrifugal-pump-HSB-040025.glb",
    parts: [],
    designs: ["/models/13-Shaft-Centrifugal-pump-HSB-040025/Shaft-Centrifugal-pump-HSB-040025.jpg"],
  },
  {
    id: 14,
    titleKey: "PROJECT_14_TITLE",
    descKey: "PROJECT_14_DESC",
    type: "Part",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/14-Shaft-Free-Roll/Shaft-Free-Roll.glb",
    parts: [],
    designs: ["/models/14-Shaft-Free-Roll/Shaft-Free-Roll-1.jpg", "/models/14-Shaft-Free-Roll/Shaft-Free-Roll-2.jpg"],
  },
  {
    id: 15,
    titleKey: "PROJECT_15_TITLE",
    descKey: "PROJECT_15_DESC",
    type: "Part",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/15-Shaft-Bubble-Absorber/Shaft-Bubble-Absorber.glb",
    parts: [],
    designs: ["/models/15-Shaft-Bubble-Absorber/Shaft-Bubble-Absorber.jpg"],
  },
  {
    id: 16,
    titleKey: "PROJECT_16_TITLE",
    descKey: "PROJECT_16_DESC",
    type: "Part",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/16-Shaft-Circulation-Fan-Line-1/Shaft-Circulation-Fan.glb",
    parts: [],
    designs: ["/models/16-Shaft-Circulation-Fan-Line-1/Shaft-Circulation-Fan.jpg"],
  },
  {
    id: 17,
    titleKey: "PROJECT_17_TITLE",
    descKey: "PROJECT_17_DESC",
    type: "Assembly",
    tech: [{ name: "Autodesk Inventor", icon: "/icons/inventor.png" }],
    modelUrl: "/models/17-Deep-Tube-Mc-HR/Assembly9.glb",
    parts: [
      {
        id: "p1",
        name: "Cover",
        modelUrl: "/models/17-Deep-Tube-Mc-HR/Part1.glb",
      },
      {
        id: "p2",
        name: "Ring",
        modelUrl: "/models/17-Deep-Tube-Mc-HR/Part2.glb",
      },
      {
        id: "p3",
        name: "Pipe",
        modelUrl: "/models/17-Deep-Tube-Mc-HR/pipe.glb",
      },
    ],
    designs: [],
  },
];

export const projectAssetUrls = Array.from(
  new Set(
    [
      "/",
      "/project-detail",
      "/certificates",
      "/MWA.png",
      "/MWA.svg",
      "/PP.JPG",
      "/icons/autocad.png",
      "/icons/grabcad.png",
      "/icons/inventor.png",
      "/icons/solidworks.png",
      "/icons/ChatGPT Image Nov 13, 2025, 10_26_46 PM.png",
      "/models/cube_and_balls.splinecode",
      "/models/skills_key_board.splinecode",
      ...projects.flatMap((project) => [
        project.modelUrl,
        ...project.designs,
        ...project.tech.map((item) => item.icon),
        ...project.parts.flatMap((part) => [part.modelUrl, part.designUrl].filter(Boolean) as string[]),
      ]),
    ].filter(Boolean)
  )
);
