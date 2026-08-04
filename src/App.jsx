import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Nvidia from './components/Nvidia'
import Footer from './components/Footer'
import fightImg from './assets/fightcentral.jpeg'
import openkneoImg from './assets/openkneo.jpeg'
import openyawImg from './assets/openyaw.png'
import orthomedImg from './assets/orthomed.png'
import yawinputImg from './assets/yawinput.png'
import nvidiaImg from './assets/nvidia1.png'

const projects = [
  {
    title: 'OpenKneo',
    years: '2026 – present',
    description:
      'A privacy first AI chat built for business. LLMs run in the browser on your GPU via WebGPU, zero data leaves your device, with a switch to cloud models (DeepSeek, Groq, OpenCode), document analysis, web search, and an artifacts workspace.',
    tags: ['TypeScript', 'React', 'WebGPU', 'WebLLM'],
    links: [{ label: 'site', url: 'https://openkneo.com' }],
    media: { type: 'image', src: openkneoImg },
  },
  {
    title: 'Yawsens',
    years: '2023 – present',
    description:
      "Built for gamers. A gaming optimization platform with 390+ structured registry tweaks organized into stable, risk rated profiles. NVIDIA tweaks target the driver registry keys documented in NVIDIA's open kernel module registry header, applied through generated batch scripts with automatic registry backup. Includes Windows debloat, network tuning, power settings, and an AI chat with private local models and cloud AI, delivered through a full subscription and billing layer.",
    tags: ['TypeScript', 'React', 'Node.js', 'Registry'],
    links: [{ label: 'site', url: 'https://yawsens.com' }],
    media: [
      { type: 'image', src: openyawImg },
      { type: 'video', src: '/videos/democustomtweaks.mp4' },
      {
        type: 'video',
        src: '/videos/demounlimiteddownloadsandnvidiatweaks.mp4',
      },
    ],
  },
  {
    title: 'JOYBOY',
    years: '2026 – present',
    description:
      'A tool that emulates gyro so Nintendo Switch Joy Cons work as controllers on PC, built in C++ on HIDAPI with 200 Hz polling for low latency input.',
    tags: ['C++', 'HIDAPI', 'Low latency'],
    links: [{ label: 'code', url: 'https://github.com/kmoh-byte/Projects/tree/main/joyboy' }],
    media: { type: 'video', src: '/videos/joyboy.mp4' },
  },
  {
    title: 'YawInput',
    years: '2025 – present',
    description:
      'Professional esports input utility written in C++. Runs a zero overhead hot path with function pointer dispatch and cache line aligned data, benchmarks every CPU core to find the lowest latency one and locks to it at realtime priority under MMCSS. Uses raw input with a 512KB buffer for 8kHz mice, sub millisecond timer resolution, disables mouse acceleration for true 1:1 movement, and polls controllers at maximum rate with no artificial limits. Detects Intel, AMD, and X3D cache CPUs to tune core selection and avoids slow E cores.',
    tags: ['C++', 'Raw Input', 'Latency Optimizer'],
    links: [{ label: 'code', url: 'https://github.com/kmoh-byte/Projects/tree/main/yawinput' }],
    media: { type: 'image', src: yawinputImg },
  },
  {
    title: 'FightCentral',
    years: '2026',
    description:
      'A combat sports platform covering fighters, events, rankings, fight results, and news, built as a Tapology alternative in React and Node.js.',
    tags: ['React', 'Node.js', 'MMA', 'Express'],
    media: { type: 'image', src: fightImg },
    links: [{ label: 'site', url: 'https://fightcentral-p.up.railway.app/' }],
  },
  {
    title: 'Keenlys',
    years: '2023 – 2025',
    description:
      'A real time online tutoring platform built with the Daily SDK for video. Full stack with live video streaming, Stripe payments, and Google OAuth login.',
    tags: ['Socket.io', 'Node.js', 'MySQL', 'Daily SDK'],
    media: {
      type: 'video',
      src: 'https://keenlys.up.railway.app/videos/demo-Video.mp4',
    },
    links: [{ label: 'site', url: 'https://keenlys.com' }],
  },
  {
    title: 'Salty AI',
    years: '2026 – present',
    description:
      'A self hosted, local only multi agent AI platform for engineering intelligence. Runs Ollama and Docker with GPU acceleration, Qdrant memory pools, and MCP filesystem access across four specialized agents.',
    tags: ['Ollama', 'Docker', 'Qdrant', 'MCP'],
    media: {
      type: 'video',
      src: 'https://salty-ai-production.up.railway.app/0508(1).mp4',
    },
    links: [{ label: 'site', url: 'https://salty-ai-production.up.railway.app' }],
  },
  {
    title: 'OrthoMed',
    years: '2021',
    description:
      'Production firmware in C for a medical wearable vital signs monitor on the nRF52 series with the Nordic SDK. Implements a full BLE peripheral stack over the Nordic UART Service, including advertising, connection parameter negotiation, and GATT notifications. Integrates sensors over I2C and SPI using the MAX32664 bio sensor hub, MAX30208 temperature sensor, MAX20303 PMIC and battery charger, gyroscope, and an ECG front end, working directly from datasheet register maps. Adds NFC tag support and app timer driven RTC scheduling for low power periodic sampling, step through debugging on custom PCBs, and power delivery tuning to balance sensor cycling with the BLE radio duty cycle.',
    tags: ['C', 'nRF52', 'BLE', 'Sensors'],
    media: { type: 'image', src: orthomedImg },
  },
  {
    title: 'Content Creation',
    years: '2023 – present',
    description:
      'YouTube channel covering mouse and keyboard input optimization for competitive FPS, including config level input fixes and aim tuning for titles like Call of Duty.',
    tags: ['YouTube', 'Gaming', 'Software'],
    media: { type: 'iframe', src: 'https://www.youtube.com/embed/G3qHlNFjAEs' },
    links: [
      {
        label: 'youtube',
        url: 'https://www.youtube.com/watch?v=G3qHlNFjAEs&t=170s',
      },
    ],
  },
]

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects projects={projects} />
        <Nvidia image={nvidiaImg} />
      </main>
      <Footer />
    </>
  )
}
