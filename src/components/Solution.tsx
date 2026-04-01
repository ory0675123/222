import { Utensils, Dumbbell, Zap, Moon, Droplets } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>ET 탈출을 위한 3대 핵심 솔루션</h2>
          <p className="text-gray">무리한 다이어트가 아닌, 중년 남성의 몸에 최적화된 루틴을 제안합니다.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {/* Diet */}
          <div style={{ backgroundColor: 'var(--primary)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Utensils className="text-orange" size={28} />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>01. 식단관리</h3>
            <p style={{ fontWeight: 600, color: 'var(--accent-orange)', marginBottom: '1rem' }}>16:8 간헐적 단식</p>
            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-gray)', lineHeight: 1.8 }}>
              <li>• 저녁 8시 ~ 다음 날 정오까지 금식</li>
              <li>• 인슐린 저항성 개선으로 내장지방 연소</li>
              <li>• 회식 시 '단백질+채소' 위주 섭취</li>
              <li>• 저정제 탄수화물(현미, 잡곡) 권장</li>
            </ul>
          </div>

          {/* Exercise */}
          <div style={{ backgroundColor: 'var(--primary)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Dumbbell className="text-red" size={28} />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>02. 운동루틴</h3>
            <p style={{ fontWeight: 600, color: 'var(--accent-red)', marginBottom: '1rem' }}>코어 및 하체 강화</p>
            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-gray)', lineHeight: 1.8 }}>
              <li>• <b>스쿼트:</b> 하체 근육량 증대로 기초대사량 폭발</li>
              <li>• <b>플랭크:</b> 복부 팽창을 잡는 복횡근 강화</li>
              <li>• 일 20분, 주 4회 이상 고강도 인터벌</li>
              <li>• 생활 속 걷기 (엘리베이터 대신 계단)</li>
            </ul>
          </div>

          {/* Lifestyle */}
          <div style={{ backgroundColor: 'var(--primary)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Zap style={{ color: '#3B82F6' }} size={28} />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>03. 생활습관</h3>
            <p style={{ fontWeight: 600, color: '#3B82F6', marginBottom: '1rem' }}>호르몬 밸런스 관리</p>
            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-gray)', lineHeight: 1.8 }}>
              <li>• <Moon size={16} style={{ verticalAlign: 'middle' }} /> <b>7시간 수면:</b> 코르티솔(스트레스 호르몬) 조절</li>
              <li>• <Droplets size={16} style={{ verticalAlign: 'middle' }} /> <b>일일 2L 수분:</b> 대사 효율 극대화</li>
              <li>• 스트레스 관리 및 명상 (복부 비만 원인 차단)</li>
              <li>• 자기 전 3시간 공복 유지</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
