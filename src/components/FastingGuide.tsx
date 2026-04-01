import { Clock, CheckCircle2, XCircle, Info } from 'lucide-react';

const FastingGuide: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>간헐적 단식 (16:8) 완전 정복 가이드</h2>
          <p className="text-gray">중년 남성 뱃살의 원인인 '인슐린 저항성'을 깨부수는 가장 확실한 방법입니다.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Main Logic */}
          <div style={{ 
            backgroundColor: 'var(--secondary)', 
            padding: '3rem', 
            borderRadius: '2rem', 
            textAlign: 'center',
            border: '2px solid var(--accent-orange)'
          }}>
            <Clock size={64} className="text-orange" style={{ marginBottom: '1.5rem', margin: '0 auto 1.5rem' }} />
            <h3 style={{ color: 'var(--accent-orange)', fontSize: '2rem', marginBottom: '1.5rem' }}>16시간 공복 / 8시간 식사</h3>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              <b>추천 시간표:</b><br />
              낮 12:00 첫 끼 <span className="text-orange">~</span> 저녁 8:00 식사 마감
            </p>
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.03)', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              textAlign: 'left',
              fontSize: '0.9rem'
            }}>
              <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🔥 기대 효과</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>• 인슐린 수치 안정화 (지방 연소 모드)</li>
                <li>• 대사 효율 증대 및 활력 회복</li>
                <li>• 몸 안의 염증 수치 안정화</li>
              </ul>
            </div>
          </div>

          {/* Do & Don't */}
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {/* Allowed */}
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <CheckCircle2 size={24} style={{ color: '#10B981' }} />
                <h3 style={{ marginBottom: 0, fontSize: '1.25rem' }}>단식 중 허용되는 것 (No Calorie)</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-white)', lineHeight: 2 }}>
                <li>• 생수, 향/단맛 없는 순수 탄산수</li>
                <li>• 블랙커피, 아메리카노 (시럽 절대 금지)</li>
                <li>• 녹차, 홍차 등 달지 않은 순수 차(Tea)</li>
              </ul>
            </div>

            {/* Forbidden */}
            <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <XCircle size={24} className="text-red" />
                <h3 style={{ marginBottom: 0, fontSize: '1.25rem' }}>단식 중 절대 안 되는 것 (Insulin Spike)</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-white)', lineHeight: 2 }}>
                <li>• 믹스커피, 라떼, 제로 콜라 등 인공 감미료</li>
                <li>• 액상과당, 시럽이 들어간 모든 음료</li>
                <li>• 우유, 주스 등 칼로리가 포함된 액체류</li>
              </ul>
              <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-gray)', display: 'flex', gap: '0.5rem' }}>
                <Info size={14} /> 8시간의 식사 시간 내에는 자유롭게 드실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastingGuide;
