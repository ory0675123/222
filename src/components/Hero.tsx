import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--primary) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--accent-orange)', 
          fontWeight: 600, 
          marginBottom: '1rem',
          letterSpacing: '0.1rem'
        }}>
          4050 중년 남성 전용 체형 교정 프로그램
        </p>
        <h1 style={{ marginBottom: '2rem' }}>
          바지 사이즈는 그대로인데,<br />
          <span className="text-red">허리띠 구멍만 늘어나고</span> 있지 않습니까?
        </h1>
        
        {/* Simplified ET Silhouette with CSS */}
        <div style={{ 
          width: '200px', 
          height: '240px', 
          margin: '0 auto 3rem', 
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            background: 'var(--text-gray)', 
            borderRadius: '50%',
            position: 'absolute',
            top: '0'
          }}></div>
          <div style={{ 
            width: '80px', 
            height: '140px', 
            background: 'var(--text-gray)', 
            borderRadius: '40px / 80px',
            position: 'absolute',
            top: '50px',
            opacity: 0.5
          }}></div>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            background: 'var(--accent-red)', 
            borderRadius: '50%',
            position: 'absolute',
            top: '80px',
            boxShadow: '0 0 40px rgba(239, 68, 68, 0.4)'
          }}></div>
          <p style={{ 
            position: 'absolute', 
            bottom: '0', 
            fontSize: '0.875rem', 
            color: 'var(--text-gray)' 
          }}>
            [내장지방 경고: ET형 체형]
          </p>
        </div>

        <p style={{ 
          fontSize: '1.25rem', 
          marginBottom: '3rem', 
          color: 'var(--text-gray)',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          당신의 '나잇살'은 단순한 살이 아닙니다.<br />
          중년 건강을 위협하는 <b>내장지방</b>의 신호입니다.
        </p>

        <button 
          onClick={scrollToCalculator}
          style={{ 
            backgroundColor: 'var(--accent-orange)',
            color: 'white',
            padding: '1.25rem 2.5rem',
            fontSize: '1.25rem',
            fontWeight: 700,
            borderRadius: '100px',
            boxShadow: '0 10px 30px rgba(249, 115, 22, 0.3)',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          내 체형 진단하기
        </button>
      </div>
      
      <div style={{ position: 'absolute', bottom: '2rem', animation: 'bounce 2s infinite' }}>
        <ChevronDown size={32} color="var(--text-gray)" />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
      `}</style>
    </section>
  );
};

export default Hero;
