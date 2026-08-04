import { useEffect, useState } from "react";
import Reveal from "./Reveal";

function FsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function Media({ media, title, onFs }) {
  let inner;
  if (media.type === "iframe") {
    inner = (
      <iframe
        className="index__media index__iframe"
        src={media.src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  } else if (media.type === "video") {
    inner = (
      <div className="index__video">
        <video
          className="index__media"
          src={media.src}
          muted
          loop
          playsInline
          controls
          preload="metadata"
          onPlay={(e) => e.currentTarget.parentElement.classList.add("is-playing")}
          onPause={(e) =>
            e.currentTarget.parentElement.classList.remove("is-playing")
          }
        />
        <button
          className="index__play"
          aria-label={`Play ${title} video`}
          onClick={(e) => {
            const v = e.currentTarget.parentElement.querySelector("video");
            if (v.paused) {
              v.play();
            } else {
              v.pause();
            }
          }}
        >
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    );
  } else {
    inner = <img className="index__media" src={media.src} alt={title} />;
  }

  return (
    <div className="index__media-wrap">
      {inner}
      <button
        className="index__fs"
        onClick={() => onFs(media, title)}
        aria-label={`Open ${title} fullscreen`}
      >
        <FsIcon />
      </button>
    </div>
  );
}

function Lightbox({ media, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  let inner;
  if (media.type === "iframe") {
    inner = (
      <iframe
        className="lightbox__video"
        src={media.src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  } else if (media.type === "video") {
    inner = (
      <video
        className="lightbox__video"
        src={media.src}
        controls
        autoPlay
        playsInline
      />
    );
  } else {
    inner = <img className="lightbox__img" src={media.src} alt={title} />;
  }

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-label={`${title} fullscreen`}
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="lightbox__media" onClick={(e) => e.stopPropagation()}>
        {inner}
      </div>
    </div>
  );
}

function Links({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="index__links">
      {links.map((l) => (
        <a
          key={l.label || l.url}
          className="index__link"
          href={l.url}
          target="_blank"
          rel="noreferrer"
        >
          {l.label || l.url.replace(/^https?:\/\/(www\.)?/, "")} ↗
        </a>
      ))}
    </div>
  );
}

export default function Projects({ projects }) {
  const [fs, setFs] = useState(null);
  return (
    <>
      <section className="section" id="projects">
        <Reveal>
          <div className="section__head">
            <h2 className="section__title">Projects</h2>
          </div>
        </Reveal>

        <ol className="index">
          {projects.map((p, i) => {
            const media = Array.isArray(p.media) ? p.media : p.media ? [p.media] : [];
            return (
              <Reveal key={p.title} delay={i * 60}>
                <li className="index__row">
                  <div className="index__top">
                    <span className="index__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="index__name">
                      <h2 className="index__title">{p.title}</h2>
                      {p.years && (
                        <span className="index__years">{p.years}</span>
                      )}
                    </div>
                    <p className="index__desc">{p.description}</p>
                    <div className="index__tags">
                      {p.tags.map((t) => (
                        <span className="index__tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <Links links={p.links} />
                  </div>

                  {media.length > 0 && (
                    <div className="index__media-box">
                      {media.map((m, idx) => (
                        <Media key={idx} media={m} title={p.title} onFs={setFs} />
                      ))}
                    </div>
                  )}
                </li>
              </Reveal>
            );
          })}
        </ol>
      </section>
      {fs && <Lightbox media={fs.media} title={fs.title} onClose={() => setFs(null)} />}
    </>
  );
}
