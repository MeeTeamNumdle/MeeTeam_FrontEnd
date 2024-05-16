import DOMPurify from 'dompurify';

export const DEFAULT_VALUE = `
<h2 style="color:#8e8e8e;">1. 프로젝트 계기</h2>
 
<strong>- 해당 프로젝트를 시작하게된 계기를 적어주세요.</strong>
<span style="color:#8e8e8e;">ex) 대학생 때는 전공을 불문하고, 굉장히 많은 팀프로젝트를 하게 됩니다. 하지만 프로젝트를 진행하면서 팀원 때문에 고통받는 사람들을 여럿 볼 수 있는데요! 그런 사람들에게 도움이 되는 플랫폼을 만들면 좋겠다고 생각했어요!</span>
 
<strong>- 만들고자 하는 프로덕트에 대해 알려주세요.</strong> 
<span style="color:#8e8e8e;">ex) 대학생을 위한 프로젝트 구인 플랫폼을 만들고자 합니다. 대학생동안 많은 팀프로젝트를 하면서 나랑 잘 어울리는 팀원과 만날 수 있는 플랫폼이에요. 궁극적인 목표는 프로젝트에서 팀원을 구할 때, 오픈된 프로필을 바탕으로 자신의 니즈에 맞는 팀원을 구하는데 도움을 주는 플랫폼을 만들고자 합니다. 더불어 우리는 해당 플랫폼을 바탕으로 팀 프로젝트 할 때 서로의 능력을 오픈하는 문화를 만들고 싶습니다!</span>
 
<strong>- 어떤 사용자들을 타겟하고 있는지 적어주세요</strong> 
<span style="color:#8e8e8e;">ex) 아무래도 주 타겟은 전국 대학생이에요! 이후에는 직장인까지 확장해보고 싶어요!</span>
 
 
<h2 style="color:#8e8e8e;">2. 회의 진행/모임 방식</h2> 
 
<strong>- 1주에 몇번정도 회의나 모임을 진행할 계획인가요?</strong> 
<span style="color:#8e8e8e;">ex) 1주일에 1~2회 정기회의가 있습니다.</span>
 
<strong>- 온/오프라인 회의 진행시 진행방식을 적어주세요.</strong> 
<span style="color:#8e8e8e;">ex) 온라인은 줌을 활용하고, 공유 사무실 공간이 있습니다. 문서화는 노션을 지향합니다.</span>
 
 
<h2 style="color:#8e8e8e;">3. 우리 팀 문화는요</h2>
 
<strong>- 프로젝트 동안 지향하는 문화를 적어주세요.</strong>
<span style="color:#8e8e8e;">ex) 저희는 신속한 의사소통을 지향해요. \n회의시간은 1시간 내로 제한하려고 해요. 그리고 오버커뮤니케이션을 지향해요.\n</span>
 
<strong>- 프로젝트 동안 지양하는 문화를 적어주세요.</strong>
<span style="color:#8e8e8e;">ex) 누군가 단독적인 의사결정을 기피하고 있어요.</span>
 
 
<h2 style="color:#8e8e8e;">4. 저는 누구냐면요</h2>
 
<strong>- 전문적으로 담당한 업무나, 별도로 진행하신 팀 프로젝트가 있으시다면 적어주세요.</strong>
<span style="color:#8e8e8e;">ex) 실무에서 서버 개발 경험이 있습니다. 뿐만 아니라 작은 팀을 이끈 경험도 여러 번 있어요.</span>
 
<strong>- 이 프로젝트에서 나(리더) 역할을 적어주세요.</strong>
<span style="color:#8e8e8e;">ex) 전체적인 프로덕트 매니징은 제가 주로 담당할 예정이에요! 여러분은 개발에만 집중할 수 있게끔 노력할게요!</span>
 
 
<h2 style="color:#8e8e8e;">5. 기타사항</h2>
 
<strong>- 이외에 미래의 팀원들에게 알려줄 내용이 있다면 적어주세요.</strong>
<span style="color:#8e8e8e;">ex) 매주 금요일 저녁 일정이 있습니다.</span>
 
`;

const lines = DEFAULT_VALUE.split('\n')
	.map(line => `<p style="height:12px;">${line}</p>`)
	.join('');

export const SAFE_DEFAULT_VALUE = DOMPurify.sanitize(lines);
