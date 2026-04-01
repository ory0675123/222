import { AlertCircle, FileText, Activity, TrendingUp, ShieldAlert } from 'lucide-react';

const ScienceReport: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        {/* Authority Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            backgroundColor: 'rgba(59, 130, 246, 0.1)', 
            padding: '0.5rem 1rem', 
            borderRadius: '100px', 
            marginBottom: '1rem' 
          }}>
            <TrendingUp size={18} style={{ color: '#3B82F6' }} />
            <span style={{ color: '#3B82F6', fontWeight: 600, fontSize: '0.875rem' }}>최신 생리학 데이터 기반</span>
          </div>
          <h2>내장지방이 당신의 수명을 갉아먹고 있습니다</h2>
          <p className="text-gray">단순히 보기 안 좋은 살이 아닙니다. 이것은 '생존'의 문제입니다.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          {/* Visual: Visceral Fat Illustration Placeholder */}
          <div style={{ 
            backgroundColor: 'var(--secondary)', 
            padding: '2rem', 
            borderRadius: '2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--accent-red)', fontWeight: 700, marginBottom: '1rem' }}>[내장지방 3D 시뮬레이션]</p>
            <div style={{ 
              width: '200px', 
              height: '200px', 
              margin: '0 auto', 
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* Simplified Organ & Fat Visualization using CSS */}
              <div style={{ width: '100px', height: '140px', backgroundColor: '#e2e8f0', borderRadius: '40px', opacity: 0.3 }}></div>
              <div style={{ 
                position: 'absolute', 
                width: '160px', 
                height: '100px', 
                backgroundColor: 'rgba(234, 179, 8, 0.6)', 
                borderRadius: '50%',
                filter: 'blur(10px)',
                boxShadow: '0 0 30px rgba(234, 179, 8, 0.8)'
              }}></div>
              <p style={{ position: 'absolute', bottom: '10%', fontSize: '0.75rem', color: 'var(--text-gray)' }}>정상 장기 대비 내장지방 300% 과다</p>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', fontWeight: 600 }}>
              "팔다리는 가늘고 배만 나온 체형은<br />
              지방간, 당뇨의 강력한 전조증상입니다."
            </p>
          </div>

          {/* Cost of Inaction */}
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', padding: '2rem', borderRadius: '1.5rem', borderLeft: '4px solid var(--accent-red)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <ShieldAlert className="text-red" size={24} />
                <h3 style={{ marginBottom: 0, fontSize: '1.25rem' }}>방치의 비용 (The Cost of Inaction)</h3>
              </div>
              <p className="text-gray" style={{ lineHeight: 1.7 }}>
                지금 벨트 구멍을 줄이지 않으면 <b>5년 뒤 병원비로 수천만 원</b>을 쓰게 될 수 있습니다. 
                내장지방은 혈관을 따라 전신 세포를 공격하는 '침묵의 살인자'입니다.
              </p>
            </div>
            
            <div style={{ backgroundColor: 'var(--primary)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ color: 'var(--text-white)', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={18} className="text-orange" /> 전문가의 경고
              </p>
              <blockquote style={{ fontStyle: 'italic', borderLeft: '2px solid var(--text-gray)', paddingLeft: '1rem', color: 'var(--text-gray)', fontSize: '0.9rem' }}>
                "중년 남성의 복부 비만은 단순한 외모 문제가 아닌, 대사 호르몬 체계가 붕괴되었다는 신호입니다. 
                인슐린 리셋이 선행되지 않은 운동은 오히려 심장에 독이 될 수 있습니다."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceReport;
