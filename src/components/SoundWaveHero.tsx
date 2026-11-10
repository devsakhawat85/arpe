import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

interface SoundWaveProps {
  interactive?: boolean;
  className?: string;
}

export const SoundWaveHero: React.FC<SoundWaveProps> = ({ interactive = true, className = '' }) => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [activeHarmonic, setActiveHarmonic] = useState<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play an authentic warm, gentle acoustic arpeggio chord using Web Audio API
  const playArpeggioChord = (noteIndex?: number) => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;

      // C-Major warm therapeutic arpeggio frequencies (C4, E4, G4, C5)
      const frequencies = [261.63, 329.63, 392.00, 523.25];
      const notesToPlay = noteIndex !== undefined ? [frequencies[noteIndex % frequencies.length]] : frequencies;

      notesToPlay.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Soft, organic sine wave with rich overtones
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.12);

        // Soft envelope: slow gentle attack, long warm decay
        const startTime = now + (noteIndex !== undefined ? 0 : i * 0.15);
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.08, startTime + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 1.8);
      });

      setIsPlayingSound(true);
      setTimeout(() => setIsPlayingSound(false), 1800);
    } catch {
      // AudioContext not permitted or supported; silent fallback
    }
  };

  const handleNoteClick = (idx: number) => {
    setActiveHarmonic(idx);
    playArpeggioChord(idx);
    setTimeout(() => setActiveHarmonic(null), 1200);
  };

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#F5F3F9] via-[#FAF9FC] to-[#FCFCFD] border border-[#E8E5F0] p-6 lg:p-8 ${className}`}>
      {/* Top Header bar inside interactive frame */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5E4E8C]">
          <span className="w-2 h-2 rounded-full bg-[#5E4E8C]/60" />
          <span>Acoustic Harmonics · Arpeggio Waveform</span>
        </div>

        {interactive && (
          <button
            type="button"
            onClick={() => playArpeggioChord()}
            aria-label={isPlayingSound ? 'Playing acoustic chord' : 'Play acoustic arpeggio tone'}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-[#5E4E8C] bg-white border border-[#E8E5F0] hover:bg-[#F5F3F9] hover:border-[#5E4E8C]/30 transition-all shadow-sm active:scale-95"
          >
            {isPlayingSound ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#4E9A68]" />
                <span className="whitespace-nowrap">Resonating...</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#5E4E8C]" />
                <span className="whitespace-nowrap">Listen to Arpeggio</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* SVG Waveform Graphic representation of an Arpeggio */}
      <div className="relative h-28 sm:h-36 w-full flex items-center justify-center">
        <svg
          viewBox="0 0 800 160"
          className="w-full h-full preserve-3d overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradPurple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5E4E8C" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#5E4E8C" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#746DA5" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="waveGradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2E8CB8" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#51B8E8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#2E8CB8" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="waveGradGreen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4E9A68" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#66BA82" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#4E9A68" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Root Note Wave (Green #66BA82) */}
          <path
            d="M0,80 Q100,20 200,80 T400,80 T600,80 T800,80"
            stroke="url(#waveGradGreen)"
            strokeWidth={activeHarmonic === 0 ? '4' : '2'}
            strokeLinecap="round"
            className="transition-all duration-300"
          />

          {/* Third Note Wave (Blue #51B8E8) */}
          <path
            d="M0,80 Q100,120 200,80 T400,80 T600,80 T800,80"
            stroke="url(#waveGradBlue)"
            strokeWidth={activeHarmonic === 1 ? '4' : '2'}
            strokeLinecap="round"
            strokeDasharray="4 4"
            className="transition-all duration-300"
          />

          {/* Fifth Note Wave (Purple #746DA5) */}
          <path
            d="M0,80 C150,15 250,145 400,80 C550,15 650,145 800,80"
            stroke="url(#waveGradPurple)"
            strokeWidth={activeHarmonic === 2 ? '4' : '2.5'}
            strokeLinecap="round"
            className="transition-all duration-300"
          />

          {/* Four Interactive Harmonic Nodes (Root, Third, Fifth, Octave) */}
          {[
            { cx: 160, cy: 55, label: 'Root (C)', color: '#4E9A68', idx: 0 },
            { cx: 320, cy: 98, label: 'Third (E)', color: '#2E8CB8', idx: 1 },
            { cx: 480, cy: 45, label: 'Fifth (G)', color: '#5E4E8C', idx: 2 },
            { cx: 640, cy: 80, label: 'Octave (C)', color: '#746DA5', idx: 3 },
          ].map((node) => (
            <g
              key={node.idx}
              className="cursor-pointer group"
              onClick={() => handleNoteClick(node.idx)}
            >
              <circle
                cx={node.cx}
                cy={node.cy}
                r={activeHarmonic === node.idx ? 12 : 7}
                fill="#FFFFFF"
                stroke={node.color}
                strokeWidth="3"
                className="transition-all duration-200 group-hover:scale-125"
              />
              <circle
                cx={node.cx}
                cy={node.cy}
                r="3"
                fill={node.color}
              />
              <text
                x={node.cx}
                y={node.cy + (node.cy > 70 ? 22 : -16)}
                textAnchor="middle"
                className="text-[11px] font-medium fill-[#1E1B2E] select-none pointer-events-none group-hover:font-bold transition-all"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Subtext description */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
        <p className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#5E4E8C]" />
          <span>Click any note node above to hear its calming resonance</span>
        </p>
        <span className="font-mono text-[11px] text-[#64748B]/80">432Hz Harmonic Frequency Balance</span>
      </div>
    </div>
  );
};
