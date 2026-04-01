import { BookOpen, CheckCircle, Download } from 'lucide-react';

const GuidePreview: React.FC = () => {
  const contents = [
    "회식 자리에서도 뱃살 찌지 않는 안주 생존 비법",
    "운동 없이도 내장지방 태우는 인슐린 조절 레시피",
    "바쁜 아침, 5분 만에 끝내는 직장인 맞춤 루틴",
    "실제 ET 탈출 성공자들의 7일간의 식단표 공개",
    "집에서도 무릎 안 아프게 할 수 있는 하체 강화법"
  ];

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Guidebook Image/Mockup */}
          <div style={{ 
            position: 'relative', 
            padding: '2rem', 
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '100%', 
              maxWidth: '300px', 
              height: '420px', 
              backgroundColor: 'var(--primary)', 
              borderRadius: '0.5rem 1.5rem 1.5rem 0.5rem',
              margin: '0 auto',
              boxShadow: '20px 20px 60px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid var(--accent-orange)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '10%', left: '10%', opacity: 0.1 }}>
                <BookOpen size={150} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>E.T. ESCAPE</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, padding: '0 1.5rem' }}>
                4050 직장인<br />
                내장지방 탈출<br />
                실전 비법서
              </p>
              <div style={{ 
                marginTop: '2rem', 
                backgroundColor: 'var(--accent-red)', 
                color: 'white', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '0.25rem',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>
                [100% 무료 배포 중]
              </div>
            </div>
            
            {/* Decoration Bubble */}
            <div style={{ 
              position: 'absolute', 
              top: '0', 
              right: '10%', 
              backgroundColor: 'var(--accent-orange)', 
              color: 'white', 
              padding: '1rem', 
              borderRadius: '50%', 
              fontWeight: 800,
              boxShadow: '0 10px 20px rgba(249, 115, 22, 0.3)',
              transform: 'rotate(15deg)',
              animation: 'wiggle 2s infinite'
            }}>
              무료
            </div>
          </div>

          {/* Guidebook Content List */}
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>이 모든 노하우를<br /><span className="text-orange">지금 무료로 드립니다</span></h2>
            <p className="text-gray" style={{ marginBottom: '2.5rem', fontSize: '1.125rem' }}>
              더 이상 시행착오를 겪지 마십시오.<br />
              검증된 방법만이 당신의 시간을 아껴줍니다.
            </p>
            
            <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '3rem' }}>
              {contents.map((text, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle size={20} className="text-orange" />
                  <p style={{ fontSize: '1.05rem', fontWeight: 500 }}>{text}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={scrollToCTA}
              style={{ 
                backgroundColor: 'var(--text-white)',
                color: 'var(--primary)',
                padding: '1.25rem 2rem',
                fontSize: '1.125rem',
                fontWeight: 700,
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-orange)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-white)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
            >
              <Download size={20} /> 가이드북 무료 다운로드
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(15deg) scale(1); }
          50% { transform: rotate(10deg) scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default GuidePreview;
