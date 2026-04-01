import { useState } from 'react';
import { AlertCircle, ChevronRight } from 'lucide-react';

const SelfCheck: React.FC = () => {
  const [checkedCount, setCheckedCount] = useState(0);
  const items = [
    "양말을 서서 신을 때 배 때문에 숨이 턱 막힌다.",
    "바지 허리는 맞는데, 앉으면 셔츠 밑단 단추 사이가 벌어진다.",
    "샤워하기 전 거울을 보면 가슴보다 배가 더 튀어나와 있다.",
    "예전에 입던 정장 바지를 입으면 지퍼가 끝까지 안 올라간다.",
    "밥을 먹고 나면 졸음이 쏟아져 업무에 지장이 있다.",
    "계단을 한 층만 올라도 숨이 차고 무릎이 뻐근하다."
  ];

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setCheckedCount(prev => prev + 1);
    else setCheckedCount(prev => prev - 1);
  };

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container" style={{ maxWidth: '700px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>혹시 당신도 <span className="text-red">'ET형 체형'</span>입니까?</h2>
          <p className="text-gray">아래 항목 중 본인에게 해당되는 것을 체크해 보십시오.</p>
        </div>

        <div style={{ 
          backgroundColor: 'var(--primary)', 
          padding: '2.5rem', 
          borderRadius: '2rem',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {items.map((item, i) => (
              <label key={i} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                cursor: 'pointer',
                padding: '1rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(255,255,255,0.02)',
                transition: 'background 0.2s'
              }}>
                <input 
                  type="checkbox" 
                  onChange={handleCheck}
                  style={{ 
                    width: '24px', 
                    height: '24px', 
                    accentColor: 'var(--accent-red)',
                    cursor: 'pointer' 
                  }} 
                />
                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{item}</span>
              </label>
            ))}
          </div>

          {checkedCount >= 3 && (
            <div style={{ 
              marginTop: '2.5rem', 
              padding: '1.5rem', 
              backgroundColor: 'rgba(239, 68, 68, 0.1)', 
              borderRadius: '1rem',
              border: '1px solid var(--accent-red)',
              textAlign: 'center',
              animation: 'shake 0.5s ease-in-out'
            }}>
              <p style={{ color: 'var(--accent-red)', fontWeight: 800, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <AlertCircle size={24} /> 경고: 내장지방 고위험군입니다
              </p>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-white)', fontSize: '0.95rem' }}>
                단순한 노화가 아닌, 대사증후군의 전조증상입니다. 즉각적인 조치가 필요합니다.
              </p>
            </div>
          )}

          <button 
            onClick={scrollToCalculator}
            style={{ 
              width: '100%', 
              marginTop: '2rem',
              backgroundColor: checkedCount >= 3 ? 'var(--accent-red)' : 'var(--accent-orange)',
              color: 'white',
              padding: '1.25rem',
              borderRadius: '1rem',
              fontSize: '1.2rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s'
            }}
          >
            내 몸 상태 더 자세히 진단하기 <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </section>
  );
};

export default SelfCheck;
