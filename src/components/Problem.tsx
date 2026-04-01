import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const Problem: React.FC = () => {
  const checklist = [
    "앉아있을 때 배가 허벅지에 닿는다.",
    "바지를 입을 때 배를 집어넣어야 단추가 잠긴다.",
    "팔다리는 가늘어지는데 유독 배만 나온다.",
    "허리둘레가 90cm(35인치) 이상이다.",
    "숨이 자주 차고 만성 피로를 느낀다.",
    "최근 1년 사이 허리띠 구멍이 하나 이상 늘어났다."
  ];

  return (
    <section style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>단순한 '나잇살'이 아닙니다</h2>
          <p className="text-gray" style={{ fontSize: '1.125rem' }}>
            내장지방은 혈관을 타고 전신을 돌며 <span className="text-red">염증을 일으키는 시한폭탄</span>입니다.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Comparison Card 1 */}
          <div style={{ 
            backgroundColor: 'var(--primary)', 
            padding: '2rem', 
            borderRadius: '1rem',
            border: '1px solid #ffffff10'
          }}>
            <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>피하지방</h3>
            <p className="text-gray">피부 바로 아래 쌓이는 지방. 보기에는 좋지 않지만, 대사 질환과의 직접적인 연관성은 낮습니다.</p>
          </div>

          {/* Comparison Card 2 */}
          <div style={{ 
            backgroundColor: 'var(--primary)', 
            padding: '2rem', 
            borderRadius: '1rem',
            border: '2px solid var(--accent-red)',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '-15px', 
              right: '20px', 
              backgroundColor: 'var(--accent-red)', 
              color: 'white', 
              padding: '0.25rem 0.75rem', 
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 700
            }}>
              위험!
            </div>
            <h3 style={{ color: 'var(--accent-red)', marginBottom: '1rem' }}>내장지방 (ET형)</h3>
            <p className="text-gray">장기 사이사이에 끼어있는 지방. 중년 남성 전신 활력 저하의 주범입니다.</p>
          </div>
        </div>

        {/* Checklist */}
        <div style={{ 
          backgroundColor: 'rgba(239, 68, 68, 0.05)', 
          padding: '2.5rem', 
          borderRadius: '1.5rem',
          border: '1px dashed var(--accent-red)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <AlertTriangle className="text-red" size={28} />
            <h3 style={{ marginBottom: 0 }}>자가 진단 체크리스트</h3>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem'
          }}>
            {checklist.map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 className="text-red" size={20} style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                <p style={{ fontSize: '1.05rem' }}>{item}</p>
              </div>
            ))}
          </div>
          
          <p style={{ 
            marginTop: '2.5rem', 
            textAlign: 'center', 
            fontSize: '0.9rem', 
            color: 'var(--text-gray)',
            fontStyle: 'italic'
          }}>
            * 3개 이상 해당된다면 지금 당장 관리가 필요한 단계입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
