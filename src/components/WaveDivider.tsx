interface WaveDividerProps {
  flip?: boolean
}

const WaveDivider = ({ flip = false }: WaveDividerProps) => {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        className="h-16 w-full"
        preserveAspectRatio="none"
        role="presentation"
      >
        <path
          d="M0,64L80,64C160,64,320,64,480,53.3C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          fill="rgba(92, 198, 255, 0.15)"
        />
      </svg>
    </div>
  )
}

export default WaveDivider
