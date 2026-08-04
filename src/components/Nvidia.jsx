import Reveal from "./Reveal";

export default function Nvidia({ image }) {
  return (
    <section className="section nvidia" id="nvidia">
      <Reveal>
        <div className="section__head">
          <span className="section__num">02</span>
          <h2 className="section__title">NVIDIA SDK to registry tweaks</h2>
        </div>
      </Reveal>

      <div className="nvidia__grid">
        <div className="nvidia__text">
          <p>
            The NVIDIA tweaks in Yawsens didn't come from guesswork. They came
            from reading NVIDIA's open GPU kernel module source, specifically
            nvrm_registry.h, which documents the driver's internal registry
            keys and what each one controls.
          </p>
          <p>
            Applied on Windows those keys raise frames per second and cut input
            latency. Disabling the driver's power management locks the GPU at
            boost clocks, so frame times stop dipping and both average FPS and
            1% lows go up. Turning off extra render ahead queues frames less
            early, so the delay between click and pixel drops. Removing unused
            power savings strips the per frame overhead the driver otherwise
            pays on top of your game.
          </p>
          <p>
            I translated those keys into structured, risk rated tweak profiles
            that run on users' PCs as generated batch scripts using the Win32
            reg command, with an automatic backup of the NVIDIA registry before
            anything is applied. The tools marketed below cover Windows gaming
            tweaks, NVIDIA tweaks, and network tweaks.
          </p>
          <div className="nvidia__links">
            <a
              href="https://github.com/NVIDIA/open-gpu-kernel-modules/blob/main/src/nvidia/interface/nvrm_registry.h"
              target="_blank"
              rel="noreferrer"
            >
              NVIDIA registry header ↗
            </a>
            <a
              href="https://learn.microsoft.com/en-us/windows/win32/sysinfo/registry-functions"
              target="_blank"
              rel="noreferrer"
            >
              Win32 registry API ↗
            </a>
          </div>
        </div>

        <div className="nvidia__media">
          <img src={image} alt="Windows gaming tweaks, NVIDIA tweaks, and network tweaks" />
        </div>
      </div>
    </section>
  );
}
