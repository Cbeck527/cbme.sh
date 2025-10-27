export interface MeshNode {
  name: string;
  shortName: string;
  description?: string;
  nodeType: string;
  monitored: boolean;
  model: string;
  modelLink?: string;
  publicKey: string;
  firmwareVersion: string;
  position: string | { lat: number; lng: number };
}

export const nodes: MeshNode[] = [
  {
    name: "cbme.sh-01",
    shortName: "CB01",
    description: "Old City roof node",
    nodeType: "Client Base",
    monitored: false,
    model: "PeakMesh Magnet Climber Solar (RAK WisBlock 4631)",
    modelLink: "https://www.etsy.com/shop/PeakMesh",
    publicKey: "TBD",
    firmwareVersion: "2.7.11.ee68575 (alpha)",
    position: "Old City, Philadelphia",
  },
  {
    name: "cbme.sh-02",
    shortName: "CB02",
    description: "Long-range EDC node",
    nodeType: "Client",
    monitored: true,
    model: "Muzi.works H2T (Heltec Mesh Node T114)",
    modelLink:
      "https://muzi.works/products/h2t-complete-device-heltec-t114-with-gps-running-meshtastic",
    publicKey: "TBD",
    firmwareVersion: "2.7.11.ee68575 (alpha)",
    position: "Old City, Philadelphia",
  },
  {
    name: "cbme.sh-03",
    shortName: "CB03",
    description: "EDC mobile node",
    nodeType: "Client Mute",
    monitored: true,
    model: "SenseCAP Card Tracker T1000-E",
    modelLink:
      "https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html",
    publicKey: "TBD",
    firmwareVersion: "2.6.11",
    position: "Mobile",
  },
  {
    name: "cbme.sh-04",
    shortName: "CB04",
    description: "Always-on indoor apartment node",
    nodeType: "Client Mute",
    monitored: true,
    model: "Heltec Wireless Paper",
    modelLink: "https://heltec.org/project/wireless-paper/",
    publicKey: "TBD",
    firmwareVersion: "2.7.11.ee68575 (alpha)",
    position: "Old City, Philadelphia",
  },
];
