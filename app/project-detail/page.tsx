"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ModelCard } from "../components/ModelCard";
import { ModelDetailModal } from "../components/ModelDetailModal";
import { motion } from "framer-motion";

interface Part {
  id: string;
  name: string;
  modelUrl: string;
  designUrl: string;
}

interface Tech {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  tech: Tech[];
  modelUrl: string;
  parts: Part[];
  designs: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Hoshing Bearing Nip Roll",
    description: "",
    type: "Assembly",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/01-Cover-Nipe-Roll/Assembly7.glb",
    parts: [
      {
        id: "p1",
        name: "Cover Niple Roll",
        modelUrl: "/models/01-Cover-Nipe-Roll/Cover-Niple-Roll.glb",
        designUrl: "",
      },
      {
        id: "p2",
        name: "bagian Atas",
        modelUrl: "/models/01-Cover-Nipe-Roll/atas.glb",
        designUrl: "",
      },
      {
        id: "p3",
        name: "Baut M14",
        modelUrl: "/models/01-Cover-Nipe-Roll/M14.glb",
        designUrl: "",
      },
      {
        id: "p4",
        name: "Baut M8",
        modelUrl: "/models/01-Cover-Nipe-Roll/M8.glb",
        designUrl: "",
      },
    ],
    designs: ["/models/01-Cover-Nipe-Roll/Assembly.jpg", "/models/01-Cover-Nipe-Roll/Assembly2.jpg", "/models/01-Cover-Nipe-Roll/Cover-Niple-Roll.jpg", "/models/01-Cover-Nipe-Roll/cover-hoshing-bearing-nip-roll.jpg"],
  },
  {
    id: 2,
    title: "Speed Roll",
    description: "",
    type: "Assembly",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/02-Speed-Roll/Assembly15.glb",
    parts: [
      {
        id: "p1",
        name: "Speed Roll",
        modelUrl: "/models/02-Speed-Roll/Speed Roll.glb",
        designUrl: "",
      },
      {
        id: "p2",
        name: "Sirip Speed Roll 1",
        modelUrl: "/models/02-Speed-Roll/sirip1.glb",
        designUrl: "",
      },
      {
        id: "p3",
        name: "Sirip Speed Roll 2",
        modelUrl: "/models/02-Speed-Roll/sirip2.glb",
        designUrl: "",
      },
    ],
    designs: ["/models/02-Speed-Roll/speedroll.jpg", "/models/02-Speed-Roll/speedroll2.jpg"],
  },
  {
    id: 3,
    title: "Chain Plate",
    description: "",
    type: "Assembly",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/03-Chain-Plate/Assembly1.glb",
    parts: [
      {
        id: "p1",
        name: "Link Plate",
        modelUrl: "/models/03-Chain-Plate/Part1.glb",
        designUrl: "",
      },
      {
        id: "p2",
        name: "Link Plate Bushing",
        modelUrl: "/models/03-Chain-Plate/Part6.glb",
        designUrl: "",
      },
      {
        id: "p3",
        name: "Outer Link Plate",
        modelUrl: "/models/03-Chain-Plate/Part2.glb",
        designUrl: "",
      },
      {
        id: "p4",
        name: "Inner Link Plate",
        modelUrl: "/models/03-Chain-Plate/Part3.glb",
        designUrl: "",
      },
      {
        id: "p5",
        name: "Bushing",
        modelUrl: "/models/03-Chain-Plate/Part4.glb",
        designUrl: "",
      },
      {
        id: "p6",
        name: "Chain Pins",
        modelUrl: "/models/03-Chain-Plate/Part5.glb",
        designUrl: "",
      },
      {
        id: "p7",
        name: "Roller",
        modelUrl: "/models/03-Chain-Plate/roll.glb",
        designUrl: "",
      },
    ],
    designs: ["/models/03-Chain-Plate/link-plate.jpg", "/models/03-Chain-Plate/link-plate-bushing.jpg", "/models/03-Chain-Plate/outer-link.jpg", "/models/03-Chain-Plate/inner-link.jpg", "/models/03-Chain-Plate/bushing.jpg", "/models/03-Chain-Plate/chain-pins.jpg", "/models/03-Chain-Plate/roller.jpg"],
  },
  {
    id: 4,
    title: "Cooler Chain Plate",
    description: "",
    type: "Part",
    tech: [
      { name: "Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/04-Chain-Plate-Line-4/CHAIN PLATE LINE 4.glb",
    parts: [
    ],
    designs: ["/models/04-Chain-Plate-Line-4/CHAIN-PLATE-LINE-4.jpg"],
  },
  {
    id: 5,
    title: "Bracket Guide Roll Transport",
    description: "",
    type: "Part",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/05Bracket-Guide-Roll-Transport/Bracket-Guide-Roll.glb",
    parts: [
    ],
    designs: ["/models/05Bracket-Guide-Roll-Transport/Bracket-Guide-Roll.jpg"],
  },
  {
    id: 6,
    title: "Socket Head Cap Screws Bolt",
    description: "",
    type: "Assembly",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/06-Baut-L-diameter-56/Assembly1.glb",
    parts: [
      {
        id: "p1",
        name: "Socket Head Cap Screws Bolt",
        modelUrl: "/models/06-Baut-L-diameter-56/SOCKET-HEAD-CAP-SCREWS-DIAMETER-56.glb",
        designUrl: "",
      },
      {
        id: "p2",
        name: "Ring Socket Head Cap Screws Bolt",
        modelUrl: "/models/06-Baut-L-diameter-56/ring.glb",
        designUrl: "",
      },
    ],
    designs: ["/models/06-Baut-L-diameter-56/SOCKET-HEAD-CAP-SCREWS-DIAMETER-56.jpg"],
  },
  {
    id: 7,
    title: "Nipple Rotary Join Crymper",
    description: "",
    type: "Part",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/07-Nipple-Rotary-join-crimper-line-4/Nipple-Rotary-join-crimper-line-4.glb",
    parts: [
    ],
    designs: ["/models/07-Nipple-Rotary-join-crimper-line-4/Nipple-Rotary-join-crimper-line-4.jpg"],
  },
  {
    id: 8,
    title: "Colar vtube calender side front",
    description: "",
    type: "Part",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/08-Colar-vtube-calender-side-front/Colar-vtube-calender-side-front.glb",
    parts: [
    ],
    designs: ["/models/08-Colar-vtube-calender-side-front/Colar-vtube-calender-side-front.jpg"],
  },
  {
    id: 9,
    title: "Colar vtube calender side front",
    description: "",
    type: "Part",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/09-Stud-bolt-rotary-joint-calender/Stud-Bolt-Rotary-Joint-Calender.glb",
    parts: [
    ],
    designs: ["/models/09-Stud-bolt-rotary-joint-calender/Stud-Bolt-Rotary-Joint-Calender.jpg"],
  },
  {
    id: 10,
    title: "Flange Outlet Tube Calender",
    description: "",
    type: "Part",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/10-Flange-Outlet-Tube-Calender/Flange-Outlet-Tube-Calender.glb",
    parts: [
    ],
    designs: ["/models/10-Flange-Outlet-Tube-Calender/Flange-Outlet-Tube-Calender.jpg"],
  },
  {
    id: 11,
    title: "Side Pump",
    description: "",
    type: "Assembly",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/11-Side-Pump/Assembly13.glb",
    parts: [
      {
        id: "p1",
        name: "Side Pump Left",
        modelUrl: "/models/11-Side-Pump/Side-Pump-1.glb",
        designUrl: "",
      },
      {
        id: "p2",
        name: "Rubber",
        modelUrl: "/models/11-Side-Pump/rubber.glb",
        designUrl: "",
      },
      {
        id: "p3",
        name: "Side Pump Right",
        modelUrl: "/models/11-Side-Pump/Side-Pump-2.glb",
        designUrl: "",
      },
    ],
    designs: ["/models/11-Side-Pump/Side-Pump-1.jpg", "/models/11-Side-Pump/Side-Pump-2.jpg"],
  },
  {
    id: 12,
    title: "Shaft Nipe Roll DS2",
    description: "",
    type: "Part",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/12-Shaft-Nipe-Roll-DS2/Shaft-Nipe-Roll-DS2.glb",
    parts: [
    ],
    designs: ["/models/12-Shaft-Nipe-Roll-DS2/Shaft-Nipe-Roll-DS2.jpg"],
  },
  {
    id: 13,
    title: "Shaft Centrifugal Pump HSB 040025",
    description: "",
    type: "Part",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/13-Shaft-Centrifugal-pump-HSB-040025/Shaft-Centrifugal-pump-HSB-040025.glb",
    parts: [
    ],
    designs: ["/models/13-Shaft-Centrifugal-pump-HSB-040025/Shaft-Centrifugal-pump-HSB-040025.jpg"],
  },
  {
    id: 14,
    title: "Shaft Free Roll",
    description: "",
    type: "Part",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/14-Shaft-Free-Roll/Shaft-Free-Roll.glb",
    parts: [
    ],
    designs: ["/models/14-Shaft-Free-Roll/Shaft-Free-Roll-1.jpg", "/models/14-Shaft-Free-Roll/Shaft-Free-Roll-2.jpg"],
  },
  {
    id: 15,
    title: "Shaft Bubble Absorber",
    description: "",
    type: "Part",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/15-Shaft-Bubble-Absorber/Shaft-Bubble-Absorber.glb",
    parts: [
    ],
    designs: ["/models/15-Shaft-Bubble-Absorber/Shaft-Bubble-Absorber.jpg"],
  },
  {
    id: 16,
    title: "Shaft Circulation Fan",
    description: "",
    type: "Part",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/16-Shaft-Circulation-Fan-Line-1/Shaft-Circulation-Fan.glb",
    parts: [
    ],
    designs: ["/models/16-Shaft-Circulation-Fan-Line-1/Shaft-Circulation-Fan.jpg"],
  },
  {
    id: 17,
    title: "Deep Tube Mc",
    description: "",
    type: "Assembly",
    tech: [
      { name: "Autodesk Inventor", icon: "/icons/inventor.png" }
    ],
    modelUrl: "/models/17-Deep-Tube-Mc-HR/Assembly9.glb",
    parts: [
      {
        id: "p1",
        name: "Cover",
        modelUrl: "/models/17-Deep-Tube-Mc-HR/Part1.glb",
        designUrl: "",
      },
      {
        id: "p2",
        name: "Ring",
        modelUrl: "/models/17-Deep-Tube-Mc-HR/Part2.glb",
        designUrl: "",
      },
      {
        id: "p3",
        name: "Pipe",
        modelUrl: "/models/17-Deep-Tube-Mc-HR/pipe.glb",
        designUrl: "",
      },
    ],
    designs: [],
  },
];

export default function ProjectDetails() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 bg-black text-white min-h-screen">
      <Navbar />
      <Contact />
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-semibold text-center mb-16">All Projects</h1>

        <motion.div
         className="grid grid-cols-1 md:grid-cols-2 gap-10"
         initial="hidden"
         animate="visible"
         variants={{
           visible: { transition: { staggerChildren: 0.15 } }
         }}
        >
         {projects.map((project) => (
           <ModelCard
             key={project.id}
             title={project.title}
             description={project.description}
             tech={project.tech}
             modelUrl={project.modelUrl}
             onClick={() => setSelectedProject(project)}
           />
         ))}
        </motion.div>
      </div>

      {selectedProject && (
        <ModelDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Footer />
    </section>
  );
}