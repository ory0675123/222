import { useState, useMemo } from 'react';
import { Calculator as CalcIcon, RefreshCw, Footprints, Flame, Coffee } from 'lucide-react';

const Calculator: React.FC = () => {
  const [age, setAge] = useState<string>('45');
  const [height, setHeight] = useState<string>('175');
  const [weight, setWeight] = useState<string>('85');
  const [activity, setActivity] = useState<string>('1.2');

  const results = useMemo(() => {
    const a = parseFloat(age);
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const act = parseFloat(activity);

    if (isNaN(a) || isNaN(h) || isNaN(w)) return null;

    const bmi = w / Math.pow(h / 100, 2);
    const bmr = 10 * w + 6.25 * h - 5 * a + 5; 
    const tdee = bmr * act;
    
    // 맞춤형 식사량 (TDEE - 500kcal)
    const targetCalories = Math.round(tdee - 500);
    
    // 맞춤형 운동량 (체중 1kg당 100보 기준, 시간 역산)
    const targetSteps = Math.round(w * 100);
    const walkingMinutes = Math.round(targetSteps / 120); // 1분당 120보 기준

    return {
      bmi: bmi.toFixed(1),
      bmr: Math.round(bmr),
      targetCalories,
      targetSteps,
      walkingMinutes,
      isSedentary: activity === '1.2'
    };
  }, [age, height, weight, activity]);

  const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return { text: '저체중', color: '#3B82F6' };
    if (bmi < 23) return { text: '정상', color: '#10B981' };
    if (bmi < 25) return { text: '과체중', color: 'var(--accent-orange)' };
    return { text: '비만', color: 'var(--accent-red)' };
  };

  return (
    <section id="calculator" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            backgroundColor: 'rgba(249, 115, 22, 0.1)', 
            padding: '0.5rem 1rem', 
            borderRadius: '100px', 
            marginBottom: '1rem' 
          }}>
            <CalcIcon size={20} className="text-orange" />
            <span className="text-orange" style={{ fontWeight: 600, fontSize: '0.875rem' }}>인터랙티브 진단기</span>
          </div>
          <h2>당신의 건강 데이터 분석</h2>
          <p className="text-gray">단순한 BMI를 넘어, 실전 목표치를 도출해 드립니다.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Inputs */}
          <div style={{ 
            backgroundColor: 'var(--secondary)', 
            padding: '2.5rem', 
            borderRadius: '1.5rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
          }}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>나이 (세)</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{ width: '100%' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>신장 (cm)</label>
                  <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} style={{ width: '100%' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>체중 (kg)</label>
                  <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} style={{ width: '100%' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>평소 활동량</label>
                <select value={activity} onChange={(e) => setActivity(e.target.value)} style={{ width: '100%' }}>
                  <option value="1.2">거의 없음 (사무직, 좌식 생활)</option>
                  <option value="1.55">보통 (주 3~5회 가벼운 운동)</option>
                  <option value="1.9">매우 활동적 (강도 높은 운동)</option>
                </select>
              </div>
            </div>
          </div>

          {/* New Results Interface */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {results ? (
              <>
                <div style={{ 
                  backgroundColor: 'var(--primary)', 
                  padding: '2rem', 
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(255,255,255,0.05)',
                  textAlign: 'center'
                }}>
                  <p className="text-gray" style={{ marginBottom: '0.5rem' }}>체형 진단 결과</p>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: getBmiCategory(parseFloat(results.bmi)).color }}>
                    BMI {results.bmi} : {getBmiCategory(parseFloat(results.bmi)).text}
                  </div>
                </div>

                {/* Target Calorie */}
                <div style={{ 
                  backgroundColor: 'rgba(239, 68, 68, 0.1)', 
                  padding: '1.5rem', 
                  borderRadius: '1rem',
                  borderLeft: '4px solid var(--accent-red)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <Flame className="text-red" size={24} />
                  <div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>맞춤형 식사량 (하루 목표)</p>
                    <p style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                      Sir의 내장지방 연소를 위한 하루 권장 섭취량은 <span className="text-red">{results.targetCalories.toLocaleString()}kcal</span>입니다.
                    </p>
                  </div>
                </div>

                {/* Target Steps */}
                <div style={{ 
                  backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                  padding: '1.5rem', 
                  borderRadius: '1rem',
                  borderLeft: '4px solid #3B82F6',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <Footprints style={{ color: '#3B82F6' }} size={24} />
                  <div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>맞춤형 운동량 (걷기 목표)</p>
                    <p style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                      하루 <span style={{ color: '#3B82F6' }}>{results.targetSteps.toLocaleString()}보</span>만 채우십시오. (약 {results.walkingMinutes}분 분량)
                    </p>
                  </div>
                </div>

                {/* Lifestyle Tip */}
                {results.isSedentary && (
                  <div style={{ 
                    backgroundColor: 'rgba(16, 185, 129, 0.1)', 
                    padding: '1.5rem', 
                    borderRadius: '1rem',
                    borderLeft: '4px solid #10B981',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <Coffee style={{ color: '#10B981' }} size={24} />
                    <div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>맞춤형 생활 습관</p>
                      <p style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                        1시간마다 알람을 맞추고 정수기까지 2분간 걷기를 추가하십시오.
                      </p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem' }}>
                <RefreshCw className="text-gray" size={48} style={{ marginBottom: '1rem' }} />
                <p className="text-gray">수치를 입력하시면 분석 결과가 표시됩니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
