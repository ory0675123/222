import { HelpCircle, CheckCircle2 } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "나이가 들어서 기초대사량이 줄어 안 빠지는 거 아닌가요?",
      a: "연구 결과에 따르면, 40-50대의 대사율 감소는 활동량과 근육량 감소가 주된 원인입니다. 근육만 다시 깨우면 20대 부럽지 않은 지방 연소 능력을 회복할 수 있습니다."
    },
    {
      q: "과일이나 믹스커피 한 잔 정도는 괜찮지 않나요?",
      a: "과당과 설탕은 인슐린 수치를 폭발시켜 지방 연소를 즉각 중단시킵니다. 특히 과일의 과당은 간으로 직접 전달되어 '지방간'과 '내장지방'을 만드는 가장 빠른 원료가 됩니다."
    },
    {
      q: "무릎과 허리가 아파서 운동을 못 하는데 어떡하죠?",
      a: "오히려 복부 비만이 척추와 무릎에 과부하를 줍니다. 본 솔루션에서 제안하는 벽 스쿼트, 데드버그와 같은 저강도 코어 운동은 관절을 보호하며 근력을 키우는 최적의 방법입니다."
    },
    {
      q: "회식이 잦은데 정말 성공할 수 있을까요?",
      a: "회식은 메뉴 선택만 잘해도 절반은 성공입니다. 고기와 채소 위주로 드시고 술과 물을 1:1로만 드셔도 내장지방 축적을 최소화할 수 있습니다."
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>흔한 착각 vs 진실 (FAQ)</h2>
          <p className="text-gray">당신이 그동안 실패했던 진짜 이유를 알려드립니다.</p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ 
              backgroundColor: 'var(--primary)', 
              padding: '2rem', 
              borderRadius: '1.5rem', 
              border: '1px solid rgba(255,255,255,0.03)'
            }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <HelpCircle size={24} className="text-orange" style={{ flexShrink: 0 }} />
                <h3 style={{ fontSize: '1.125rem', marginBottom: 0, lineHeight: 1.4 }}>{faq.q}</h3>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingLeft: '2.5rem' }}>
                <CheckCircle2 size={20} className="text-gray" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <p className="text-gray" style={{ lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
