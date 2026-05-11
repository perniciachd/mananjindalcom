import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0e27',
          backgroundImage: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Accent line */}
        <div
          style={{
            position: 'absolute',
            left: '80px',
            top: '80px',
            width: '4px',
            height: '470px',
            backgroundColor: '#f59e0b',
            opacity: 0.8,
          }}
        />
        
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            right: '150px',
            top: '150px',
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            backgroundColor: '#f59e0b',
            opacity: 0.1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '120px',
            top: '180px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#f59e0b',
            opacity: 0.15,
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#ffffff',
            fontFamily: 'Georgia, serif',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}
        >
          Responsible AI for
          <br />
          Modern Organizations
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#f59e0b',
            fontWeight: '500',
          }}
        >
          A 3-Day Training Program for Corporates · Government · Universities
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '16px',
            color: '#6b7280',
          }}
        >
          mananjindal.com/responsible-ai-training
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
