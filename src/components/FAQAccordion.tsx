import { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "영업직이라 일주일에 3번은 술자리(회식)가 있습니다. 포기해야 할까요?",
      a: "아닙니다. 술자리 전후의 대처법이 핵심입니다. 회식 다음 날은 16~20시간 단식을 철저히 지켜 몸을 비우고, 안주는 탄수화물을 배제한 단백질 위주로 선택하는 '회식 방어 가이드'를 실천하면 충분히 성공 가능합니다."
    },
    {
      q: "무릎이 안 좋아서 스쿼트나 달리기는 엄두가 안 납니다.",
      a: "ET형 체형 탈출의 핵심은 무리한 관절 사용이 아닙니다. 복부 비만은 오히려 하체에 과부하를 줍니다. 관절에 무리가 가지 않는 벽 스쿼트, 데드버그와 같은 저강도 코어 운동과 평지 걷기만으로도 충분한 변화가 일어납니다."
    },
    {
      q: "평소 식단 조절을 전혀 안 해봤는데 힘들지 않을까요?",
      a: "무조건 굶는 방식이 아닙니다. 먹는 '시간'을 조절하는 것이 핵심입니다. 8시간 동안은 든든하게 드실 수 있기 때문에 스트레스가 적으며, 몸이 적응하는 1주일만 지나면 오히려 컨디션이 좋아지는 것을 체감하게 됩니다."
    },
    {
      q: "나이가 50대 중반인데, 정말 뱃살이 빠질까요?",
      a: "중년 남성의 뱃살은 호르몬 불균형과 인슐린 저항성이 주원인입니다. 단순 칼로리 제한이 아닌 대사 시스템을 정상화하는 본 솔루션은 나이와 상관없이 체지방 연소 스위치를 켭니다. 50대 이상 실천자들의 만족도가 가장 높습니다."
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>현실적인 의문 해소 (FAQ)</h2>
          <p className="text-gray">당신이 가졌던 마지막 망설임을 해결해 드립니다.</p>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ 
              backgroundColor: 'var(--primary)', 
              borderRadius: '1.25rem', 
              border: '1px solid rgba(255,255,255,0.03)',
              overflow: 'hidden'
            }}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ 
                  width: '100%', 
                  padding: '1.5rem 2rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  backgroundColor: 'transparent',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <HelpCircle size={20} className="text-orange" />
                  <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-white)' }}>{faq.q}</span>
                </div>
                <ChevronDown 
                  size={20} 
                  className="text-gray" 
                  style={{ 
                    transition: 'transform 0.3s', 
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)' 
                  }} 
                />
              </button>
              
              <div style={{ 
                maxHeight: openIndex === i ? '300px' : '0', 
                overflow: 'hidden', 
                transition: 'max-height 0.3s ease-in-out',
                backgroundColor: 'rgba(255,255,255,0.01)'
              }}>
                <div style={{ padding: '0 2rem 2rem 4rem', display: 'flex', gap: '1rem' }}>
                  <CheckCircle2 size={20} className="text-gray" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <p className="text-gray" style={{ lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
