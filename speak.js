// speak.js

const NPC_DIALOGUES = {
    intro: [
        "오늘 급식 완전 기대하고 왔어요!",
        "선생님! 체육 시간 끝나서 배고파 쓰러질 것 같아요...",
        "오늘도 맛있는 밥 주실 거죠?",
        "급식표 안 보고 왔는데, 오늘 메뉴 뭔가요?",
        "배고파요! 밥 많이 주세요!"
    ],
    allergy: [
        "아참! 🚫 저는 [{allergy}] 알레르기가 있어요.",
        "🚫 저 알레르기가 있어서 [{allergy}] 못 먹어요.",
        "🚫 저 [{allergy}] 들어가면 안돼요. 빼고 주시면 감사하겠습니다!"
    ],
    bonus: [
        "✨ 영양사 선생님의 센스: [{bonus}] 활용하기!",
        "✨ 오늘의 히든 미션: [{bonus}] 듬뿍 넣어주기!",
        "✨ (속닥속닥) 오늘 [{bonus}] 메뉴가 나오면 친구들이 엄청 좋아할걸요?"
    ],
    witty_comments: {
        perfect: [
            "심사숙고 명장! 오늘 급식은 미슐랭 3스타급입니다! 😘",
            "이게 바로 영양과 맛의 황금 밸런스! 잔반통이 텅 빌 거예요! 💯",
        ],
        good: [
            "든든한 한 끼! 이 정도면 꽤 훌륭하네요. 잘 먹겠습니다! 😊",
            "조금 아쉬운 부분도 있지만, 정성이 느껴지는 따뜻한 급식이에요! 👍"
        ],
        bad: [
            "선생님... 오늘 급식 메뉴 조합이 살짝 이상해요 ㅠㅠ 😭",
            "식품군이 골고루 들어가지 않았어요. 다음엔 더 신경 써주세요. 🥺"
        ]
    }
};

// 💡 모달에 띄울 인트로 대사 생성 함수
function getIntroMessage(allergyTarget, bonusTarget) {
    let msg = NPC_DIALOGUES.intro[Math.floor(Math.random() * NPC_DIALOGUES.intro.length)];
    
    if (allergyTarget) {
        msg += "<br>" + NPC_DIALOGUES.allergy[Math.floor(Math.random() * NPC_DIALOGUES.allergy.length)].replace('{allergy}', allergyTarget);
    }
    if (bonusTarget) {
        msg += "<br>" + NPC_DIALOGUES.bonus[Math.floor(Math.random() * NPC_DIALOGUES.bonus.length)].replace('{bonus}', bonusTarget);
    }
    
    if (!allergyTarget && !bonusTarget) {
         msg += "<br>오늘은 편식 안 하고 뭐든 다 잘 먹을 수 있어요!";
    }
    
    return msg;
}

// 💡 획득 점수에 따른 한 줄 평 생성 함수
function getWittyComment(score) {
    if (score >= 120) return NPC_DIALOGUES.witty_comments.perfect[Math.floor(Math.random() * NPC_DIALOGUES.witty_comments.perfect.length)];
    if (score >= 80) return NPC_DIALOGUES.witty_comments.good[Math.floor(Math.random() * NPC_DIALOGUES.witty_comments.good.length)];
    return NPC_DIALOGUES.witty_comments.bad[Math.floor(Math.random() * NPC_DIALOGUES.witty_comments.bad.length)];
}