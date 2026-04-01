import { Store, Beer, Info } from 'lucide-react';

const SurvivalMatrix: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>직장인 뱃살 생존 매트릭스</h2>
          <p className="text-gray">바쁜 업무와 불가피한 회식 속에서 내장지방을 방어하는 실전 전술</p>
        </div>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {/* Item 1: Convenience Store */}
          <div style={{ 
            backgroundColor: 'var(--primary)', 
            padding: '2rem', 
            borderRadius: '1.5rem',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                <Store style={{ color: '#10B981' }} size={24} />
              </div>
              <h3 style={{ marginBottom: 0 }}>편의점 최강의 조합 (Best Choice)</h3>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {[
                { label: "단백질 집중", item: "감동란(2알) + 닭가슴살 샐러드", tip: "드레싱은 절반만 뿌리십시오." },
                { label: "포만감 집중", item: "바나나 1개 + 저지방 우유 또는 두유", tip: "삼각김밥은 탄수화물 폭탄입니다." },
                { label: "음료 선택", item: "블랙 커피 또는 0kcal 탄산수", tip: "액상과당은 내장지방의 지름길입니다." }
              ].map((matrix, i) => (
                <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '1rem' }}>
                  <p style={{ color: '#10B981', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>{matrix.label}</p>
                  <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{matrix.item}</p>
                  <p className="text-gray" style={{ fontSize: '0.85rem' }}>{matrix.tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Item 2: Alcohol & Dining Out */}
          <div style={{ 
            backgroundColor: 'var(--primary)', 
            padding: '2rem', 
            borderRadius: '1.5rem',
            border: '1px solid rgba(259, 115, 22, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                <Beer className="text-orange" size={24} />
              </div>
              <h3 style={{ marginBottom: 0 }}>불가피한 회식 대응 매뉴얼</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ borderLeft: '3px solid var(--accent-orange)', paddingLeft: '1.5rem' }}>
                <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>주류별 최적의 안주 매칭</p>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: 'var(--text-gray)', lineHeight: 1.8 }}>
                  <li>• <b>소주:</b> 구운 고기(삼겹살X 목살O), 회, 생선구이</li>
                  <li>• <b>맥주:</b> 견과류, 마른 안주 (튀김류 절대 금지)</li>
                  <li>• <b>위스키/와인:</b> 치즈, 과일 (당분 주의)</li>
                </ul>
              </div>
              <div style={{ borderLeft: '3px solid var(--accent-red)', paddingLeft: '1.5rem' }}>
                <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>회식 후 '데미지 컨트롤'</p>
                <p className="text-gray" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                  과식한 다음 날 아침은 무조건 굶으십시오. <br />
                  <b>최소 20시간 공복</b>을 유지하여 인슐린 수치를 바닥으로 떨어뜨려야 전날 먹은 안주가 체지방으로 변하는 것을 막을 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p className="text-gray" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
            <Info size={16} /> 본 매뉴얼은 현직 트레이너와 영양학자의 자문을 바탕으로 작성되었습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SurvivalMatrix;
